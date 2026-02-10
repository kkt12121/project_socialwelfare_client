import { FooterNavigation } from "./FooterNavigation";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 py-10 px-6 shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-xl">가담재가복지센터</h3>

          <div className="space-y-2 text-sm">
            <p>강원특별자치도 원주시 만대로 148 2층 | 대표자: 김기훈</p>
            <p>사업자등록번호: 620-80-28046</p>

            <div className="pt-2 flex flex-col gap-3">
              <div className="text-white font-bold text-lg flex items-center gap-2">
                <span className="text-gray-400 text-sm font-normal uppercase tracking-wider">
                  EaiL.
                </span>
                topgold777@daum.net
              </div>

              <div className="text-white font-bold text-lg flex items-center gap-2">
                <span className="text-gray-400 text-sm font-normal uppercase tracking-wider">
                  Tel.
                </span>
                033-746-7579
              </div>

              <a
                href="https://blog.naver.com/gadam7579"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex gap-3 bg-[#03C75A] text-white py-2.5 rounded-xl text-lg font-bold hover:bg-[#02b351] transition-all w-fit shadow-md hover:scale-[1.02]"
              >
                <span className="bg-white text-[#03C75A] w-6 h-6 flex items-center justify-center rounded-sm text-sm font-black">
                  N
                </span>
                공식 블로그 방문하기
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-500 pt-4">
            Copyright © 2026 Gadam Care Center. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium self-end md:self-center">
          <span className="hover:text-white cursor-pointer transition-colors">
            이용약관
          </span>
          <span className="hover:text-white cursor-pointer transition-colors text-emerald-500 underline underline-offset-4">
            개인정보처리방침
          </span>
        </div>
      </div>
    </footer>
  );
}
