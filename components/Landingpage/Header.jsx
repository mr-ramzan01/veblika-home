import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="border border-red-500 p-2 flex h-[70px]">
      {/* First Div */}
      <div className="flex border border-black justify-center items-center gap-5">
        <div>
          <Image
            width={180}
            height={80}
            className="mx-5 cursor-pointer"
            alt={"image"}
            src={"/veblikalogo.png"}
          />
        </div>
        <div className="border border-green-500">
          <h5 className="text-lg cursor-pointer">Products</h5>
        </div>
        <div className="border border-green-500">
          <h5 className="text-lg cursor-pointer">Customers</h5>
        </div>
        <div className="border border-green-500">
          <h5 className="text-lg cursor-pointer">About Us</h5>
        </div>
        <div className="border border-green-500">
          <h5 className="text-lg cursor-pointer">Contact Us</h5>
        </div>
      </div>
      {/* Second Div */}
      <div className="border border-blue-500">
        <div></div>
      </div>
    </div>
  );
};

export default Header;
