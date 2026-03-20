import { redirect, type ActionFunctionArgs } from "react-router";

export const RegisterAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/user/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      if (result === "email duplicate") {
        return { error: "이미 가입된 이메일입니다." };
      } else {
        return { error: "가입 신청 중 오류가 발생했습니다." };
      }
    }

    return redirect("/login?registered=true");
  } catch (error) {
    return { error: "서버와 통신할 수 없습니다. 나중에 다시 시도해 주세요." };
  }
};
