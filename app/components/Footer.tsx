import { FooterNavigation } from "./FooterNavigation";

export function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 py-10 px-6 shrink-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h3 className="text-white font-bold text-lg">가담재가복지센터</h3>
          <p className="text-sm">
            강원특별자치도 원주시 만대로 148 2층 | 이메일: topgold777@daum.net |
            전화: 033-746-7579
          </p>
          <p className="text-xs text-gray-500">
            Copyright © 2024 Gadam Care Center. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 text-sm font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">
            이용약관
          </span>
          <span className="hover:text-white cursor-pointer transition-colors text-emerald-500">
            개인정보처리방침
          </span>
        </div>
      </div>
    </footer>
  );
}
