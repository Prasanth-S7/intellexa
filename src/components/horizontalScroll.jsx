export const HorizontalScroll = (({ number,title, info, className }) => {
    return (
        <div style={{
                border: '1px solid rgb(140, 100, 220)',
                boxShadow: '0 4px 8px rgba(140, 100, 220, 0.3)',
        }} className={`w-full h-[400px] md:h-[450px] md:w-[450px] border border-white/[0.2] rounded-md px-7 py-7 flex flex-col justify-between ${className}`} >
            <div className="text-custom-yellow lg:text-5xl text-right md:text-5xl text-4xl font-slussen ">{number}</div>
            <div className="text-custom-yellow lg:text-4xl md:text-4xl text-2xl font-slussen z-50">{title}</div>
            <div className="text-white text-[20px] font-slussenLight ">{info}</div>
        </div>
    )
})