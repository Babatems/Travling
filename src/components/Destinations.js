import '@fontsource/poppins';
import '@fontsource/lato';
import SingleDestination from './SingleDestination';

export default function Destinations() {
    return (
        <div className="mt-[105px] mx-[85px] mb-[156px]">
            <h1 className='text-[36px] font-poppins leading-[140%] font-medium mb-2'>Popular Destinations</h1>
            <p className='text-[16px] leading-[140%] font-normal font-lato text-[#333333]'>Vacations to make your experience enjoyable in Indonesia!</p>

            <div className='flex flex-row gap-8 mt-[43px]'>
                <SingleDestination 
                    image={"/images/Manggarai.png"}
                    location={"Manggarai Barat"}
                    title={"Flores Road Trip 3D2N"}
                    duration={"3 Days"}
                    cost={"6,705.000"}
                />
                <SingleDestination 
                    image={"/images/bogor.png"}
                    location={"Bogor"}
                    title={"Forrester Glamping Co Bogor"}
                    duration={"1 Days"}
                    cost={"1,205.000"}
                />
                <SingleDestination 
                    image={"/images/jakarta.png"}
                    location={"Jakarta"}
                    title={"Paket Tiket Pesawat Jakarta Bali"}
                    duration={"5 Days"}
                    cost={"605.000"}
                />
                <SingleDestination 
                    image={"/images/kota.png"}
                    location={"Kota Semarang"}
                    title={"Desa Wisata Kandri"}
                    duration={"14 Days"}
                    cost={"1,400.000"}
                />
            </div>
        </div>
    )
}