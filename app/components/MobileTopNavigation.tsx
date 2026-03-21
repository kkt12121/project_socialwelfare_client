import { Link, useRouteLoaderData, Form } from "react-router";

interface MobileTopNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileTopNavigation({
  isOpen,
  onClose,
}: MobileTopNavigationProps) {
  const rootData = useRouteLoaderData("root") as {
    user: { userInfo: string } | null;
  };

  const user = rootData?.user;

  return (
    <div
      className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-full"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex flex-col h-dvh w-full text-black bg-white overflow-hidden">
        <div className="flex justify-end items-center px-8 h-20 bg-white shrink-0">
          <button
            onClick={onClose}
            className="p-3 text-slate-900 bg-slate-100 rounded-full active:scale-90 transition-transform"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-10 py-10 flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              onClick={onClose}
              className="text-3xl font-black text-slate-900 tracking-tight"
            >
              홈
            </Link>
            <Link
              to="/about"
              onClick={onClose}
              className="text-3xl font-black text-slate-900 tracking-tight"
            >
              센터소개
            </Link>

            <div className="py-2 border-l-4 border-emerald-500 pl-6 my-2 flex flex-col gap-4">
              <span className="text-[12px] font-black text-emerald-600 uppercase tracking-widest">
                Services
              </span>
              <div className="flex flex-col gap-4">
                <Link
                  to="/service/homecare"
                  onClick={onClose}
                  className="text-xl font-bold text-slate-700"
                >
                  방문요양
                </Link>
                <Link
                  to="/service/grade"
                  onClick={onClose}
                  className="text-xl font-bold text-slate-700"
                >
                  등급신청
                </Link>
                <Link
                  to="/service/fee"
                  onClick={onClose}
                  className="text-xl font-bold text-slate-700"
                >
                  이용요금
                </Link>
                <Link
                  to="/service/caregiver"
                  onClick={onClose}
                  className="text-xl font-bold text-slate-700"
                >
                  요양보호사 지원
                </Link>
              </div>
            </div>

            <Link
              to="/notice"
              onClick={onClose}
              className="text-3xl font-black text-slate-900 tracking-tight"
            >
              공지사항
            </Link>
            <Link
              to="/map"
              onClick={onClose}
              className="text-3xl font-black text-slate-900 tracking-tight"
            >
              오시는길
            </Link>
          </div>
        </nav>

        <div className="p-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] shrink-0 text-xl font-bold border-t border-slate-50">
          {user ? (
            <Form action="/logout" method="post">
              <button
                type="submit"
                className="flex items-center justify-center w-full py-5 border border-emerald-600 rounded-2xl shadow-xl shadow-emerald-200"
              >
                로그아웃
              </button>
            </Form>
          ) : (
            <Link
              to="/login"
              onClick={onClose}
              className="flex items-center justify-center w-full py-5 border border-emerald-600 rounded-2xl shadow-xl shadow-emerald-200"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
