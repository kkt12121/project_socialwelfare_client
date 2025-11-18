type CareBannerImageProps = {
  className?: string;
};

export function CareBannerImage({ className = "" }: CareBannerImageProps) {
  return (
    <div
      className={
        // 파란 박스 자리에 꽉 차게 + 둥근 모서리
        "h-full w-full rounded-2xl overflow-hidden bg-[#E9F5F1] " + className
      }
    >
      <img
        src="/images/main_banner_img.png"
        alt="편안한 집에서 돌봄을 받는 어르신과 요양보호사 일러스트"
        className="h-full w-full object-cover"
      />
    </div>
  );
}