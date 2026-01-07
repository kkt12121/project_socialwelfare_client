export function ServiceInfo() {
  return (
<div className="h-[600px]">
    <div>서비스 안내</div>
    <div>전체 보기</div>
    <div>
        <ul className="grid grid-cols-4 p-5">
            <li className="border-2 border-brandMainGridBorder h-[300px] p-5 rounded-2xl" >
                <div>방문요양</div>
                <div>가정방문 요양서비스</div>
            </li>
            <li>
                <div>방문간호</div>
                <div>전문 간호사 방문</div>                
            </li>
            <li>
                <div>일상생활지원</div>
                <div>장보기·청소·동행</div>
            </li>    
            <li>
                <div>복지용품지원</div>
                <div>맞춤 복지용품</div>
            </li>
        </ul>
    </div>

</div>
  );
}
