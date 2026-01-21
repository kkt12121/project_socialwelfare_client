import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BgGreenButton } from "~/components/ui/BgGreenButton";

type FormType = {
  name: string;
  phone: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function ServiceApply() {
  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    try {
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          message: form.message,
        },
        PUBLIC_KEY,
      );

      alert("신청을 완료하였습니다.");

      setForm({
        name: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      alert("전송 실패");
    }
  };

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
            value={form.name}
            placeholder="이름을 입력해주세요"
            onChange={handleChange}
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
            value={form.phone}
            placeholder="전화번호를 입력새주세요"
            onChange={handleChange}
            className="w-[80%] px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            내용
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            placeholder="필요 서비스/시간 등을 적어주세요"
            onChange={handleChange}
            className="w-[80%] px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <div>
          <BgGreenButton onClick={handleSubmit}>제출하기</BgGreenButton>
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
