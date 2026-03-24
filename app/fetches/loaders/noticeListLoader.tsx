export const NoticeListLoader = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/api/notice/list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("error: ", error);
    return { error: "서버와 통신할 수 없습니다.", data: [] };
  }
};
