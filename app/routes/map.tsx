import type { Route } from "./+types/home";
import { useEffect, useRef } from "react";
import { RootLayout } from "../layouts/RootLayout";

declare global {
  interface Window {
    kakao: any;
  }
}

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

const loadKakaoMap = () => {
  return new Promise<void>((resolve) => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(resolve);
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_API}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(resolve);
    };

    document.head.appendChild(script);
  });
};

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;

    loadKakaoMap().then(() => {
      if (!mapRef.current) return;

      const center = new window.kakao.maps.LatLng(37.334644, 127.920907);

      map = new window.kakao.maps.Map(mapRef.current, {
        center,
        level: 3,
      });

      const mapTypeControl = new window.kakao.maps.MapTypeControl();

      map.addControl(
        mapTypeControl,
        window.kakao.maps.ControlPosition.TOPRIGHT,
      );

      const zoomControl = new window.kakao.maps.ZoomControl();

      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

      const marker = new window.kakao.maps.Marker({ position: center });
      marker.setMap(map);

      setTimeout(() => {
        map.relayout();
        map.setCenter(center);
      }, 0);
    });

    return () => {
      map = null;
    };
  }, []);

  return (
    <RootLayout>
      <div className="m-auto w-full min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="border-b-2 border-gray-900 pb-4 mb-6">
            <h2 className="text-3xl font-bold text-gray-800">오시는길</h2>
          </div>
          <div ref={mapRef} className="w-full h-[500px] border-red-300" />
          <div className="flex flex-col gap-6 text-xl border-t-2 border-gray-900 pt-15 mt-6">
            <p>
              <span className="font-bold text-gray-900">주소: </span>
              <span className="text-gray-800 font-light">
                강원특별자치도 원주시 만대로 148
              </span>
            </p>
            <p>
              <span className="font-bold text-gray-900">연락처: </span>
              <span className="text-gray-800 font-light">033-746-7579</span>
            </p>
            <p>
              <span className="font-bold text-gray-900">교통편: </span>
              <span className="text-gray-800 font-light">
                버스 무실초등학교 방면(6, 7, 8, 90, 100-2) 하차 후 도보 5분
              </span>
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
