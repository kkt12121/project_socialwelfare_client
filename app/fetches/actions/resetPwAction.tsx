import { redirect, type ActionFunctionArgs } from "react-router";

export const ResetPwAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const token = formData.get("token");
  const password = formData.get("password");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/user/resetPw`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      if (result === "toekn error") {
        return { error: "인증정보가 없습니다." };
      } else if (result === "data error") {
        return { error: "비밀번호를 입력해 주세요" };
      } else if (result === "invalid or expired link") {
        return { error: "인증이 실패했습니다." };
      } else {
        return { error: "오류가 발생했습니다. 다시 시도해 주세요." };
      }
    }

    return { success: true };
  } catch (error) {
    return { error: "서버와 통신할 수 없습니다. 나중에 다시 시도해 주세요." };
  }
};
