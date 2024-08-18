export const HorizontalScroll = (({ number, info, className }) => {
    return (
        <div className={`w-full h-[400px] md:h-[400px] md:w-[400px] border-2 border-white px-7 py-7 flex flex-col justify-between ${className}`} >
            <div className="text-custom-yellow lg:text-5xl md:text-5xl text-4xl font-slussen ">{number}</div>
            <div className="text-white text-[20px] font-slussenLight ">{info}</div>
        </div>
    )
})