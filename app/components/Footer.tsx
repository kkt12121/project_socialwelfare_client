import { FooterNavigation } from "./FooterNavigation";

export function Footer() {
  return (
    <div className="bg-gray-800 w-full h-52 text-white flex items-center">
      <div className="w-full flex flex-row">
        <div className="w-[70%]">
          <div className="mb-5 font-bold text-[26px]">가담재가복지센터</div>
          <div className="text-gray-500 text-sm w-full">
            주소: 강원특별자치도 원주시 만대로 148 | 전화: 033-746-7579 |
            이메일: topgold777@daum.net
          </div>
        </div>
        <div className="w-[30%] self-center">
          <FooterNavigation />
        </div>
      </div>
    </div>
  );
}
