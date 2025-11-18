export function BgWhiteButton({children, className, ...rest}:any) {
  return (
    <div className={`${className} h-12 px-5 py-px bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-teal-600 inline-flex justify-center items-center`} 
      {...rest}
    >
      <button className="text-center justify-center text-teal-600 text-sm font-bold font-['Inter']">
        {children}
      </button>
    </div>
  );
}
