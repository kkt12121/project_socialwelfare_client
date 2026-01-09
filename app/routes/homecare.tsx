import { RootLayout } from "../layouts/RootLayout";

export default function HomeCare() {
  return (
    <RootLayout>
      <div className="relative">
        {/* 배경 장식(그라데이션 블롭) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-mint-300/25 blur-3xl" />
          <div className="absolute top-32 -right-28 h-80 w-80 rounded-full bg-slate-900/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-mint-200/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-28">
          {/* HERO */}
          <section className="pt-14 pb-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge icon={<IconSpark />} text="방문요양 서비스" />
                  <Badge icon={<IconShield />} text="안전·신뢰" tone="dark" />
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  집에서 받는 안심 돌봄,
                  <br />
                  <span className="bg-gradient-to-r from-mint-600 to-emerald-500 bg-clip-text text-transparent">
                    방문요양
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  요양보호사가 어르신의 가정을 방문하여
                  <span className="font-semibold text-slate-800"> 신체·일상·정서</span>까지
                  균형 있게 지원하는 장기요양보험 서비스입니다.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3 relative z-50">
                  <a
                    href="/service/apply"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-slate-800 bg-emerald-600 hover:bg-emerald-700 shadow-sm transition relative"
                  >
                    <span className="text-emerald-300"><IconPhone /></span>
                    상담 신청하기
                  </a>

                  <a
                    href="/service/grade"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-6 py-3 font-semibold text-slate-800 hover:bg-white transition"
                  >
                    <IconDoc />
                    등급신청 안내
                  </a>
                </div>

                {/* 한줄 요약 카드 */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <MiniStat icon={<span className="text-rose-500"><IconHeart /></span>} title="정서 지원" desc="말벗·소통" />
                  <MiniStat icon={<span className="text-emerald-800"><IconCar /></span>} title="이동 도움" desc="외출 동행" />
                  <MiniStat icon={<span className="text-blue-400"><IconHome /></span>} title="가정 내 돌봄" desc="일상 유지" />
                </div>
              </div>

              {/* 오른쪽 비주얼 (SVG 일러스트 / 나중에 이미지로 교체 가능) */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-mint-200/35 to-slate-900/5 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/60 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-200/60 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">
                      가담재가복지센터
                    </span>
                  </div>

                  <div className="p-6">
                    <HeroImage />

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <InfoPill icon={<IconCheck />} text="1~5등급 대상" />
                      <InfoPill icon={<IconCheck />} text="가정 방문 돌봄" />
                      <InfoPill icon={<IconCheck />} text="맞춤 서비스 계획" />
                      <InfoPill icon={<IconCheck />} text="전문 요양보호사 배정" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 대상/설명 */}
          <section className="mb-16 grid gap-6 lg:grid-cols-3">
            <CardSoft className="lg:col-span-2 shadow-xl">
              <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className="rounded-xl bg-mint-100 p-2 text-mint-700">
                  <IconUsers />
                </span>
                이런 분께 필요해요
              </h2>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "장기요양보험 1~5등급 판정을 받은 어르신",
                  "거동이 불편해 일상생활에 도움이 필요한 경우",
                  "가족 돌봄 부담을 줄이고 싶은 경우",
                  "집에서 안정적으로 돌봄을 받고 싶은 경우",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 rounded-2xl bg-white/60 p-4">
                    <span className="mt-1.5 rounded-full bg-mint-500/15 p-1 text-mint-700">
                      <IconCheck />
                    </span>
                    <span className="text-slate-700">{t}</span>
                  </li>
                ))}
              </ul>
            </CardSoft>

            <CardDark>
              <h3 className="text-lg font-semibold text-white">
                한 줄 요약
              </h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                생활환경을 유지하면서 <span className="text-white font-semibold">신체·가사·정서</span>를
                균형 있게 지원해, 가장 활용도가 높은 장기요양 서비스입니다.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/service/fee"
                  className="inline-flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-white hover:bg-white/15 transition"
                >
                  <span className="flex items-center gap-2">
                    <IconMoney />
                    이용요금 안내
                  </span>
                  <span className="text-white/60">→</span>
                </a>
                <a
                  href="/service/caregiver"
                  className="inline-flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-white hover:bg-white/15 transition"
                >
                  <span className="flex items-center gap-2">
                    <IconCare />
                    요양보호사 안내
                  </span>
                  <span className="text-white/60">→</span>
                </a>
              </div>
            </CardDark>
          </section>

          {/* 제공 서비스 */}
          <section className="mb-18">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">제공 서비스</h2>
                <p className="mt-2 text-slate-600">
                  필요한 영역만 선택해 <span className="font-semibold text-slate-800">맞춤형</span>으로 지원합니다.
                </p>
              </div>
              <span className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
                <IconSpark /> 상담 후 서비스 계획 수립
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <ServiceCard
                tone="emerald"
                icon={<IconBath />}
                title="신체활동 지원"
                desc="안전한 위생·이동·배변을 돕습니다."
                items={["세면·목욕·구강관리", "옷 갈아입기·몸단장", "이동 보조·체위 변경", "화장실 이용 도움"]}
              />
              <ServiceCard
                tone="sky"
                icon={<IconMeal />}
                title="식사·가사 지원"
                desc="식사와 생활 정돈을 지원합니다."
                items={["식사 준비 및 보조", "간단 조리·설거지", "세탁 및 정리정돈", "생활공간 위생 관리"]}
              />
              <ServiceCard
                tone="violet"
                icon={<IconChat />}
                title="정서·일상 지원"
                desc="정서 안정과 일상 유지를 돕습니다."
                items={["말벗·정서 교감", "외출 동행(병원·산책)", "일상 활동 보조", "안전 확인 및 소통"]}
              />
            </div>
          </section>

          {/* 이용 절차 */}
          <section className="mt-16 mb-20">
            <h2 className="text-2xl font-semibold text-slate-900">이용 절차</h2>
            <p className="mt-2 text-slate-600">
              복잡하지 않아요. <span className="font-semibold text-slate-800">5단계</span>로 빠르게 시작합니다.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-5">
              {[
                { t: "상담 신청", i: <IconPhone /> },
                { t: "등급 확인", i: <IconDoc /> },
                { t: "서비스 계획", i: <IconPlan /> },
                { t: "보호사 배정", i: <IconUsers /> },
                { t: "서비스 시작", i: <IconSpark /> },
              ].map((s, idx) => (
                <div
                  key={s.t}
                  className="group relative rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                    STEP {idx + 1}
                  </div>
                  <div className="flex items-center gap-2 text-slate-900">
                    <span className="rounded-xl bg-mint-100 p-2 text-mint-700 group-hover:bg-mint-200 transition">
                      {s.i}
                    </span>
                    <p className="font-semibold">{s.t}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden rounded-3xl bg-slate-900 p-12 text-white">
            <div className="absolute inset-0 bg-gradient-to-br from-mint-500/15 via-transparent to-emerald-400/10" />
            <div className="relative">
              <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                  <h3 className="text-3xl font-bold">상담 및 신청</h3>
                  <p className="mt-3 max-w-xl text-white/75 leading-relaxed">
                    어르신 상황에 맞는 맞춤 돌봄을 안내해드립니다.
                    전화/온라인 상담 모두 가능합니다.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/service/apply"
                    className="inline-flex items-center gap-2 rounded-full bg-mint-500 px-8 py-4 font-semibold text-white hover:bg-mint-600 transition"
                  >
                    <IconPhone />
                    상담 신청하기
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/15 transition"
                  >
                    <IconMap />
                    오시는길
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </RootLayout>
  );
}

/* --------------------------- */
/* UI components (local)       */
/* --------------------------- */

function Badge({
  icon,
  text,
  tone = "mint",
}: {
  icon: React.ReactNode;
  text: string;
  tone?: "mint" | "dark";
}) {
  const cls =
    tone === "dark"
      ? "bg-slate-900 text-white"
      : "bg-mint-100 text-mint-700";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-semibold ${cls}`}>
      <span className="text-current">{icon}</span>
      {text}
    </span>
  );
}

function InfoPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200/60 bg-white/60 px-4 py-3 text-sm font-medium text-slate-700">
      <span className="text-mint-700">{icon}</span>
      {text}
    </div>
  );
}

function MiniStat({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="flex items-center gap-2 text-slate-900">
        <span className="rounded-xl bg-mint-100 p-2 text-mint-700">{icon}</span>
        <span className="font-semibold">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function CardSoft({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/20 bg-white/60 p-8 shadow-sm backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

function CardDark({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 shadow-xl shadow-black/10">
      {children}
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  items,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  items: string[];
  tone: "emerald" | "sky" | "violet";
}) {
  const toneCls =
    tone === "emerald"
      ? "from-emerald-200/35 to-white"
      : tone === "sky"
        ? "from-sky-200/30 to-white"
        : "from-violet-200/30 to-white";

  const iconBg =
    tone === "emerald"
      ? "bg-emerald-100 text-emerald-700"
      : tone === "sky"
        ? "bg-sky-100 text-sky-700"
        : "bg-violet-100 text-violet-700";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`absolute inset-0 bg-gradient-to-br ${toneCls} opacity-60`} />
      <div className="relative">
        <div className="flex items-start gap-4">
          <div className={`rounded-2xl p-3 ${iconBg}`}>{icon}</div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-950">
              {title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{desc}</p>
          </div>
        </div>

        <ul className="mt-6 space-y-2 text-slate-700">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-mint-500/70" />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 h-px bg-slate-200/70" />
        <p className="mt-4 text-sm text-slate-600">
          상담 후 어르신 상태에 맞게 서비스 범위를 조정합니다.
        </p>
      </div>
    </div>
  );
}

/* --------------------------- */
/* Inline SVG illustrations    */
/* --------------------------- */

function HeroImage() {
  // 외부 이미지 없이도 ‘따뜻한 돌봄’ 느낌이 나게 만든 간단한 SVG 일러스트
  return (
    <svg viewBox="0 0 640 340" className="h-auto w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(16,185,129,0.25)" />
          <stop offset="1" stopColor="rgba(15,23,42,0.08)" />
        </linearGradient>
        <linearGradient id="g2" x1="0" x2="1">
          <stop offset="0" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.6)" />
        </linearGradient>
      </defs>

      {/* 배경 */}
      <rect x="0" y="0" width="640" height="340" rx="28" fill="url(#g1)" />
      <rect x="22" y="22" width="596" height="296" rx="24" fill="url(#g2)" />

      {/* 창문 */}
      <rect x="420" y="70" width="150" height="110" rx="18" fill="rgba(16,185,129,0.15)" stroke="rgba(15,23,42,0.06)" />
      <line x1="495" y1="70" x2="495" y2="180" stroke="rgba(15,23,42,0.06)" />
      <line x1="420" y1="125" x2="570" y2="125" stroke="rgba(15,23,42,0.06)" />

      {/* 인물(간단한 형태) */}
      {/* 어르신 */}
      <circle cx="250" cy="150" r="26" fill="rgba(248,113,113,0.18)" />
      <rect x="215" y="178" width="110" height="95" rx="26" fill="rgba(15,23,42,0.08)" />
      <rect x="232" y="200" width="76" height="60" rx="18" fill="rgba(255,255,255,0.85)" />

      {/* 보호사 */}
      <circle cx="350" cy="145" r="24" fill="rgba(59,130,246,0.18)" />
      <rect x="320" y="170" width="100" height="105" rx="26" fill="rgba(16,185,129,0.20)" />
      <rect x="335" y="205" width="70" height="58" rx="18" fill="rgba(255,255,255,0.85)" />

      {/* 하트 */}
      <path
        d="M315 140c6-10 20-10 26 0 6 10-5 22-13 28-8-6-19-18-13-28z"
        fill="rgba(16,185,129,0.55)"
      />

      {/* 텍스트 느낌 장식 */}
      <rect x="60" y="70" width="280" height="18" rx="9" fill="rgba(15,23,42,0.08)" />
      <rect x="60" y="98" width="230" height="14" rx="7" fill="rgba(15,23,42,0.06)" />
      <rect x="60" y="120" width="260" height="14" rx="7" fill="rgba(15,23,42,0.06)" />

      {/* 하단 카드 느낌 */}
      <rect x="60" y="235" width="500" height="60" rx="18" fill="rgba(16,185,129,0.10)" stroke="rgba(16,185,129,0.18)" />
      <circle cx="95" cy="265" r="16" fill="rgba(16,185,129,0.35)" />
      <rect x="125" y="252" width="180" height="12" rx="6" fill="rgba(15,23,42,0.10)" />
      <rect x="125" y="270" width="140" height="10" rx="5" fill="rgba(15,23,42,0.08)" />
    </svg>
  );
}

/* --------------------------- */
/* Tiny inline icon set (SVG)  */
/* --------------------------- */

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-5 w-5 items-center justify-center">{children}</span>;
}

function IconCheck() {
  return (
    <span className="text-emerald-600">
      <Icon>
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Icon>
    </span>
  );
}

function IconCar() {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center text-emerald-600">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        aria-hidden
      >
        {/* 차체 하단 */}
        <path
          d="M3 13h18v3a2 2 0 0 1-2 2h-1a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H5a2 2 0 0 1-2-2v-3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* 차체 상단 */}
        <path
          d="M6 13l1.8-4a2 2 0 0 1 1.8-1h5a2 2 0 0 1 1.8 1l1.8 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />

        {/* 창문 */}
        <path
          d="M9 9h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 바퀴 */}
        <circle cx="7" cy="18" r="1.8" fill="currentColor" />
        <circle cx="17" cy="18" r="1.8" fill="currentColor" />
      </svg>
    </span>
  );
}

function IconSpark() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconShield() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 2l8 4v6c0 5-3.5 9.4-8 10-4.5-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconPhone() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L9.1 10.9a16 16 0 0 0 4 4l1.5-1.5a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconDoc() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconPlan() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Icon>
  );
}
function IconUsers() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
        <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.9" stroke="currentColor" strokeWidth="2" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconMoney() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M3 7h18v10H3V7z" stroke="currentColor" strokeWidth="2" />
        <path d="M7 12h.01M17 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconCare() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconMap() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconHome() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M3 10.5l9-8 9 8V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1V10.5z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconHeart() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
function IconMove() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Icon>
  );
}
function IconBath() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
        <path
          d="M3 11h18v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-6z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V6a3 3 0 0 1 6 0v5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
}

function IconMeal() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M4 3v7a4 4 0 0 0 4 4v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 3v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 3v10a4 4 0 0 0 4 4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Icon>
  );
}
function IconChat() {
  return (
    <Icon>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" stroke="currentColor" strokeWidth="2" />
      </svg>
    </Icon>
  );
}
