import { redirect, type ActionFunctionArgs } from "react-router";
import { authCookie } from "../../utils/Auth";

export const LoginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/user/login`,
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
      if (result === "userinfo error") {
        return { error: "가입된 정보가 없습니다." };
      } else if (result === "password error") {
        return { error: "잘못된 패스워드입니다." };
      } else {
        return { error: "로그인중 오류가 발생했습니다." };
      }
    }

    return redirect("/", {
      headers: {
        "Set-Cookie": await authCookie.serialize({
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
        }),
      },
    });
  } catch (error) {
    console.log("error: ", error);
    return { error: "서버와 통신할 수 없습니다. 나중에 다시 시도해 주세요." };
  }
};
