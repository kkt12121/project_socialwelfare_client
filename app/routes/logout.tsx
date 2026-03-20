import { redirect } from "react-router";
import { authCookie } from "../utils/Auth";

export const action = async () => {
  return redirect("/", {
    headers: {
      "Set-Cookie": await authCookie.serialize("", { maxAge: 0 }),
    },
  });
};
