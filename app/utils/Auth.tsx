import { createCookie } from "react-router";

export const authCookie = createCookie("auth_token", {
  httpOnly: true, // 자바스크립트로 쿠키 탈취 방지 (보안)
  // secure: process.env.NODE_ENV === "production", // HTTPS에서만 전송
  secure: true,
  sameSite: "none", // CSRF 공격 방지
  maxAge: 60 * 60 * 24 * 7, // 7일 동안 유지
  path: "/",
});
