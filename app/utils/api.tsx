import axios from "axios";
import { authCookie } from "./Auth";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// 요청 인터셉터: 클라이언트 환경일 때만 쿠키에서 토큰을 자동으로 꺼내 붙임
api.interceptors.request.use(async (config) => {
  if (typeof window !== "undefined") {
    const tokenData = await authCookie.parse(document.cookie);
    if (tokenData?.accessToken) {
      config.headers.authorization = `Bearer ${tokenData.accessToken}`;
    }
  }
  return config;
});

// 응답 인터셉터: 클라이언트 환경에서 토큰 만료(401) 시 재발급 시도
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 브라우저 환경이고 401 에러이며, 재시도한 적이 없을 때만 실행
    if (
      typeof window !== "undefined" &&
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const tokenData = await authCookie.parse(document.cookie);
        const refreshToken = tokenData?.refreshToken;

        if (!refreshToken) throw new Error("No Refresh Token");

        // 재발급 요청
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/user/accessToken`,
          {
            headers: { authorization: `Bearer ${refreshToken}` },
          },
        );

        const { accessToken } = res.data;

        // 쿠키에 새 토큰 저장
        const updatedCookie = await authCookie.serialize({
          ...tokenData,
          accessToken: accessToken,
        });
        document.cookie = updatedCookie;

        // 원래 실패했던 요청 재시도
        originalRequest.headers.authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // 리프레시 토큰도 만료되었을 경우 로그아웃
        document.cookie = "auth=; Max-Age=0; path=/;";
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
