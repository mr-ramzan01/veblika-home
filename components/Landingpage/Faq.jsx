import React from "react";
import {
  Accordion,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

const faq = [
  {
    id: 1,
    title: "What is Veblika and How it works?",
    desc: "We're not always in the position that we want to be at. We&apos;re constantly growing. We're constantly making mistakes. We're constantly trying to expressourselves and actualize our dreams.",
  },
  {
    id: 2,
    title: "What is the nature of the given Product?",
    desc: "We're not always in the position that we want to be at. We&apos;re constantly growing. We're constantly making mistakes. We're constantly trying to expressourselves and actualize our dreams.",
  },
  {
    id: 3,
    title: "how to use all Products?",
    desc: "We're not always in the position that we want to be at. We&apos;re constantly growing. We're constantly making mistakes. We're constantly trying to expressourselves and actualize our dreams.",
  },
  {
    id: 4,
    title: "What is Material Tailwind?",
    desc: "We're not always in the position that we want to be at. We&apos;re constantly growing. We're constantly making mistakes. We're constantly trying to expressourselves and actualize our dreams.",
  },
  {
    id: 5,
    title: "How is it Working?",
    desc: "We're not always in the position that we want to be at. We&apos;re constantly growing. We're constantly making mistakes. We're constantly trying to expressourselves and actualize our dreams.",
  },
  {
    id: 6,
    title: "What is Material Tailwind?",
    desc: "We're not always in the position that we want to be at. We&apos;re constantly growing. We're constantly making mistakes. We're constantly trying to expressourselves and actualize our dreams.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Typography className="text-xl py-2 text-[#0252b8]">FAQ</Typography>
      {faq.map((el) => (
        <Accordion
          key={el.id}
          open={open === el.id}
          className="border-b border-black-500 py-5 cursor-pointer"
        >
          <div
            className={`mobile:text-base flex items-center gap-4 tablet:text-lg w-full text-black text-thin text-base`}
            onClick={() => handleOpen(el.id)}
          >
            <span>
              {open === el.id ? (
                <AiFillMinusCircle color="#0252b8" />
              ) : (
                <AiFillPlusCircle color="#f3571a" />
              )}
            </span>
            {el.title}
          </div>
          {/* </div> */}
          <AccordionBody className="mobile:text-sm tablet:text-base ">{el.desc}</AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
