import { Link } from "react-router";

export function TopNavigation() {
  return (
    <nav className="absolute min-w-[315px] right-0 top-0 w-1/3 h-[50px] flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-white hover:text-gray-300">
        홈
      </Link>
      <Link to="/about" className="text-white hover:text-gray-300">
        센터소개
      </Link>
      {/* ✅ 서비스안내 + 드롭다운 */}
      <div className="relative group">
        <Link
          to="/service/homecare"
          className="inline-flex items-center gap-2 text-white/90 hover:text-mint-200 transition-colors"
        >
          서비스안내
          {/* 작은 화살표 느낌 */}
          <span className="text-xs text-white/60 group-hover:text-mint-200 transition-colors">
            ▾
          </span>
        </Link>

        {/* 드롭다운 패널 */}
        <div
          className="
            absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2
            opacity-0 invisible translate-y-2
            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
            transition-all duration-200
            z-50
          "
        >
          {/* 패널 배경(현재 톤에 맞춘 다크+블러) */}
          <div className="rounded-2xl border border-white/10 bg-slate-800/95 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
            {/* 상단 민트 라인(포인트) */}
            <div className="h-[2px] bg-gradient-to-r from-mint-300/70 via-mint-200/40 to-transparent" />

            <ul className="p-2">
              {[
                {
                  to: "/service/homecare",
                  label: "방문요양",
                  desc: "방문요양 지원서비스",
                },
                {
                  to: "/service/grade",
                  label: "등급신청",
                  desc: "장기요양 등급 안내",
                },
                {
                  to: "/service/fee",
                  label: "이용요금",
                  desc: "비용/본인부담금",
                },
                {
                  to: "/service/caregiver",
                  label: "요양보호사",
                  desc: "모집/지원 안내",
                },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="
                      group/item flex items-start gap-3 rounded-xl px-3 py-2.5
                      text-white/90 hover:text-white
                      hover:bg-white/5
                      transition-colors
                    "
                  >
                    {/* 왼쪽 포인트 도트 */}
                    <span
                      className="
                        mt-1.5 h-2 w-2 rounded-full
                        bg-mint-300/70
                        group-hover/item:bg-mint-200
                        transition-colors
                      "
                    />
                    <span className="flex flex-col">
                      <span className="text-[14px] font-semibold tracking-tight">
                        {item.label}
                      </span>
                      <span className="text-[12px] text-white/55 leading-4">
                        {item.desc}
                      </span>
                    </span>

                    {/* 오른쪽 미세 화살표 */}
                    <span className="ml-auto text-white/30 group-hover/item:text-mint-200 transition-colors">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* hover 끊김 방지용 투명 영역(간격 넓혀줌) */}
          <div className="h-2" />
        </div>
      </div>
      <Link to="/notice" className="text-white hover:text-gray-300">
        공지사항
      </Link>
      <Link to="/contact" className="text-white hover:text-gray-300">
        오시는길
      </Link>
    </nav>
  );
}
