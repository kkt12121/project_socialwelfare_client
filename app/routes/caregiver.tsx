import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { RootLayout } from "../layouts/RootLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "가담재가복지센터" },
    {
      name: "가담재가복지센터",
      content: "가담재가복지센터에 오신 것을 환영합니다",
    },
    {
      tagName: "link",
      rel: "icon",
      href: "/images/gadamIcon.jpg",
    },
  ];
}

const service = [
  {
    title: "신체활동 지원",
    desc: "세면, 구강관리, 식사보조, 이동·목욕 지원 등",
  },
  {
    title: "일상생활 지원",
    desc: "외출 동행, 청소, 세탁, 식사 준비 등",
  },
  { title: "정서 지원", desc: "말벗, 의사소통 도움" },
  {
    title: "인지활동 지원",
    desc: "회상훈련, 기억력 향상 활동, 사회활동",
  },
];

const impossible = [
  "수급자의 가족을 위한 행위",
  "수급자 또는 가족의 생업을 지원하는 행위",
  "수급자의 일상생활과 무관한 개인적인 부탁",
];

export default function CareGiver() {
  return (
    <RootLayout>
      <div className="m-auto w-full">
        <section className="py-28">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              사람을 돌보는 일,
              <br />
              전문성과 따뜻함이 필요합니다
            </h1>

            <p className="mt-6 text-lg text-gray-500">
              국가자격{" "}
              <span className="text-gray-600 font-bold">요양보호사</span>가
              어르신의 일상을 함께합니다
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <span className="px-5 py-2 rounded-full bg-linear-to-r from-green-100 to-green-200 text-green-900 font-medium">
                국가자격 보유
              </span>
              <span className="px-5 py-2 rounded-full bg-linear-to-r from-blue-100 to-blue-200 text-blue-900 font-medium">
                방문요양 전문
              </span>
              <span className="px-5 py-2 rounded-full bg-linear-to-r from-yellow-100 to-yellow-200 text-yellow-900 font-medium">
                정기 교육 이수
              </span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              요양보호사란?
            </h2>

            <div className="mt-10 bg-white border rounded-2xl p-8 leading-relaxed text-gray-700">
              일정 기간 교육을 이수하고{" "}
              <span className="font-bold">국가시험에 합격</span>하여{" "}
              <span className="font-bold">자격</span>을 취득한{" "}
              <span className="font-bold">전문 인력</span>으로,{" "}
              <span className="font-bold">장기요양기관</span>에 소속되어
              수급자의 <span className="font-bold">일상생활</span>과{" "}
              <span className="font-bold">건강 관리</span>를 제공하는 전문
              인력입니다.
              <p className="mt-4 text-sm text-gray-400">
                ※ 장기요양{" "}
                <span className="text-gray-500 font-bold">5등급 수급자</span>
                에게 급여를 제공하는 장기요양원은{" "}
                <span className="text-gray-500 font-bold">치매전문교육</span>을
                이수하고 시험을 통과한 전문가가 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              요양보호사 서비스 내용
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {service.map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              요청 불가 사항
            </h2>

            <div className="mt-10 space-y-4">
              {impossible.map((text, i) => (
                <div
                  key={i}
                  className="border border-red-200 bg-red-50 text-red-700 rounded-xl px-6 py-4"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </RootLayout>
  );
}
