import React from "react";
import "./header.css";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import useAuth from "../../hook/useAuth";
import { IoPower } from "react-icons/io5";
import Swal from "sweetalert2";

const Header = () => {
  const user = false;
  const logoutUser = true;

  // const { user, logoutUser } = useAuth();

  const { email, photoURL, displayName } = user || {};

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // logout the user
  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Wanna Sign Out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SURE",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire({
          title: "Sir You Have Successfully Sign Out!",
          icon: "success",
        });
      }
    });
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a
        href="#"
        className="p-1 text-lg transition-all  px-3 py-2  hover:bg-transparent border-animate"
      >
        Home
      </a>
      <a
        href="#products"
        className="p-1 text-lg transition-all  px-3 py-2  hover:bg-transparent border-animate"
      >
        All Products
      </a>
      <a
        href="#about"
        className="p-1 text-lg transition-all  px-3 py-2  hover:bg-transparent border-animate"
      >
        About
      </a>
      <a
        href="#contact"
        className="p-1 text-lg transition-all  px-3 py-2  hover:bg-transparent border-animate"
      >
        Contact Us
      </a>
      <a
        href="#cart"
        className="p-1 text-lg transition-all  px-3 py-2  hover:bg-transparent border-animate"
      >
        Cart
      </a>
    </ul>
  );

  return (
    <div className="mb-24">
      <Navbar className="fixed  z-50 top-0 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#180161]">
        <div className="flex items-center justify-between">
          <Typography
            as="a"
            href="/"
            className="mr-4  cursor-pointer  font-signature text-3xl text-[#FB773C]"
          >
            <p className="text-3xl flex justify-between items-center">
              <span className="mr-2 text-white font-semibold">{"<"}</span>
              <span className="font-signature text-xl md:text-3xl">
                {" "}
                Tech
                <span className="mx-2 text-white ">\</span>
                Nest
              </span>
              <span className="ml-3 text-white font-semibold">{">"}</span>
            </p>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-x-1">
              {user ? (
                <div className="dropdown md:dropdown-hover">
                  <div tabIndex={0} role="button" className="avatar m-1">
                    <div className="w-10 md:w-12 lg:w-14 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2">
                      <img src={photoURL} />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content border-2 -right-2 md:right-6  z-50 menu p-2 shadow-md bg-base-100 rounded-box text-base md:text-lg text-[#39474F]"
                  >
                    <li>
                      <p>{displayName}</p>
                    </li>
                    <li>
                      <p>{email}</p>
                    </li>
                    <li></li>
                    <li className="w-full my-3">
                      <Button
                        onClick={logout}
                        color="red"
                        size="sm"
                        className="flex justify-center items-center gap-2 md:text-base w-full hover:bg-[#39474F] hover:text-white"
                      >
                        {" "}
                        <IoPower />
                        Sign Out
                      </Button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="text"
                      size="sm"
                      color="red"
                      className="hidden   text-base hover:bg-transparent lg:inline-block border-animate"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <span className="text-white text-3xl mr-3 hidden lg:inline-block">
                    /
                  </span>
                  <Link to="/register">
                    <Button
                      variant="gradient"
                      size="sm"
                      color="red"
                      className="hidden text-[#fff] text-base lg:inline-block"
                    >
                      <span>REGISTER</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 border-4 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="mt-5" open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1 ">
            {!user && (
              <>
                <Link className="w-full" to="/login">
                  <Button
                    fullWidth
                    variant="outlined"
                    size="sm"
                    color="red"
                    className="border-[#fff]"
                  >
                    <span>Log In</span>
                  </Button>
                </Link>

                <Link to="/register" className="w-full">
                  <Button fullWidth variant="gradient" color="red" size="sm">
                    <span>REGISTER</span>
                  </Button>
                </Link>
              </>
            )}
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
