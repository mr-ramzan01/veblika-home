import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  const list = [
    {
      id: "1",
      title: "About Us",
      link: "#",
    },
    {
      id: "2",
      title: "Privacy Policy",
      link: "#",
    },
    {
      id: "3",
      title: "Refund",
      link: "#",
    },
    {
      id: "4",
      title: "Terms & Conditions",
      link: "#",
    },
    {
      id: "5",
      title: "Contact Us",
      link: "#",
    },
  ];
  return (
    <footer className="flex w-full flex-row bg-[rgba(0,0,0,0.7961309523809523)] flex-wrap items-center px-4 justify-center gap-x-12 mobile:gap-y-2 desktop:gap-y-6 border-t border-blue-gray-50 py-3 text-center md:justify-between">
      <Typography
        color="blue-gray"
        className="text-white mobile:text-xs desktop:text-base"
      >
        &copy; {new Date().getFullYear()} Veblika
      </Typography>
      <ul className="flex flex-wrap items-center justify-center gap-y-2 mobile:gap-x-4 desktop:gap-x-8">
        {list.map((el) => (
          <li key={el.id}>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white transition-colors hover:text-blue-500 focus:text-blue-500 mobile:text-xs desktop:text-base"
            >
              {el.title}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
