import { CareBannerImage } from "~/components/CareBannerImage"

export function CenterInfo(){
  return(
    <div className="h-[400px] border border-gray-300 flex justify-center items-center text-left">
        <div className="w-[45%] h-[400px] flex flex-col justify-between">
            <div className="font-bold text-2xl mt-20">센터 소개</div>
            <div className="leading-relaxed mt-10">
              지역사회 어르신의 자립과 존엄을 지키는 돌봄 파트너<br/>
              가정에서의 연속적 일상을 돕습니다.
            </div>
            <div className="w-[90%] h-12 px-5 py-px mb-17 bg-white rounded-xl border border-emerald-400 inline-flex justify-center items-center">
              <button className="text-center justify-center text-emerald-400 text-xs font-['Inter']">
                가담재가복지센터  
              </button>
            </div>
        </div>
        <div className="w-[30%] h-[300px]">
            <CareBannerImage className="h-72"/>
        </div>
    </div>
  )
}