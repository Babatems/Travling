import '@fontsource/lato';

export default function SingleDestination({ image, location, title, duration, cost }) {
    return (
        <div className="w-full max-w-[400px] bg-[#F0F0F0] rounded-2xl overflow-hidden flex flex-col p-4 gap-4">
            <div className="flex justify-center">
                <img 
                    src={image}
                    alt={`${title}`}
                    className="w-[264px] h-[180px] rounded-lg object-cover"
                />
            </div>

            <div className="flex flex-col gap-2 mx-4">
                <div className="flex items-center gap-2">
                    <img src="/images/Location.png" alt="Location icon" className="w-4 h-4" />
                    <p className="text-[12px] font-normal leading-[140%] tracking-wide font-lato text-[#8F8F8F]">
                        {location}
                    </p>
                </div>
                <h3 className="font-bold text-[16px] leading-[140%] font-lato">{title}</h3>
                <p className="text-[#636363] text-[14px] leading-[140%] font-normal">{duration}</p>
                <p className="text-[13px] leading-[140%] font-bold text-[#42A7C3]">Rp {cost}/person</p>
            </div>
        </div>
    );
}
