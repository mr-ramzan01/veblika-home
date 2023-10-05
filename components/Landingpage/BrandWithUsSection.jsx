import React, { useEffect, useState } from "react";

const BrandWithUsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length); 
        }, 3000);
        return () => clearInterval(interval);
    }, []);
  const brands = [
    {
      id: 1,
      name: "CNS",
      link: "/cns-logo.jpeg",
      round: false,
    },
    {
      id: 2,
      name: "Asian International University",
      link: "/aiu-logo.png",
      round: true,
    },
    {
      id: 3,
      name: "Delhi Institute of digital Marketing",
      link: "/didm-logo.png",
      round: false,
    },
    {
      id: 4,
      name: "Online Strikers",
      link: "/online-strikers-logo.png",
      round: false,
    },
    {
      id: 5,
      name: "Sme Bizz",
      link: "/smebizz-logo.png",
      round: false,
    },
    {
      id: 6,
      link: "soiim-logo.png",
      name: "SOIIM",
      round: false,
    },
    {
      id: 7,
      name: "CNS",
      link: "/cns-logo.jpeg",
      round: false,
    },
    {
      id: 8,
      name: "Asian International University",
      link: "/aiu-logo.png",
      round: true,
    },
    {
      id: 9,
      name: "Delhi Institute of digital Marketing",
      link: "/didm-logo.png",
      round: false,
    },
    {
      id: 10,
      name: "Online Strikers",
      link: "/online-strikers-logo.png",
      round: false,
    },
    {
      id: 11,
      name: "Sme Bizz",
      link: "/smebizz-logo.png",
      round: false,
    },
    {
      id: 12,
      link: "soiim-logo.png",
      name: "SOIIM",
      round: false,
    },
  ];
  return (
    <div className="bg-[#f8f9fb]">
      <div className="flex flex-col gap-8 p-10 text-center ">
      <h5 className="text-md">BRANDS THAT TRUST US</h5>
      <div className="flex justify-center flex-wrap items-center gap-10">
        {brands.map((el, i) => (
          <div key={i} className="">
            <img
              src={el.link}
              className={`${
                el.round === true ? "w-16 h-16" : "w-48 h-12"
              }`}
              alt={el.name}
            />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BrandWithUsSection;
