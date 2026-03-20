import { redirect, type ActionFunctionArgs } from "react-router";

export const ForgotPwAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const email = formData.get("email");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/user/forgotPw`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      if (result === "data error") {
        return { error: "이메일을 입력해 주세요." };
      } else if (result === "userinfo error") {
        return { error: "가입된 정보가 없습니다." };
      } else {
        return { error: "오류가 발생했습니다. 다시 시도해 주세요." };
      }
    }

    return { success: true };
  } catch (error) {
    return { error: "서버와 통신할 수 없습니다. 나중에 다시 시도해 주세요." };
  }
};
