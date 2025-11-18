import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { RootLayout } from "../layouts/RootLayout";
import { MainBanner } from "~/layouts/MainBanner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <RootLayout>
      <div className="m-auto w-3/4 border-2">
        <MainBanner />
        <Welcome />
      </div>
    </RootLayout>
  );
}
