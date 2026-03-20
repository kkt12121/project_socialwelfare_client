import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
  withCredentials: true, // ✅ 중요: 브라우저 쿠키를 서버로 자동 전송합니다.
});

// 응답 인터셉터: 서버의 응답을 가로채서 처리
api.interceptors.response.use(
  (response) => response, // 성공 시 그대로 반환
  async (error) => {
    const originalRequest = error.config;

    // 만약 에러 코드가 401(Unauthorized)이고, 재시도한 적이 없다면
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한 루프 방지용 플래그

      try {
        // ✅ 2단계: 만드신 재발급 API 호출
        // 이 요청을 보낼 때 브라우저가 쿠키에 담긴 refreshToken을 서버로 보냅니다.
        await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/api/user/accessToken`,
          {},
          { withCredentials: true },
        );

        console.log("요기입니다!!!!");

        // ✅ 3단계: 재발급 성공 시 원래 실패했던 요청을 다시 시도
        return api(originalRequest);
      } catch (refreshError) {
        // ✅ 4단계: 연장권(refreshToken)마저 만료된 경우
        console.error("세션이 만료되었습니다. 다시 로그인해 주세요.");
        // 브라우저 단에서 로그아웃 처리 (쿠키 삭제 등)
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
