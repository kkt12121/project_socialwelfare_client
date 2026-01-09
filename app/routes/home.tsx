import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { RootLayout } from "../layouts/RootLayout";
import { MainBanner } from "~/layouts/MainBanner";
import { ServiceInfo } from "~/components/ServiceInfo";
import { CenterInfo } from "~/components/CenterInfo";
import { ServiceApply } from "~/components/ServiceApply";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "가담재가복지센터" },
    {
      name: "가담재가복지센터",
      content: "가담재가복지센터에 오신 것을 환영합니다",
    },
  ];
}

export default function Home() {
  return (
    <RootLayout>
      <div className="m-auto w-full">
        <MainBanner />
        <ServiceInfo />
        <CenterInfo />
        <ServiceApply />
        {/* <Welcome /> */}
      </div>
    </RootLayout>
  );
}
