export function BgGreenButton({children, className="", ...rest}:any) {
  return (
    <div className={`${className} h-12 px-5 py-px bg-emerald-400 rounded-xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] inline-flex justify-center items-center`} 
      {...rest}
    >
      <button className="text-center justify-center text-white text-xs font-['Inter']">
        {children}
      </button>
    </div>
  );
}
