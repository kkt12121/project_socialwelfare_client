import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [
  index("routes/home.tsx"),
  route("service/homecare", "routes/homecare.tsx"),
  route("notice/", "routes/notice.tsx"),
  route("/notice/:id", "routes/noticedetail.tsx"),
] satisfies RouteConfig;
