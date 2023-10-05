import { Badge } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiSpeakerphone } from "react-icons/hi";
import ProductsMenu from "./ProductsMenu";

const DesktopHeader = () => {
  return (
    <header className="text-base shadow px-4 py-2 flex justify-between h-[70px]">
      {/* First Div */}
      <div className="flex justify-center items-center gap-5">
        <div>
          <Image
            width={180}
            height={80}
            className="mx-5 cursor-pointer"
            alt={"image"}
            src={"/veblikalogo.png"}
          />
        </div>
        <div className="">
          <ProductsMenu />
        </div>
        <div className="">
          <h5 className="cursor-pointer">Customers</h5>
        </div>
        <div className="">
          <h5 className="cursor-pointer">About Us</h5>
        </div>
        <div className="">
          <h5 className="cursor-pointer">Contact Us</h5>
        </div>
      </div>
      {/* Second Div */}
      <div className="flex text-base justify-center items-center gap-8">
        <div className="cursor-pointer">
          <FiSearch size={23} />
        </div>
        <div className="cursor-pointer">
          <Badge color="red">
            <HiSpeakerphone size={23} />
          </Badge>
        </div>
        <div className="cursor-pointer">
          <button className="">Sign In</button>
        </div>
        <div className="cursor-pointer">
          <button className="px-2 py-1 border-2 text-black-500 border-[#0252b8] hover:bg-[#0252b8] transition-all duration-300 hover:text-white rounded-sm flex items-center justify-center">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
