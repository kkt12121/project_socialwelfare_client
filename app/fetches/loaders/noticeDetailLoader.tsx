import type { LoaderFunctionArgs } from "react-router";

export const NoticeDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/api/notice/detail/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) return null;

  const result = response.json();

  return result;
};
