import {
  Link,
  useNavigate,
  useLoaderData,
  type LoaderFunctionArgs,
  useFetcher,
} from "react-router";
import { useEffect } from "react";
import { RootLayout } from "../layouts/RootLayout";
import type { Route } from "./+types/home";
import { formatDate } from "../utils/formatDate";
import { NoticeDetailLoader } from "../fetches/loaders/noticeDetailLoader";
import { UserInfoLoader } from "../fetches/loaders/userInfoLoader";
import { DeleteNoticeAction } from "../fetches/actions/deleteNoticeAction";

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
export const action = DeleteNoticeAction;

export const loader = async (args: LoaderFunctionArgs) => {
  const [notice, user] = await Promise.all([
    NoticeDetailLoader(args),
    UserInfoLoader(args),
  ]);

  return { notice, user };
};

export default function NoticeDetail() {
  const { notice, user } = useLoaderData() as { notice: any; user: any };
  const navigate = useNavigate();
  const fetcher = useFetcher();

  const isDeleting = fetcher.state !== "idle";

  const handleDelete = () => {
    if (window.confirm("정말로 이 공지사항을 삭제하시겠습니까?")) {
      fetcher.submit(null, {
        method: "post",
      });
    }
  };

  useEffect(() => {
    if (
      fetcher.state === "idle" &&
      fetcher.data &&
      !(fetcher.data as any).error
    ) {
      alert("성공적으로 삭제되었습니다.");
      navigate("/notice", { replace: true });
    } else if ((fetcher.data as any)?.error) {
      alert((fetcher.data as any).error);
    }
  }, [fetcher.state, fetcher.data, navigate]);

  if (!notice) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-4">공지사항을 찾을 수 없습니다.</p>
        <button
          onClick={() => navigate("/notice")}
          className="text-blue-600 hover:underline cursor-pointer"
        >
          목록보기
        </button>
      </div>
    );
  }

  return (
    <RootLayout>
      <div className="max-w-3xl min-h-screen mx-auto px-4 py-20">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {notice.title}
            </h1>
            <div className="flex justify-between">
              <div>
                <span className="pr-2 text-gray-500">가담재가복지센터</span>
                <span className="pr-2 text-gray-500">|</span>
                <span className="text-gray-500">
                  {formatDate(notice.created_at)}
                </span>
              </div>
              {user && Number(user.super) === 1 && (
                <button
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className={`${
                    isDeleting
                      ? "text-gray-300"
                      : "text-red-400 hover:text-red-600"
                  } font-bold transition-colors text-sm mb-1 cursor-pointer`}
                >
                  삭제하기
                </button>
              )}
            </div>
          </header>

          <div
            className="notice-content text-lg leading-relaxed pt-6 border-t border-gray-300 text-gray-700 min-h-[300px] break-all"
            dangerouslySetInnerHTML={{ __html: notice.content }}
          />

          <div className="mt-12 pt-6 border-t border-gray-300 flex justify-end items-center gap-3">
            <button
              onClick={() => navigate("/notice")}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md cursor-pointer"
            >
              목록보기
            </button>

            {user && Number(user.super) === 1 && (
              <button
                onClick={() => navigate(`/notice/edit/${notice.id}`)}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-all shadow-sm cursor-pointer border border-gray-200"
              >
                수정하기
              </button>
            )}
          </div>
        </article>
      </div>
    </RootLayout>
  );
}
