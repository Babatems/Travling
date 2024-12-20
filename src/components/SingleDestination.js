import '@fontsource/lato';

export default function SingleDestination({ image, location, title, duration, cost }) {
    return (
        <div className="w-full max-w-[400px] bg-[#F0F0F0] rounded-2xl overflow-hidden">
            <div className="p-4">
                <img 
                    src={image}
                    alt={`${title}`}
                    className="w-full h-[180px] rounded-lg mb-4 object-cover"
                />

                <div className="mx-4">
                    <div className="flex items-center gap-2 mb-[9px]">
                        <img src="/images/Location.png" alt="Location icon" className="w-4 h-4" />
                        <p className="text-[12px] font-normal leading-[140%] tracking-wide font-lato text-[#8F8F8F]">
                            {location}
                        </p>
                    </div>
                    <h3 className="font-bold text-[16px] leading-[140%] font-lato mb-1">{title}</h3>
                    <p className="text-[#636363] text-[14px] leading-[140%] font-normal mb-4">{duration}</p>
                    <p className="text-[13px] leading-[140%] font-bold text-[#42A7C3]">Rp {cost}/person</p>
                </div>
            </div>
        </div>
    );
}
