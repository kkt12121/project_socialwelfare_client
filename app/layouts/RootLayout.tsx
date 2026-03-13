import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { TopNavigation } from "../components/TopNavigation";
import { MobileTopNavigation } from "../components/MobileTopNavigation";
import { Footer } from "../components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
}

export function RootLayout({ children, hideFooter }: RootLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen w-full bg-white font-sans tracking-tight">
      <header className="fixed top-0 left-0 z-100 w-full h-[70px] flex items-center bg-[#F8F9F4]/95 backdrop-blur-xl border-b border-emerald-100/50">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-11 md:h-11 bg-white p-1.5 rounded-xl shadow-sm border border-emerald-50 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/images/gadamIcon.jpg"
                alt="로고"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] md:text-lg font-black text-slate-900 leading-none">
                가담재가복지센터
              </span>
              <span className="text-[9px] md:text-[10px] text-emerald-600 font-bold tracking-widest mt-1 uppercase">
                Gadam Care Service
              </span>
            </div>
          </Link>

          {/* PC 버전 네비게이션 */}
          <TopNavigation />

          {/* 모바일 햄버거 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 text-slate-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* 모바일 버전 네비게이션 (분리된 파일) */}
        <MobileTopNavigation
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>

      <main className="w-full">{children}</main>

      {!hideFooter && (
        <footer className="bg-gray-800">
          <div className="w-3/4 m-auto">
            <Footer />
          </div>
        </footer>
      )}
    </div>
  );
}
