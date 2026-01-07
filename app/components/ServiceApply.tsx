import { BgGreenButton } from "~/components/ui/BgGreenButton";

export function ServiceApply() {
  return (
    <div className="h-[600px] bg-gray-200 flex justify-center items-center text-left">
      <div className="w-[30%] flex flex-col justify-between">
        <div className="font-bold pb-6 text-2xl">신청 및 상담</div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름을 입력해주세요"
            className="w-[80%] px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            전화번호
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="전화번호를 입력새주세요"
            className="w-[80%] px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            내용
          </label>
          <textarea
            id="content"
            name="content"
            rows={6}
            placeholder="필요 서비스/시간 등을 적어주세요"
            className="w-[80%] px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <div>
          <BgGreenButton>제출하기</BgGreenButton>
        </div>
      </div>
      <div className="w-[45%] h-[400px] flex flex-col justify-center items-center">
        {/* 
        오시는길 지도 이미지
        <div className="h-[50%] w-[50%] mb-5 rounded-2xl overflow-hidden bg-brandMint">
          <img
            src="/images/gdc_address.png"
            alt="가담재가복지센터 정보"
            className="h-full w-full"
          />
        </div> */}
        <div className="h-[50%] w-full rounded-2xl overflow-hidden bg-brandMint">
          <img
            src="/images/gdc_info.png"
            alt="가담재가복지센터 정보"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
