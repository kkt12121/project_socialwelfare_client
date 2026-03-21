import type { Route } from "./+types/home";
import { Form, Link, useSubmit, useActionData } from "react-router";
import { useState } from "react";
import { RootLayout } from "../layouts/RootLayout";
import { RegisterAction } from "../actions/registerAction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "가담재가복지센터" },
    {
      name: "가담재가복지센터",
      content: "가담재가복지센터에 오신 것을 환영합니다",
    },
    {
      tagName: "link",
      rel: "icon",
      href: "/images/gadamIcon.jpg",
    },
  ];
}

export const action = RegisterAction;

export default function Register() {
  const submit = useSubmit();
  const actionData = useActionData() as { error?: string };
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = () => {
    if (error) setError(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 전송 막기

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;
    const passwordConfirm = formData.get("passwordConfirm") as string;

    const phoneRegex = /^010\d{7,8}$/;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      setError("모든 항목을 빠짐없이 입력해 주세요.");
      return;
    }

    // 연락처 검증 (숫자만 10~11자리)
    if (!phoneRegex.test(phone)) {
      setError("연락처는 하이픈(-) 없이 숫자만 10~11자리로 입력해 주세요.");
      return;
    }

    // 비밀번호 일치 여부 체크
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    // 비밀번호 길이 검증
    if (password.length < 8) {
      setError("비밀번호는 8자 이상이어야 합니다.");
      return;
    }

    // 모든 검증 통과 시 에러 초기화 및 실제 전송
    setError(null);
    submit(event.currentTarget);
  };

  return (
    <RootLayout>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
        <div className="max-w-xl w-full">
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl shadow-emerald-900/5 border border-white/20">
            {actionData?.error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                {actionData.error}
              </div>
            )}
            <Form method="post" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="성함을 입력해 주세요"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    생년월일
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="birth"
                      required
                      max={new Date().toISOString().split("T")[0]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none"
                      style={{ fontSize: "16px" }}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@mail.com"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    연락처
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="- 없이 숫자만 입력"
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={handleInputChange}
                    placeholder="8자 이상 입력"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    name="passwordConfirm"
                    required
                    onChange={handleInputChange}
                    placeholder="한 번 더 입력"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-black focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-500 font-medium animate-pulse">
                    {error}
                  </p>
                )}
              </div>

              {/* 약관 동의 영역 */}
              {/* <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    이용약관 및 개인정보 처리방침 동의 (필수)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                    센터 소식 및 알림 수신 동의 (선택)
                  </span>
                </label>
              </div> */}

              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]"
              >
                가입 신청하기
              </button>
            </Form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                이미 계정이 있으신가요?{" "}
                <Link
                  to="/login"
                  className="text-emerald-600 font-bold hover:underline"
                >
                  로그인으로 돌아가기
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
