import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BiChevronDown, BiSolidUserCircle } from "react-icons/bi";
import { MdEmail, MdTextsms, MdWhatsapp } from "react-icons/md";
import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaInfoCircle, FaUserFriends } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";

export const Menus = [
  {
    title: "Products",
    icon: HiMiniShoppingBag,
    option: [
      { name: "CRM", link: "#", icon: FaUserFriends },
      { name: "Email Marketing", link: "#", icon: MdEmail },
      { name: "Sms Marketing", link: "#", icon: MdTextsms },
      { name: "Whatsapp Marketing", link: "#", icon: MdWhatsapp },
    ],
  },
  {
    title: "Customers",
    icon: BsFillPeopleFill,
    redirect: '#'
  },
  {
    title: "About Us",
    icon: FaInfoCircle,
    redirect: '#'
  },
  {
    title: "Profile",
    icon: BiSolidUserCircle,
    redirect: '#'
  },
  {
    title: "Sign out",
    icon: TbLogout,
    redirect: '#'
  },
];

const AccordianComp = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div className="flex gap-[-10px] flex-col">
        {Menus.map((el, i) => {
          return (
            <Accordion
              className="flex gap-[-10px] flex-col"
              open={open === i + 2}
              key={i}
            >
              <AccordionHeader
                className="border-none"
                onClick={() => handleOpen(i + 2)}
              >
                <Link href={el.redirect ? el.redirect : ''} className="flex text-[12px] font-normal w-full justify-between ">
                  <div className="flex gap-x-3 justify-start items-center">
                    {<el.icon size={20} />}
                    <p className={`text-[15px]`}>{el.title}</p>
                  </div>
                  {el?.option?.length > 0 && (
                    <div className="flex justify-center items-center">
                      <BiChevronDown
                        className={`${
                          open === i + 2 &&
                          "rotate-180 duration-500 transition-all"
                        } rotate-0 duration-500 transition-all`}
                        size={20}
                      />
                    </div>
                  )}
                </Link>
              </AccordionHeader>
              {el.option && (
                <AccordionBody>
                  {/* body  */}
                  <div className="w-full flex flex-col justify-center font-normal gap-y-2 ml-[10px] mt-[-13px]">
                    {el?.option?.map((nested, i) => {
                      return (
                        <Link
                          href={nested?.link}
                          key={i}
                          className="flex cursor-pointer gap-x-5 pl-[20px] items-center justify-start hover:text-indigo-500 duration-500 transition-all"
                        >
                          {<nested.icon size={18} />}
                          <p className="text-[14px]">{nested.name}</p>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionBody>
              )}
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default AccordianComp;
