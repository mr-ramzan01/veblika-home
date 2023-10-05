import React from "react";
import {
  Drawer,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { RxCross2 } from "react-icons/rx";
import AccordianComp from "@/core/AccordianComp";

const Menu = ({ open, closeDrawer }) => {
  return (
    <Drawer size={1000} open={open} onClose={closeDrawer}>
      <div className="mb-2 flex items-center justify-between p-4">
        <Typography variant="h5" color="blue-gray">
          Veblika
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <RxCross2 size={27} />
        </IconButton>
      </div>
      <div className="px-4 pb-4">
        <AccordianComp />
      </div>
    </Drawer>
  );
};

export default Menu;
