import type { Route } from "./+types/home";
import { useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";
import { RootLayout } from "../layouts/RootLayout";
import emailjs from "@emailjs/browser";
import { CareBannerImage } from "~/components/CareBannerImage";
import { BgGreenButton } from "../components/ui/BgGreenButton";

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

const SECTIONS = [
  { id: "hero", label: "홈" },
  { id: "intro", label: "서비스 소개" },
  { id: "cta", label: "상담 안내" },
  { id: "apply", label: "상담 신청" },
  { id: "footer", label: "푸터 정보" },
];

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  useEffect(() => {
    // 메인 페이지 진입 시 브라우저 스크롤 잠금
    document.body.style.overflow = "hidden";

    const options = {
      root: scrollContainerRef.current,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = SECTIONS.findIndex((s) => s.id === entry.target.id);
          setActiveSection(index);
        }
      });
    }, options);

    const sectionElements = document.querySelectorAll(".snap-section");
    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      // 페이지 나갈 때 스크롤 복구
      document.body.style.overflow = "unset";
      observer.disconnect();
    };
  }, []);

  const handleMoveToService = () => {
    navigate("/service/homecare");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      alert("신청을 완료하였습니다.");
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      alert("전송 실패");
    }
  };

  return (
    <RootLayout hideFooter={true}>
      <div className="relative w-full h-[calc(100vh-70px)] mt-[70px] overflow-hidden bg-white">
        <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5">
          {SECTIONS.map((section, idx) => (
            <button
              key={section.id}
              className="group relative flex items-center justify-end"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === idx
                    ? "bg-emerald-500 scale-150 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    : "bg-emerald-200 hover:bg-emerald-300"
                }`}
              />
            </button>
          ))}
        </div>

        <div
          ref={scrollContainerRef}
          className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
        >
          <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

          <section
            id="hero"
            className="snap-section h-full w-full snap-start flex flex-col items-center justify-center bg-brandMainGreenBanner relative"
          >
            <div className="text-center space-y-6 px-4">
              <div className="text-xl font-bold text-emerald-900 opacity-90">
                함께하는 일상
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-900 leading-tight">
                안심되는 돌봄,
                <br />
                <span className="text-emerald-600">집에서 계속</span>
              </h1>
              <p className="text-lg md:text-xl max-w-xl mx-auto text-emerald-800/80 font-medium">
                방문요양·간호·일상생활지원까지 한 곳에서 간편하게 신청하고
                상담받으세요.
              </p>
              <div className="pt-10">
                <button className="bg-white text-emerald-800 border border-emerald-300 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                  아래로 내려서 알아보세요
                </button>
              </div>
            </div>
            <div className="absolute bottom-10 animate-bounce text-emerald-800/80">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </section>

          <section
            id="intro"
            className="snap-section h-full w-full snap-start flex items-center justify-center bg-white px-10"
          >
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-bold text-gray-800">
                  어르신의 하루가
                  <br />
                  더욱 특별해집니다
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  단순한 돌봄을 넘어, 정서적 교감과 전문적인 간호 서비스를 통해
                  내 집보다 편안한 환경을 만들어 드립니다.
                </p>
                <ul className="space-y-3 font-semibold text-emerald-600">
                  <li>✓ 전문 자격증 보유 요양보호사</li>
                  <li>✓ 1:1 맞춤형 케어 프로그램</li>
                </ul>
              </div>
              <div className="flex-1 bg-gray-100 h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <CareBannerImage className="h-64" />
              </div>
            </div>
          </section>

          <section
            id="cta"
            className="snap-section h-full w-full snap-start flex items-center justify-center bg-slate-50 px-4 text-center"
          >
            <div className="max-w-3xl w-full py-12 px-6 bg-white rounded-[2.5rem] shadow-xl border border-emerald-50">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  부모님의 소중한 일상, <br />
                  <span className="text-emerald-600 underline underline-offset-8 decoration-emerald-200">
                    전문가와 상담하세요
                  </span>
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
                  <button
                    onClick={handleMoveToService}
                    className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    서비스 안내
                  </button>

                  <button className="bg-white border-2 border-emerald-600 text-emerald-700 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all">
                    033-746-7579
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            id="apply"
            className="snap-section h-screen w-full snap-start flex flex-col bg-slate-50 overflow-y-auto no-scrollbar"
          >
            <div className="flex-1 flex items-center justify-center px-4 py-12">
              <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-emerald-50">
                <div className="space-y-8">
                  <div>
                    <span className="text-emerald-600 font-bold text-sm tracking-widest uppercase">
                      Consulting
                    </span>
                    <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight">
                      부모님을 위한 <br />
                      따뜻한 상담 신청
                    </h2>
                    <p className="text-gray-500 leading-relaxed">
                      요양 등급 판정부터 맞춤 케어 서비스까지, <br />
                      전문 사회복지사가 친절하게 안내해 드립니다.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="tel:0337467579"
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">빠른 전화 상담</p>
                        <p className="text-xl font-bold text-gray-800 tracking-wider group-hover:text-emerald-600 transition-colors">
                          033-746-7579
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-emerald-50/50 p-8 rounded-3xl border border-emerald-100">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-bold text-emerald-900 mb-2 ml-1"
                      >
                        성함
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="이름을 입력해주세요"
                        className="w-full px-5 py-3 text-black bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-emerald-900 mb-2 ml-1"
                      >
                        연락처
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="010-0000-0000"
                        className="w-full px-5 py-3 text-black bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 transition-all placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-bold text-emerald-900 mb-2 ml-1"
                      >
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="필요하신 서비스나 궁금하신 점을 자유롭게 적어주세요."
                        className="w-full px-5 py-3 text-black bg-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 transition-all resize-none placeholder:text-gray-300"
                      />
                    </div>
                    <div className="pt-2">
                      <BgGreenButton
                        onClick={handleSubmit}
                        className="w-full py-4 rounded-xl text-lg shadow-lg"
                      >
                        상담 신청하기
                      </BgGreenButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="footer"
            className="snap-section h-full w-full snap-start bg-gray-900 flex items-center justify-center px-6"
          >
            <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-10">
              <div className="space-y-4">
                <div className="">
                  <h3 className="text-3xl font-black text-white tracking-tighter">
                    가담재가복지센터
                  </h3>
                  <p className="text-emerald-500 mt-2 font-bold tracking-widest text-sm uppercase">
                    Gadam Care Center
                  </p>
                </div>

                <div className="text-gray-400 text-sm md:text-base leading-relaxed">
                  <p className="flex flex-col md:flex-row md:gap-4">
                    <span>강원특별자치도 원주시 만대로 148 201호</span>
                    <span className="hidden md:inline text-gray-700">|</span>
                    <span>대표자: 김기훈</span>
                  </p>
                  <p>사업자등록번호: 620-80-28046</p>

                  <div className="space-y-2 mt-2">
                    <div className="flex items-center gap-4 space-y-2">
                      <span className="text-[10px] font-bold bg-gray-800 px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
                        Email
                      </span>
                      <span className="text-white font-bold text-2xl tracking-tight">
                        topgold777@naver.com
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold bg-gray-800 px-2 py-1 rounded text-gray-500 uppercase tracking-tighter">
                        Tel
                      </span>
                      <span className="text-white font-bold text-2xl tracking-tight">
                        033-746-7579
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 text-sm font-bold">
                  <button className="text-gray-500 hover:text-white transition-colors">
                    이용약관
                  </button>
                  <button className="text-emerald-500 hover:text-emerald-400 transition-colors underline underline-offset-8">
                    개인정보처리방침
                  </button>
                </div>

                <div className="flex flex-wrap gap-6 pt-6">
                  <a
                    href="https://blog.naver.com/gadam7579"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 group"
                  >
                    <span className="w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-black shrink-0 transition-all bg-[#03C75A] text-white group-hover:bg-white group-hover:text-[#03C75A]">
                      N
                    </span>
                    <span className="text-sm font-bold text-white transition-colors group-hover:text-[#03C75A]">
                      네이버 블로그
                    </span>
                  </a>
                  <a
                    href="https://cafe.naver.com/gadam148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 group"
                  >
                    <span className="w-6 h-6 flex items-center justify-center rounded-full text-[11px] font-black shrink-0 transition-all bg-[#01D358] text-white group-hover:bg-white group-hover:text-[#01D358]">
                      C
                    </span>
                    <span className="text-sm font-bold text-white transition-colors group-hover:text-[#01D358]">
                      네이버 카페
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/gadamhome148"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 group relative z-10"
                  >
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient
                          id="insta_grad"
                          x1="0%"
                          y1="100%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#f9ce34" />
                          <stop offset="50%" stopColor="#ee2a7b" />
                          <stop offset="100%" stopColor="#6228d7" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#insta_grad)"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014 3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                    <span className="text-base font-bold text-white transition-colors duration-300 group-hover:text-[#ee2a7b]">
                      인스타그램
                    </span>
                  </a>
                </div>

                <p className="text-xs pt-2 text-gray-600 font-medium">
                  Copyright © 2026 Gadam Care Center. All rights reserved.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </RootLayout>
  );
}
