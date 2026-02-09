import { type RouteConfig, index, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
export default [
  index("routes/home.tsx"),
  route("/about", "routes/centerintroduce.tsx"),
  route("/service/homecare", "routes/homecare.tsx"),
  route("/service/grade", "routes/grade.tsx"),
  route("/service/fee", "routes/fee.tsx"),
  route("/notice", "routes/notice.tsx"),
  route("/notice/:id", "routes/noticedetail.tsx"),
  route("/map", "routes/map.tsx"),
] satisfies RouteConfig;
