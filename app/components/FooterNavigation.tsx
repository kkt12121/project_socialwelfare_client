import { Link } from "react-router";

export function FooterNavigation(){
    return(<div className="relative w-full min-h-[19px] min-w-[197px]">
        <Link to="" className="inline-block w-[50%] min-w-[129px] text-right text-gray-200 hover:text-gray-300">개인정보처리방침</Link>
        <Link to="" className="absolute right-0 inline-block text-right text-gray-200 hover:text-gray-300">이용약관</Link>
    </div>)
}