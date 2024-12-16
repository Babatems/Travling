import Packages from "./Packages";

export default function Question() {
    return (
        <div className="mx-[80px] flex gap-[68px] align-middle justify-center mb-[105px]">
            <div className="w-[626px] h-[602px] shadow-[#B7E9F6] rounded-full">
                <img src="/images/illustrasi.png" alt="A couple exploring the world" className="w-[626px] h-[602px]" />
            </div>
            <div className="">
                <div className="mb-10 flex flex-col">
                    <h1 className="text-[36px] leading-[140%] font-semibold font-poppins mb-2">Why Choose Us</h1>
                    <p className="text-[20px] leading-[140%] font-poppins font-normal">Enjoy different experiences in every place you visit and <br /> discover new and afforable adventures of course.</p>
                </div>

                <div className="flex flex-col gap-6">
                    <Packages 
                        image={"/images/Flight.png"}
                        title={"Flight Ticket"}
                    />
                    <Packages 
                        image={"/images/hotel.png"}
                        title={"Accomodation"}
                    />
                    <Packages 
                        image={"/images/Suitcase.png"}
                        title={"Packaged Tour"}
                    />

                    <a href="/" className="flex flex-row items-center gap-1 pl-6">
                        <p className="text-[20px] leading-[140%] font-bold">Another Product</p>
                        <img src="/images/next.png" alt="Forward arrow" className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </div>
    )
}