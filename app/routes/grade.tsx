import type { Route } from "./+types/home";
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

export default function Grade() {
  return (
    <RootLayout>
      <div className="m-auto w-full">
        <section className="pt-24 pb-20 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            장기요양등급 신청,
            <br />
            어렵게 느껴지시나요?
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            보호자 대리신청부터 방문조사 대비까지
            <br />
            재가복지센터가 함께합니다.
          </p>
        </section>

        <section className="max-w-6xl mx-auto pb-20 grid md:grid-cols-3 gap-6">
          {[
            "만 65세 이상 어르신",
            "만 65세 미만 치매·뇌혈관질환 등 노인성 질병",
            "본인 또는 보호자 대리 신청 가능",
          ].map((text, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow text-center">
              <span className="text-red-500 font-bold text-lg">✓</span>
              <p className="mt-3 text-gray-700">{text}</p>
            </div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto pb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            진행 절차
          </h2>

          <div className="relative pl-6 border-l-2 border-green-300 space-y-10">
            {["등급 신청", "공단 방문조사", "등급 판정"].map((step, i) => (
              <div key={i} className="relative">
                <p className="text-lg font-semibold text-gray-800">
                  🟢 STEP {i + 1}. {step}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-gray-600">
            ※ 신청 후 평균 2~4주 소요
          </p>
        </section>

        <section className="py-24 bg-green-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              방문 조사는 이렇게 진행됩니다
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              신청 후 1~2주 이내 공단 직원이 방문하여
              <br />
              어르신의 생활 상태를 종합적으로 확인합니다.
            </p>

            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              {["1~2주 이내", "방문조사", "사전 안내", "시간 협의 가능"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white rounded-full shadow text-gray-700 font-semibold"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>

            <p className="mt-8 text-center text-sm text-gray-600">
              ※ 필요시 의사소견서 제출
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              장기요양인정 조사표
            </h2>
            <p className="mt-4 text-gray-600">
              총 90개 항목을 기준으로 종합 평가합니다.
            </p>
          </div>

          <div className="bg-white border-l-4 border-green-500 rounded-xl p-6">
            <ul className="space-y-3 text-gray-700">
              {[
                "신청자의 일반사항",
                "신체기능 영역",
                "인지기능 및 행동변화",
                "간호처치 영역",
                "재활 영역 및 기타",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-bold">
                  <span className="text-red-500 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
              헷갈리는 Q&A
            </h1>

            <div className="space-y-6">
              {[
                {
                  q: "보호자가 대신 신청할 수 있나요?",
                  a: "네, 가족이나 보호자가 대리 신청 가능합니다.",
                },
                {
                  q: "신청은 어디서 하나여?",
                  a: "공단지사방문, 우편, 펙스, 인터넷으로 신청가능합니다.",
                },
                {
                  q: "등급이 나오지 않을 수도 있나요?",
                  a: "어르신 상태에 따라 등급이 나오지 않을 수 있습니다.",
                },
                {
                  q: "의사 소견서는 꼭 제출해야 하나요?",
                  a: "의사 소견서는 등급 판정에 있어 매우 중요한 서류이며, 제출 여부에 따라 등급 판정 결과가 달라질 수 있습니다.",
                },
                {
                  q: "등급 판정 후 어떤 서비스를 받을 수 있나요?",
                  a: "재가급여(방문요양/주야간보호 등 집에서 이용) 시설급여(요양원 입소) 서비스를 받을 수 있습니다.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow">
                  <h3 className="font-semibold text-gray-800">Q. {item.q}</h3>
                  <p className="mt-3 text-gray-600">A. {item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
