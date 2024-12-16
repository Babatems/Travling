import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="mx-[75px] mt-[41px] mb-[21px] bg-[#F7F7F7ff]">
      <a href="/">
        <span className="self-center whitespace-nowrap text-[36px] font-bold text-[#42A7C3] leading-[140%]">Travling!</span>
      </a>
      <NavbarToggle />
      <NavbarCollapse>
        <div className="flex md:gap-[80px]">
          <NavbarLink href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">Product</NavbarLink>
          <NavbarLink  href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">Contact us</NavbarLink>
          <NavbarLink href="#" className="font-normal text-[16px] leading-[140%] text-[#333333]">About Us</NavbarLink>
        </div>
      </NavbarCollapse>

      <button className="bg-[#FA8443] px-[32px] py-[12px] flex justify-center rounded-xl text-white">Sign Up</button>
    </Navbar>
  );
}
