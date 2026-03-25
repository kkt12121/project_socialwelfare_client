import { FooterNavigation } from "./FooterNavigation";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 py-10 px-6 shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl">가담재가복지센터</h3>

          <div className="space-y-2 text-sm">
            <p>강원특별자치도 원주시 만대로 148 201호 | 대표자: 김기훈</p>
            <p>사업자등록번호: 620-80-28046</p>

            <div className="pt-2 flex flex-col gap-3">
              <div className="text-white font-bold text-lg flex items-center gap-2">
                <span className="text-gray-400 text-sm font-normal uppercase tracking-wider">
                  EaiL.
                </span>
                topgold777@naver.com
              </div>

              <div className="text-white font-bold text-lg flex items-center gap-2">
                <span className="text-gray-400 text-sm font-normal uppercase tracking-wider">
                  Tel.
                </span>
                033-746-7579
              </div>

              <div className="flex gap-6 text-sm font-bold">
                <button className="text-gray-500 hover:text-white transition-colors">
                  이용약관
                </button>
                <button className="text-emerald-500 hover:text-emerald-400 transition-colors underline underline-offset-8">
                  개인정보처리방침
                </button>
              </div>

              <div className="flex flex-wrap gap-6 pt-2">
                <a
                  href="https://blog.naver.com/gadam7579"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 group"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-black shrink-0 transition-all bg-[#03C75A] text-white group-hover:bg-white group-hover:text-[#03C75A]">
                    N
                  </span>
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#03C75A]">
                    네이버 블로그
                  </span>
                </a>
                <a
                  href="https://cafe.naver.com/gadam148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 group"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-black shrink-0 transition-all bg-[#01D358] text-white group-hover:bg-white group-hover:text-[#01D358]">
                    C
                  </span>
                  <span className="text-sm font-bold text-white transition-colors group-hover:text-[#01D358]">
                    네이버 카페
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/gadamhome148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 group relative z-10"
                >
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient
                        id="insta_grad"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#f9ce34" />
                        <stop offset="50%" stopColor="#ee2a7b" />
                        <stop offset="100%" stopColor="#6228d7" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#insta_grad)"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                  <span className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#ee2a7b]">
                    인스타그램
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            Copyright © 2026 Gadam Care Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
