import '@fontsource/lato';

export default function SingleDestination({ image, location, title, duration, cost }) {
    return (
        <div className="w-full max-w-[400px] bg-[#F0F0F0] rounded-2xl overflow-hidden">
            <div className="p-[18px]">
                {/* Image Section */}
                <img 
                    src={image}
                    alt={`${title}`}
                    className="w-full h-[180px] rounded-lg object-cover mb-4"
                />

                {/* Content Section */}
                <div className="mx-4">
                    {/* Location Section */}
                    <div className="flex items-center gap-2 mb-4">
                        <img 
                            src="/images/Location.png" 
                            alt="Location icon" 
                            className="w-4 h-4"
                        />
                        <p className="text-[12px] font-normal leading-[140%] tracking-wide font-lato text-[#8F8F8F]">
                            {location}
                        </p>
                    </div>

                    {/* Title and Duration Section */}
                    <div className="mb-4">
                        <h3 className="font-bold text-[16px] leading-[140%] font-lato mb-2">
                            {title}
                        </h3>
                        <p className="text-[#636363] text-[14px] leading-[140%] font-normal">
                            {duration}
                        </p>
                    </div>

                    {/* Cost Section */}
                    <p className="text-[13px] leading-[140%] font-bold text-[#42A7C3]">
                        Rp {cost}/person
                    </p>
                </div>
            </div>
        </div>
    );
}
