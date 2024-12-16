export default function Packages({ image, title }) {
    return (
        <div className="w-full h-20 flex items-center hover:bg-white hover:h-[112px] hover:rounded-lg hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="flex gap-4 items-center p-6 w-full">
                <div className="p-3 bg-white rounded-lg">
                    <img 
                        src={image} 
                        alt={`${title}`} 
                        className="w-9 h-9 object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-[20px] leading-[140%] font-poppins font-bold">{title}</h1>
                    <p className="text-[16px] leading-[140%] font-normal text-[#636363]">
                        Vitae donec pellentesque a aliquam et ultrices auctor
                    </p>
                </div>
            </div>
        </div>
    );
}
