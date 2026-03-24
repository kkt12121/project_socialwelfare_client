import { type LoaderFunctionArgs, data } from "react-router";
import { authCookie } from "../../utils/Auth";
import api from "../../utils/api";

export const UserInfoLoader = async ({ request }: LoaderFunctionArgs) => {
  const cookieHeader = request.headers.get("Cookie");

  const tokenData = await authCookie.parse(cookieHeader);

  if (!tokenData || !tokenData.accessToken) {
    return null;
  }

  try {
    const response = await api.get("/api/user/userInfo", {
      headers: { authorization: `Bearer ${tokenData.accessToken}` },
    });

    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401 && tokenData.refreshToken) {
      try {
        const refreshRes = await api.get("/api/user/accessToken", {
          headers: { authorization: `Bearer ${tokenData.refreshToken}` },
        });

        const newAccessToken = refreshRes.data.accessToken;

        const retryResponse = await api.get("/api/user/userInfo", {
          headers: { authorization: `Bearer ${newAccessToken}` },
        });

        return data(retryResponse.data, {
          headers: {
            "Set-Cookie": await authCookie.serialize({
              accessToken: newAccessToken,
              refreshToken: tokenData.refreshToken,
            }),
          },
        });
      } catch (refreshError) {
        return null;
      }
    }
    return null;
  }
};
