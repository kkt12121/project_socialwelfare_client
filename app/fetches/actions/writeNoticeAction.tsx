import { redirect, type ActionFunctionArgs } from "react-router";
import { authCookie } from "../../utils/Auth";

export const WriteNoticeAction = async ({ request }: ActionFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = await authCookie.parse(cookieHeader);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/notice/write`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token.accessToken}`,
        },
        body: JSON.stringify(data),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      if (result === "authorization error") {
        return { error: "권한이없습니다." };
      } else if (result === "data error") {
        return { error: "빈칸을 채워주세요." };
      } else {
        return { error: "오류가 발생했습니다." };
      }
    }

    return redirect("/notice");
  } catch (error) {
    console.log("error: ", error);
    return { error: "서버와 통신할 수 없습니다. 나중에 다시 시도해 주세요." };
  }
};
