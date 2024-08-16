export const HorizontalScroll = (({ number, info, className }) => {
    return (
        <div className={`w-[400px] h-[400px] border-2 border-white px-7 py-7 flex flex-col justify-between ${className}`} >
            <div className="text-custom-yellow text-5xl font-slussen ">{number}</div>
            <div className="text-white text-2xl font-semibold font-slussenLight ">{info}</div>
        </div>
    )
})