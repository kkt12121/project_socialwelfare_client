import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { Form, Link, useActionData } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { LoginAction } from "../actions/loginAction";
import { FindPasswordModal } from "../components/FindPasswordModal";
import { ForgotPwAction } from "../actions/forgotPwAction";

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

export const action = async (args: ActionFunctionArgs) => {
  const formData = await args.request.clone().formData();
  const intent = formData.get("intent");

  if (intent === "forgot-pw") {
    return ForgotPwAction(args);
  }

  return LoginAction(args);
};

export default function Login() {
  const actionData = useActionData() as { error?: string };
  const [displayError, setDisplayError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (actionData?.error) {
      setDisplayError(actionData.error);
    }
  }, [actionData]);

  const handleInputChange = () => {
    if (displayError) setDisplayError(null);
  };

  return (
    <RootLayout>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-white/20">
            <Form method="post" className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  이메일
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  placeholder="이메일을 입력해 주세요"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                  비밀번호
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="flex items-center">
                {/* <button
                  type="button"
                  className="pr-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  이메일 찾기
                </button> */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  패스워드 찾기
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]"
              >
                시작하기
              </button>
            </Form>

            {displayError && (
              <div className="mb-2 mt-6 text-red-600 rounded-xl text-sm animate-pulse">
                {displayError}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                처음이신가요?{" "}
                <Link
                  to="/register"
                  className="text-emerald-600 font-bold hover:underline"
                >
                  회원가입 요청
                </Link>
              </p>
            </div>
          </div>

          {/* 페이지 하단 카피라이트 (푸터 대신) */}
          {/* <p className="mt-8 text-center text-xs text-gray-400">
            &copy; 2026 가담재가복지센터. All rights reserved.
          </p> */}
        </div>
      </div>
      <FindPasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </RootLayout>
  );
}
