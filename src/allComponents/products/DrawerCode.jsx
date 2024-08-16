import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoFilterSharp } from "react-icons/io5";
import CategoryCode from "./CategoryCode";

const DrawerCode = () => {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <>
      <React.Fragment>
        <Button
          className="flex items-center gap-2 p-2"
          color="deep-purple"
          onClick={openDrawerRight}
        >
          <IoFilterSharp className="text-lg" /> Filter
        </Button>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Categorize products
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <>
           <CategoryCode></CategoryCode>
          </>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default DrawerCode;
