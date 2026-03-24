import { redirect, type ActionFunctionArgs } from "react-router";
import { authCookie } from "../../utils/Auth";

export const EditNoticeAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const token = await authCookie.parse(cookieHeader);
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const { id } = params;
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/notice/update/${id}`,
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
      if (result === "data error") {
        return { error: "오류가 발생했습니다." };
      } else if (result === "noticeInfo error") {
        return { error: "게시글이 존재하지 않습니다." };
      } else if (result === "authorization error") {
        return { error: "권한이 없습니다." };
      } else {
        return { error: "오류가 발생했습니다." };
      }
    }

    return redirect(`/notice/${id}`);
  } catch (error) {
    console.log("error: ", error);
    return { error: "서버와 통신할 수 없습니다. 나중에 다시 시도해 주세요." };
  }
};
