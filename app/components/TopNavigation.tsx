import { Link, useLocation, useRouteLoaderData, Form } from "react-router";

export function TopNavigation() {
  const location = useLocation();

  const rootData = useRouteLoaderData("root") as {
    user: { userInfo: string } | null;
  };

  const user = rootData?.user;

  const navLinkStyle = (path: string) => `
    relative text-[16px] font-bold transition-all duration-300 px-1
    ${location.pathname === path ? "text-emerald-600" : "text-slate-600 hover:text-slate-900"}
    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] 
    after:bg-emerald-500 after:transition-all hover:after:w-full
  `;

  return (
    <nav className="hidden md:flex items-center gap-10">
      <Link to="/" className={navLinkStyle("/")}>
        홈
      </Link>
      <Link to="/about" className={navLinkStyle("/about")}>
        센터소개
      </Link>

      {/* 서비스안내 드롭다운 */}
      <div className="relative group cursor-pointer">
        <div className="flex items-center gap-1.5 text-[16px] font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          서비스안내
          <svg
            className="w-3.5 h-3.5 opacity-40 group-hover:rotate-180 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div className="absolute -right-4 top-full pt-4 opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
          <div className="w-60 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-2">
            {[
              { to: "/service/homecare", label: "방문요양", icon: "🏠" },
              { to: "/service/grade", label: "등급신청", icon: "📄" },
              { to: "/service/fee", label: "이용요금", icon: "💰" },
              { to: "/service/caregiver", label: "요양보호사", icon: "🤝" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-slate-50 transition-all group/item"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-[15px] font-bold text-slate-700 group-hover/item:text-emerald-600">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link to="/notice" className={navLinkStyle("/notice")}>
        공지사항
      </Link>
      <Link to="/map" className={navLinkStyle("/map")}>
        오시는길
      </Link>
      {user ? (
        <div className="flex items-center gap-5">
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="text-[15px] font-bold text-slate-400 hover:text-emerald-300 transition-colors"
            >
              로그아웃
            </button>
          </Form>
        </div>
      ) : (
        <Link to="/login" className={navLinkStyle("/login")}>
          로그인
        </Link>
      )}
    </nav>
  );
}
