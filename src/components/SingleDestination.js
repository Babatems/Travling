import '@fontsource/lato';

export default function SingleDestination({ image, location, title, duration, cost }) {
    return (
        <div className="w-full h-[332px] bg-[#F0F0F0] rounded-2xl opacity-[100%]">
            <div className="p-4">
                <img 
                    src={image}
                    alt={`${title}`}
                    className="w-full h-[180px] rounded-lg mb-4"
                />

                <div className='mx-4'>
                    <div className="flex align-middle gap-1 mb-[9px]">
                        <img src="/images/Location.png" alt="" className="w-4 h-4" />

                        <p className="text-[12px] font-normal leading-[140%] tracking-[1%] font-lato text-[#8F8F8F]">{location}</p>
                    </div>
                    <h3 className='font-bold text-[16px] leading-[140%] font-lato mb-1'>{title}</h3>
                    <p className='text-[#636363] text-[14px] leading-[140%] font-normal mb-4'>{duration}</p>
                    <p className='text-[13px] leading-[140%] font-bold text-[#42A7C3]'>Rp {cost}/person</p>

                </div>
            </div>
        </div>
    )
}