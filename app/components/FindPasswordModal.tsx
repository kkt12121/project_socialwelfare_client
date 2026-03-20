import { useState, useEffect } from "react";
import { useFetcher } from "react-router";

export function FindPasswordModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);
  const fetcher = useFetcher();

  const loading = fetcher.state !== "idle";
  const error = fetcher.data?.error;

  useEffect(() => {
    if (fetcher.data?.success) {
      setIsSent(true);
    }
  }, [fetcher.data]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        {!isSent ? (
          <>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              비밀번호 찾기
            </h3>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              가입하신 이메일을 입력하시면
              <br />
              재설정 링크를 보내드립니다.
            </p>
            <fetcher.Form method="post" className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 ml-1">
                  이메일 주소
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-300"
                />
                {error && (
                  <p className="mt-2 ml-1 text-xs text-red-500 font-semibold">
                    {error}
                  </p>
                )}
              </div>
              <div className="space-y-3">
                <button
                  type="submit"
                  name="intent"
                  value="forgot-pw"
                  disabled={loading}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-100 transition-all active:scale-[0.98] disabled:bg-gray-300"
                >
                  {loading ? "전송 중..." : "인증 메일 발송"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmail("");
                    setIsSent(false);
                    onClose();
                  }}
                  className="w-full py-3 text-sm font-semibold text-slate-400 hover:text-slate-600 transition-colors"
                >
                  취소하고 돌아가기
                </button>
              </div>
            </fetcher.Form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-bold text-emerald-600 mb-2">
              메일 전송 완료!
            </h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              입력하신 메일함에서
              <br />
              비밀번호 재설정 링크를 확인해주세요.
            </p>
            <button
              onClick={() => {
                setEmail("");
                setIsSent(false);
                onClose();
              }}
              className="w-full py-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all"
            >
              닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
