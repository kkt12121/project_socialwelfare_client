export function ServiceInfo() {
  return (
    <div className="h-[400px] flex justify-center items-center">
      <div className="w-[80%]">
        <div className="pl-6 pb-6 font-bold text-2xl">서비스 안내</div>
        <div>
          <ul className="grid grid-cols-4 p-5 pt-4 list-none gap-4">
            <li className="flex flex-col justify-center items-center border-2 border-brandMainGridBorder h-[150px] p-5 rounded-2xl">
              <div className="font-bold text-lg pb-5">방문요양</div>
              <div className="text-gray-400">가정방문 요양서비스</div>
            </li>
            <li className="flex flex-col justify-center items-center border-2 border-brandMainGridBorder h-[150px] p-5 rounded-2xl">
              <div className="font-bold text-lg pb-5">등급신청</div>
              <div className="text-gray-400">등급 신청 문의</div>
            </li>
            <li className="flex flex-col justify-center items-center border-2 border-brandMainGridBorder h-[150px] p-5 rounded-2xl">
              <div className="font-bold text-lg pb-5">이용요금</div>
              <div className="text-gray-400">이용 요금 문의</div>
            </li>
            <li className="flex flex-col justify-center items-center border-2 border-brandMainGridBorder h-[150px] p-5 rounded-2xl">
              <div className="font-bold text-lg pb-5">복지용품지원</div>
              <div className="text-gray-400">요양보호사 모집</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
