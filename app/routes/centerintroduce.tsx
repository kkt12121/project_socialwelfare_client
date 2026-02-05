import { RootLayout } from "../layouts/RootLayout";
import type { Route } from "./+types/home";

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

export default function CenterIntroduce() {
  return (
    <RootLayout>
      <div className="m-auto w-full">
        <div className="bg-white">
          <section className="relative h-80 bg-white flex items-center justify-center overflow-hidden">
            <div className="absolute w-[120%] h-[150%] bg-emerald-100 -top-[50%] rounded-[40%] rotate-12 transition-transform duration-1000"></div>

            <div className="relative text-center z-10">
              <span className="inline-block mb-2 px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                가족 중심 케어
              </span>
              <h1 className="text-4xl font-bold mb-3 text-slate-800">
                가족같은 마음을 담아서
              </h1>
              <p className="text-xl">
                <span className="bg-linear-to-r from-emerald-600 to-teal-300 bg-clip-text text-transparent font-black border-b-4 border-emerald-300">
                  가담재가복지센터
                </span>
                <span className="text-slate-500 ml-1 font-medium">
                  가 사랑과 정성으로 함께합니다.
                </span>
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto py-16 px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/gadam.jpeg"
                  alt="센터장님"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-emerald-300 pl-4">
                  인사말
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  안녕하세요, 원주에 위치한 가담재가복지센터 입니다.
                  <br />
                  저희 가담재가복지센터는 어르신들이 가장 익숙하고 편안한 공간인
                  가정에서 안전하고 존중받는 일상을 보내실 수 있도록 돕는
                  재가복지센터입니다.
                  <br />
                  "나이가 들어도 우리 집에서 지내고 싶다."
                  <br />
                  많은 어르신들의 이 소중한 바램을 지켜드리는 것이 저희 가담의
                  가장 큰 목표입니다.
                </p>
                <p className="font-semibold text-gray-900 mt-8 italic">
                  센터장 김기훈 배상
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3 sticky top-24">
                  <h2 className="text-5xl font-black text-emerald-300 tracking-tighter">
                    01
                  </h2>
                  <h3 className="text-2xl font-bold mt-2">회사 비전</h3>
                  <p className="mt-4 text-gray-400">
                    어르신 가족 지역이 함께 신뢰하는
                    <br />
                    지속 가능한 돌봄 파트너.
                  </p>
                </div>
                <div className="md:w-2/3 space-y-8">
                  <div className="flex gap-6 p-6 rounded-3xl border border-white/20 bg-white/60 shadow-sm backdrop-blur">
                    <span className="text-2xl font-bold text-blue-200">1</span>
                    <div>
                      <h4 className="font-bold text-lg">
                        신뢰받는 재가복지센터
                      </h4>
                      <p className="text-gray-500">
                        어르신과 가족이 믿고 맡기는 돌봄으로, 지역에서 신뢰받는
                        센터로 성장합니다
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 rounded-3xl border border-white/20 bg-white/60 shadow-sm backdrop-blur">
                    <span className="text-2xl font-bold text-blue-200">2</span>
                    <div>
                      <h4 className="font-bold text-lg">
                        삶의 질을 높이는 돌봄
                      </h4>
                      <p className="text-gray-500">
                        정서적 안정과 자존감 회복 삶의 만족을 높이는 사람중심
                        돌봄 서비스를 지향합니다.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 p-6 rounded-3xl border border-white/20 bg-white/60 shadow-sm backdrop-blur">
                    <span className="text-2xl font-bold text-blue-200">3</span>
                    <div>
                      <h4 className="font-bold text-lg">
                        지역과 함께 지속되는 돌봄
                      </h4>
                      <p className="text-gray-500">
                        지역사회와 연계해 어르신이 고립되지 않는 지속 가능한
                        돌봄 체계를 구축합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto px-4 text-center">
              <h2 className="text-5xl font-black text-emerald-300 tracking-tighter">
                02
              </h2>
              <h2 className="text-3xl font-bold mb-10">센터 미션</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-500 text-4xl mb-4">🏘️</div>
                  <h3 className="text-xl font-bold mb-2">어르신의 일상 유지</h3>
                  <p className="text-gray-500">
                    어르신이 평생 살아온 가정의 일상과 생활 리듬을 존중해, 낯선
                    변화 없이 안정적인 하루를 이어가실 수 있도록 돕습니다.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-500 text-4xl mb-4">🤲</div>
                  <h3 className="text-xl font-bold mb-2">존엄과 선택의 존중</h3>
                  <p className="text-gray-500">
                    어르신을 보호 대상이 아닌 삶의 주체로 존중하고, 작은
                    결정하나까지 스스로 선택할 수 있는 권리를 지켜 드립니다.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-500 text-4xl mb-4">👨‍👩‍👧‍👦</div>
                  <h3 className="text-xl font-bold mb-2">
                    전문성과 신뢰기반 돌봄
                  </h3>
                  <p className="text-gray-500">
                    체계적인 교육을 받은 전문 요양보호사가 개별 욕구와 건강
                    상태에 맞춘 책임 있는 맞춤 돌봄을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </RootLayout>
  );
}
