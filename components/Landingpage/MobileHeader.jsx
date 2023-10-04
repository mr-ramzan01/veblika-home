import Image from "next/image";
import React from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Menu from "./Drawer";

const MobileHeader = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <header className="text-base shadow px-4 py-2 flex items-center justify-between mobile:h-[50px] tablet:h-[70px]">
      {open && <Menu open={open} closeDrawer={closeDrawer} />}
      <div className="">
        <HiOutlineMenu onClick={openDrawer} size={30} />
      </div>
      <div className="">
        <Image
          width={130}
          height={80}
          className="mx-5 cursor-pointer mobile:w-[110px] tablet:w-[130px]"
          alt={"image"}
          src={"/veblikalogo.png"}
        />
      </div>
    </header>
  );
};

export default MobileHeader;
