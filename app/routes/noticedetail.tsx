import { useParams, useNavigate } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { NOTICE_DATA } from "../../public/contents/notice";
import type { Route } from "./+types/home";

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

export default function NoticeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const notice = NOTICE_DATA.find((n) => n.id === Number(id));

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
      <div className="max-w-3xl min-h-screen mx-auto px-4 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {notice.title}
            </h1>
            <div className="flex justify-baseline">
              <p className="pr-2 text-gray-500">가담재가복지센터</p>
              <p className="pr-2 text-gray-500">|</p>
              <p className="text-gray-500">{notice.date}</p>
            </div>
          </header>

          <div className="text-lg leading-relaxed pt-6 border-t border-gray-300 text-gray-700 min-h-[300px] whitespace-pre-wrap break-all">
            {notice.content}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-300 text-right">
            <button
              onClick={() => navigate("/notice")}
              className="px-6 py-2 bg-gray-800 text-white rounded-md cursor-pointer"
            >
              목록보기
            </button>
          </div>
        </article>
      </div>
    </RootLayout>
  );
}
