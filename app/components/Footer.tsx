import { FooterNavigation } from "./FooterNavigation"

export function Footer() {
  return (
    <div className="bg-gray-800 w-full h-52 text-white flex items-center">
      <div className="w-full flex flex-row">
        <div className="w-[70%]">
          <div className="mb-5 font-bold text-[26px]">재가복지센터</div>
          <div className="text-gray-500 text-sm w-full">
            주소: 강원도 원주시 무실동 주공6단지 606동 1401호 | 전화:
            010-0000-0000 | 이메일: gallove@gmail.com
          </div>
        </div>
        <div className="w-[30%] self-center">
          <FooterNavigation />
        </div>
      </div>
    </div>
  );
}
