import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail, MdTextsms, MdWhatsapp } from "react-icons/md";

const FirstSection = () => {
  const apps = [
    {
      id: 1,
      title: "CRM",
      icon: FaUserFriends,
      description: "Secure your business with our services.",
      color: "#0252b8",
      redirect: "#",
    },
    {
      id: 2,
      title: "Mail",
      icon: MdEmail,
      description: "Secure your business with our services.",
      color: "#4285f4",
      redirect: "#",
    },
    {
      id: 3,
      title: "SMS",
      icon: MdTextsms,
      description: "Secure your business with our services.",
      color: "#fcb752",
      redirect: "#",
    },
    {
      id: 4,
      title: "Whatsapp",
      icon: MdWhatsapp,
      description: "Secure your business with our services.",
      color: "#25d366",
      redirect: "#",
    },
  ];
  return (
    <section className="bg-[#f8f9fb]">
      <div className="mobile:block desktop:flex  p-10 mobile:py-10 desktop:py-20">

        {/* First div */}
        <div className="mobile:w-full desktop:w-[60%] ">
          <div className="flex mobile:w-full tablet:w-[70%] m-auto desktop:w-full flex-col gap-8 mobile:text-center desktop:text-left">
            <heading>
              <h1 className="mobile:text-3xl tablet:text-4xl desktop:text-6xl font-thin">
                Your life's work,
              </h1>
              <h1 className="mobile:text-3xl tablet:text-4xl desktop:text-6xl font-thin">powered by our life's work</h1>
            </heading>
            <p className="mobile:text-xl desktop:text-2xl text-[#0252b8]">
              A unique and powerful software suite to transform the way you
              work. Designed for businesses of all sizes, built by a company
              that values your privacy.
            </p>
            <div className="flex mobile:justify-center desktop:justify-start">
              <button className="px-4 py-2.5  bg-[#f3571a] transition-all duration-300 text-white rounded-sm flex justify-center items-center gap-3">
                <span>Get Started For Free</span>{" "}
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img src="/firstsectionimage.png" className="object-fill" />
          </div>
        </div>

        {/* Second div */}
        <div className="mobile:w-full desktop:w-[40%] mobile:pt-10 desktop:p-0">
          <div className="mobile:-full tablet:w-[70%] mobile:m-auto rounded-md shadow-3xl m-10 mt-0 p-5">
            <p className="my-3 text-base">Featured Apps</p>
            <div className="flex flex-col gap-8">
              {apps.map((el) => (
                <Link href={el.redirect} key={el.id} className="flex gap-3">
                  <div className="">
                    {<el.icon size={40} color={el.color} />}
                  </div>
                  <div>
                    <h5 className="text-lg">{el.title}</h5>
                    <div className="flex justify-center items-center gap-5">
                      <p className="mobile:text-xs tablet:text-base">{el.description}</p>
                      <IoIosArrowForward />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <hr className="my-5" />
            <Link
              href="#"
              className="flex text-lg hover:text-[#0252b8] cursor-pointer justify-center items-center gap-5"
            >
              <p className="mobile:text-base tablet:text-lg">Explore All Products</p>
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
