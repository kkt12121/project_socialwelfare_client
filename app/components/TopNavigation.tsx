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
      <Link to="/contact" className="text-white hover:text-gray-300">
        이용안내
      </Link>
      <Link to="/contact" className="text-white hover:text-gray-300">
        공지사항
      </Link>
      <Link to="/contact" className="text-white hover:text-gray-300">
        오시는길
      </Link>
    </nav>
  );
}
