import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router";
import "react-quill-new/dist/quill.snow.css";
import { RootLayout } from "../layouts/RootLayout";
import type { Route } from "./+types/home";
import { compressImage } from "../utils/compressImage";
import { NoticeDetailLoader } from "../fetches/loaders/noticeDetailLoader";
import { EditNoticeAction } from "../fetches/actions/editNoticeAction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "가담재가복지센터" },
    {
      name: "가담재가복지센터",
      content: "가담재가복지센터에 오신 것을 환영합니다",
    },
    {
      tagName: "link",
      rel: "icon",
      href: "/images/gadamIcon.jpg",
    },
  ];
}

export const loader = async (args: LoaderFunctionArgs) => {
  const [notice] = await Promise.all([NoticeDetailLoader(args)]);
  return { notice };
};

export const action = EditNoticeAction;

export default function EditNotice() {
  const { notice } = useLoaderData() as { notice: any };
  const navigate = useNavigate();
  const actionData = useActionData() as { error?: string };

  const [title, setTitle] = useState(notice?.title || "");
  const [content, setContent] = useState(notice?.content || "");

  const [Quill, setQuill] = useState<any>(null);
  const quillRef = useRef<any>(null);

  useEffect(() => {
    import("react-quill-new").then((mod) => {
      setQuill(() => mod.default);
    });
  }, []);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        // 서버 전송 전 브라우저에서 압축 실행
        const compressedBlob = await compressImage(file);

        const formData = new FormData();
        // 원본 파일명 유지 혹은 새 이름 지정
        formData.append("image", compressedBlob, "notice_image.jpg");

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/notice/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        if (!response.ok) throw new Error("Upload failed");

        const data = await response.json();
        const url = data.url;

        const quill = quillRef.current.getEditor();
        const range = quill.getSelection();
        quill.insertEmbed(range.index, "image", url);
        quill.setSelection(range.index + 1);
      } catch (error) {
        console.error("이미지 처리/업로드 에러:", error);
        alert("이미지 처리 중 오류가 발생했습니다.");
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          ["link", "image"],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    [imageHandler],
  );

  return (
    <RootLayout>
      <div className="w-full min-h-screen bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 pt-25">
          <div className="flex justify-between items-end border-b-2 border-gray-900 pb-6 mb-5">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                공지사항 수정
              </h2>
              <p className="text-slate-500 mt-2 font-medium text-emerald-600">
                기존 소식을 수정하거나 내용을 보완해보세요.
              </p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="text-slate-400 hover:text-slate-600 font-bold transition-colors text-sm mb-1"
            >
              취소하기
            </button>
          </div>

          <Form method="post" className="space-y-6">
            <input type="hidden" name="id" value={notice.id} />

            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-6 py-4 text-black bg-white border border-slate-200 rounded-2xl outline-none text-xl font-bold focus:border-emerald-500 transition-all"
            />

            <div className="bg-white mt-5 rounded-2xl shadow-sm border border-slate-200 overflow-hidden min-h-[500px] flex flex-col">
              <style>{`
                 .ql-toolbar.ql-snow { border: none; border-bottom: 1px solid #f1f5f9; padding: 15px; background: #fcfcfd; }
                 .ql-container.ql-snow { border: none; font-size: 16px; height: 500px; display: flex; flex-direction: column; }
                 .ql-editor { flex: 1; color: black; overflow-y: auto; padding: 30px; line-height: 1.8; }
                 .ql-editor::-webkit-scrollbar { width: 6px; }
                 .ql-editor::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 10px; }
                 .ql-editor::-webkit-scrollbar-thumb:hover { background-color: #10b981; }
              `}</style>

              {Quill ? (
                <Quill
                  ref={quillRef}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                />
              ) : (
                <div className="h-[500px] flex items-center justify-center text-slate-400">
                  로딩 중...
                </div>
              )}

              <input type="hidden" name="content" value={content} />
            </div>

            <div className="mt-8 mb-20">
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-14 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-[0.98] w-full md:w-auto cursor-pointer"
                >
                  수정 완료
                </button>
              </div>
              {actionData?.error && (
                <div className="flex justify-end mt-3">
                  <p className="text-red-500 text-sm font-bold">
                    {actionData.error}
                  </p>
                </div>
              )}
            </div>
          </Form>
        </div>
      </div>
    </RootLayout>
  );
}
