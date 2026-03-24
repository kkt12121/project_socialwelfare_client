import { useState } from "react";
import { useLoaderData, Link, type LoaderFunctionArgs } from "react-router";
import type { Route } from "./+types/home";
import { RootLayout } from "../layouts/RootLayout";
import { formatDate } from "../utils/formatDate";
import { NoticeListLoader } from "../fetches/loaders/noticeListLoader";
import { UserInfoLoader } from "../fetches/loaders/userInfoLoader";

interface NoticeItems {
  id: number;
  user_id: number;
  title: string;
  content: string;
  created_at: string;
}

// interface UserInfo {
//   id: number;
//   name: string;
//   email: string;
//   super: number;
// }

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
  const [NOTICE_DATA, user] = await Promise.all([
    NoticeListLoader(),
    UserInfoLoader(args),
  ]);

  return { NOTICE_DATA, user };
};

export default function Notice() {
  const { NOTICE_DATA, user } = useLoaderData() as {
    NOTICE_DATA: NoticeItems[];
    user: any | null;
  };

  const PAGE_SIZE = 5;
  const [itemsToShow, setItemsToShow] = useState(PAGE_SIZE);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + PAGE_SIZE);
  };

  const visibleNotices = NOTICE_DATA.slice(0, itemsToShow);
  const isLastPage = itemsToShow >= NOTICE_DATA.length;

  return (
    <RootLayout>
      <div className="m-auto w-full min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-20">
          <div className="border-b-2 border-gray-900 pb-4 mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">공지사항</h2>
              <p className="text-gray-500 mt-2">
                새로운 소식과 안내를 전달해 드립니다.
              </p>
            </div>

            {user && Number(user.super) === 1 && (
              <div className="bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md overflow-hidden">
                <Link
                  to="/notice/write"
                  className="inline-flex items-center gap-2 px-5 py-2.5 w-full h-full"
                >
                  <span>작성하기</span>
                </Link>
              </div>
            )}
          </div>

          <ul>
            {visibleNotices.map((notice: any, index: any) => (
              <li key={notice.id} className="group">
                <Link
                  to={`/notice/${notice.id}`}
                  className="flex justify-between items-center pb-5 px-2 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      {index < 3 && (
                        <span className="bg-emerald-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          NEW
                        </span>
                      )}
                      <span className="text-lg font-medium text-gray-800 group-hover:text-emerald-400 transition-colors">
                        {notice.title}
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      {formatDate(notice.created_at)}
                    </span>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-emerald-400 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>

          {!isLastPage && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-full text-gray-600 font-medium hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>더보기</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}

          {NOTICE_DATA.length === 0 && (
            <p className="text-center text-gray-500 mt-20">
              등록된 공지사항이 없습니다.
            </p>
          )}

          {isLastPage && NOTICE_DATA.length >= 6 && (
            <p className="text-center text-gray-400 mt-10 text-sm">
              마지막 공지사항입니다.
            </p>
          )}
        </div>
      </div>
    </RootLayout>
  );
}
