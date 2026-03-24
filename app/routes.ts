import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/centerintroduce.tsx"),
  route("/service/homecare", "routes/homecare.tsx"),
  route("/service/grade", "routes/grade.tsx"),
  route("/service/fee", "routes/fee.tsx"),
  route("/service/caregiver", "routes/caregiver.tsx"),
  route("/notice", "routes/notice.tsx"),
  route("/notice/write", "routes/noticeWrite.tsx"),
  route("/notice/edit/:id", "routes/noticeEdit.tsx"),
  route("/notice/:id", "routes/noticeDetail.tsx"),
  route("/map", "routes/map.tsx"),
  route("/register", "routes/register.tsx"),
  route("/login", "routes/login.tsx"),
  route("/logout", "routes/logout.tsx"),
  route("/reset-password", "routes/resetPassword.tsx"),
] satisfies RouteConfig;
