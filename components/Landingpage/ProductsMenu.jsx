import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

const menuItems = [
  {
    title: "Veblika CRM",
    description:
      "Learn how to use Veblika CRM, packed with rich components and widgets.",
  },
  {
    title: "Veblika Email Marketing",
    description:
      "Learn how to use Veblika Email Marketing, packed with rich components and widgets.",
  },
  {
    title: "Veblika Sms Marketing",
    description:
      "Learn how to use Veblika Sms Marketing, packed with rich components for React.",
  },
  {
    title: "Veblika Whatsapp Marketing",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

const ProductsMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <Menu
      open={openMenu}
      handler={setOpenMenu}
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
      placement="bottom-start"
      allowHover
    >
      <MenuHandler>
        <button
          variant="text"
          className="flex items-center gap-3 p-0 text-base font-normal capitalize"
        >
          Products{" "}
          <FiChevronDown
            strokeWidth={1.5}
            className={`h-5 w-5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </button>
      </MenuHandler>
      <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
        <Card
          color="gray"
          shadow={false}
          variant="gradient"
          className="col-span-3 grid h-full w-full place-items-center rounded-md"
        >
          <Image
            strokeWidth={1}
            src={"/logo2.png"}
            width={100}
            height={100}
            className="h-28 w-28"
            alt='Image'
          />
        </Card>
        <ul className="col-span-4 flex w-full flex-col gap-1">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {description}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
};

export default ProductsMenu;
