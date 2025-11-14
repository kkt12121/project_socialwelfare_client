import { TopNavigation } from "../components/TopNavigation";
import { FooterNavigation } from "../components/FooterNavigation";
import { Footer } from "../components/Footer";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white m-auto">
      <header className="relative w-full bg-gray-800 text-white h-[50px]">
        <div className="relative w-3/4 h-[50px] m-auto">
          <span className="absolute p-4 left-0 top-0 h-[50px]">
            재가복지센터
          </span>
          <TopNavigation />
        </div>
      </header>
      <main className="m-auto">
        <main className="flex-1 h-full">{children}</main>
      </main>
      <footer className="bg-gray-800">
        <div className="w-3/4 m-auto">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
