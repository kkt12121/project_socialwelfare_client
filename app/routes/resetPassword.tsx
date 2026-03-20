import { useState } from "react";
import { Form, useActionData, useSearchParams, Link } from "react-router";
import { RootLayout } from "../layouts/RootLayout";
import { ResetPwAction } from "../actions/resetPwAction";

export const action = ResetPwAction;

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // URL에서 토큰 추출
  const actionData = useActionData() as { error?: string; success?: boolean };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <RootLayout>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-teal-50 px-4 py-12">
        <div className="max-w-md w-full">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-emerald-900/5 border border-white/20">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-gray-800">
                새 비밀번호 설정
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                안전한 사용을 위해 새로운 비밀번호를 입력해 주세요.
              </p>
            </div>

            {!token ? (
              <div className="text-center py-4">
                <p className="text-red-500 font-semibold">
                  유효하지 않은 접근입니다.
                </p>
                <Link
                  to="/login"
                  className="text-emerald-600 underline mt-4 block"
                >
                  로그인으로 돌아가기
                </Link>
              </div>
            ) : actionData?.success ? (
              <div className="text-center py-4 space-y-6">
                <div className="text-5xl">✅</div>
                <p className="text-lg font-bold text-emerald-700">
                  비밀번호가 변경되었습니다!
                </p>
                <div className="bg-emerald-600 text-white font-bold rounded-xl shadow-lg">
                  <Link to="/login" className="block w-full py-4">
                    로그인하러 가기
                  </Link>
                </div>
              </div>
            ) : (
              <Form method="post" className="space-y-5">
                {/* 토큰을 서버로 같이 보내기 위해 hidden input 사용 */}
                <input type="hidden" name="token" value={token} />

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    새 비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="8자 이상 입력"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
                    새 비밀번호 확인
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="다시 한번 입력"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>

                {password !== confirmPassword && confirmPassword !== "" && (
                  <p className="text-xs text-red-500 ml-1">
                    비밀번호가 일치하지 않습니다.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={!password || password !== confirmPassword}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98] disabled:bg-gray-300 disabled:shadow-none"
                >
                  비밀번호 변경하기
                </button>
              </Form>
            )}

            {actionData?.error && (
              <div className="mt-6 text-red-600 text-center text-sm animate-pulse">
                {actionData.error}
              </div>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
