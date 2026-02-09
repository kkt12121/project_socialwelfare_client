import type { Route } from "./+types/home";
import { useState } from "react";
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

const feeTable: Record<number, number> = {
  30: 17450,
  60: 25320,
  90: 34120,
  120: 43430,
  150: 50640,
  180: 57200,
  210: 63530,
  240: 70080,
};

const rateTable: Record<string, number> = {
  normal: 0.15,
  reduced9: 0.09,
  reduced6: 0.06,
  basic: 0,
};

const data = [
  {
    grade: "1등급",
    limit1: "2,512,900원",
    limit2: "2,306,400원",
    increase: "8.95%",
  },
  {
    grade: "2등급",
    limit1: "2,331,200원",
    limit2: "2,083,400원",
    increase: "11.89%",
  },
  {
    grade: "3등급",
    limit1: "1,528,200원",
    limit2: "1,485,700원",
    increase: "2.86%",
  },
  {
    grade: "4등급",
    limit1: "1,409,700원",
    limit2: "1,370,600원",
    increase: "2.85%",
  },
  {
    grade: "5등급",
    limit1: "1,208,900원",
    limit2: "1,177,000원",
    increase: "2.71%",
  },
  {
    grade: "인지지원",
    limit1: "676,300원",
    limit2: "657,400원",
    increase: "2.88%",
  },
];

export default function Fee() {
  const [time, setTime] = useState(60);
  const [rate, setRate] = useState("normal");

  const totalFee = feeTable[time];
  const myFee = Math.round(totalFee * rateTable[rate]);

  return (
    <RootLayout>
      <div className="m-auto w-full">
        <section className="max-w-6xl mx-auto py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            방문요양 이용요금 안내
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            장기요양등급을 받은 어르신의 방문요양 서비스 요금 기준입니다.
          </p>

          <div className="mt-6">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
              2026년 기준
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">
              공단 고시 기준
            </span>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            방문요양 이용요금 계산기
          </h2>

          <div className="bg-white rounded-2xl border p-6 space-y-6">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                방문 시간
              </label>
              <select
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                className="w-full border rounded-lg p-3"
              >
                <option value={30}>30분</option>
                <option value={60}>60분</option>
                <option value={90}>90분</option>
                <option value={120}>120분</option>
                <option value={150}>150분</option>
                <option value={180}>180분</option>
                <option value={210}>210분</option>
                <option value={240}>240분</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                본인부담 유형
              </label>
              <select
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="normal">일반 (15%)</option>
                <option value="reduced9">감경 (9%)</option>
                <option value="reduced6">감경 (6%)</option>
                <option value="basic">기초생활수급자 (0%)</option>
              </select>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <p className="text-gray-700">
                총 급여비용
                <span className="float-right font-bold">
                  {totalFee.toLocaleString()}원
                </span>
              </p>

              <p className="mt-3 text-lg font-bold text-green-700">
                본인부담금
                <span className="float-right">{myFee.toLocaleString()}원</span>
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            ※ 실제 금액은 등급 및 서비스 이용 방식에 따라 달라질 수 있습니다.
          </p>
        </section>

        <section className="py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              등급별 월 이용 한도액
            </h2>
          </div>

          <div className="mt-12 max-w-6xl mx-auto overflow-x-auto">
            <div className="flex gap-6 snap-x snap-mandatory pb-4">
              {data.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[280px] snap-start rounded-2xl border p-6 bg-white hover:shadow-md transition"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {item.grade}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">26년 한도액</p>
                  <p className="font-semibold">{item.limit1}</p>

                  <p className="mt-4 text-sm text-gray-600">25년 한도액</p>
                  <p className="font-semibold">{item.limit2}</p>

                  <p className="mt-4 text-sm text-gray-600">인상률</p>
                  <p className="text-2xl font-bold">{item.increase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <p className="text-sm text-gray-500 text-center mb-12">
          ※ 상기 요금은 2026년 장기요양보험 공단 고시 기준이며, 정책 변경에 따라
          달라질 수 있습니다.
        </p>
      </div>
    </RootLayout>
  );
}
