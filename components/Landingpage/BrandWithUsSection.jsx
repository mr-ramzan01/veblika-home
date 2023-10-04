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
      link: "/online-strikers-logo.jpg",
      round: false,
    },
    {
      id: 5,
      name: "Sme Bizz",
      link: "/smebizz-logo.jpg",
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
      link: "/online-strikers-logo.jpg",
      round: false,
    },
    {
      id: 11,
      name: "Sme Bizz",
      link: "/smebizz-logo.jpg",
      round: false,
    },
    {
      id: 12,
      link: "soiim-logo.png",
      name: "SOIIM",
      round: false,
    },
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
        link: "/online-strikers-logo.jpg",
        round: false,
      },
      {
        id: 5,
        name: "Sme Bizz",
        link: "/smebizz-logo.jpg",
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
        link: "/online-strikers-logo.jpg",
        round: false,
      },
      {
        id: 11,
        name: "Sme Bizz",
        link: "/smebizz-logo.jpg",
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
    <div className="border flex flex-col gap-8 p-10 text-center overflow-hidden relative border-red-500">
      <h5 className="text-md">BRANDS THAT TRUST US</h5>
      <div className="flex justify-center absolute items-center border border-blue-500 gap-10 overflow-hidden">
        {brands.map((el, i) => (
          <div style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 1s ease-in-out',
            width: `100px`,
          }}  key={i} className="shadow">
            <img
              src={el.link}
              className={`${
                el.round === true ? "w-48 h-20" : "w-48 h-12"
              }`}
              alt={el.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandWithUsSection;
