import '@fontsource/poppins';
import '@fontsource/lato';

export default function Intro() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mx-[5%] my-[21px]">
            {/* Left Text Content */}
            <div className="md:w-1/2 w-full">
                <h1 className="text-[56px] leading-[124.5%] w-full max-w-[703px] h-auto mt-[121px] font-poppins font-bold text-[#333333] mb-4">
                    Start your journey <br /> by one click, explore beautiful world!
                </h1>
                <p className='text-[16px] leading-[27px] tracking-[0.32px] font-poppins text-[#333333] w-full max-w-[533px] h-auto font-normal'>
                    Plan and book your perfect trip with expert advice, travel tips, destination information, and inspiration from us!
                </p>
                <div className="flex gap-6 mt-[32px]">
                    <button className='flex gap-[10px] px-[28px] py-[12px] rounded-xl bg-[#121212]'>
                        <img src="/images/google-play.png" alt="Playstore-Logo" className='w-[29px] h-[30px]' />
                        <div className='flex flex-col items-start'>
                            <p className='text-white text-[8px] leading-[140%] font-lato font-bold'>GET IT ON</p>
                            <p className='text-white text-[16px]'>Google Play</p>
                        </div>
                    </button>

                    <button className='flex gap-[10px] px-[28px] py-[12px] rounded-xl bg-[#121212]'>
                        <img src="/images/icons8-apple-logo-30.png" alt="Apple-store-logo" className='w-[29px] h-[30px]' />
                        <div className='flex flex-col items-start'>
                            <p className='text-white text-[8px] leading-[140%] font-lato font-bold'>GET IT ON</p>
                            <p className='text-white text-[16px]'>App Store</p>
                        </div>
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 w-full flex justify-center">
                <img 
                    src="/images/illus.png" 
                    alt="Lady with a camera" 
                    className="w-full max-w-[648px] h-auto object-contain"
                />
            </div>
        </div>
    )
}