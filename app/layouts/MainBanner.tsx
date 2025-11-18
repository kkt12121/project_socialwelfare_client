import { CareBannerImage } from "~/components/CareBannerImage"
import { BgGreenButton } from "../components/ui/BgGreenButton"
import { BgWhiteButton } from "../components/ui/BgWhiteButton"

export function MainBanner(){
    return(
    <div className="h-[552px] border-2 bg-brandMainGreenBanner flex justify-center items-center">
        <div className="w-[45%] h-[400px] flex flex-col justify-between">
            <div className="text-brandGreenBannerText font-bold">함께하는 일상</div>
            <div className="font-bold text-5xl">안심되는 돌봄, 집에서 계속</div>
            <div className="leading-relaxed">방문요양·간호·일상생활지원까지 한 곳에서 간편 신청으로 빠른 상담을 받아보세요.</div>
            <div>
                <BgGreenButton className="mr-[5%]">서비스 신청하기</BgGreenButton>
                <BgWhiteButton>상담 요청하기</BgWhiteButton>
            </div>
        </div>
        <div className="w-[45%] h-[400px]">
            <CareBannerImage className="h-72"/>
        </div>
    </div>)
}