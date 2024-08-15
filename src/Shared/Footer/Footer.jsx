import { BsFillTelephoneFill } from "react-icons/bs";

import { MdEmail } from "react-icons/md";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <section className="mt-10">
      <div className="footer p-10 py-24 bg-[#4F1787] text-lg text-white">
        <aside>
          <Typography
            as="a"
            href="/"
            className="mr-4  cursor-pointer  font-signature text-3xl text-[#FB773C]"
          >
            <p className="text-3xl flex justify-between items-center">
              <span className="mr-2 text-white font-semibold">{"<"}</span>
              <span className="font-signature text-xl md:text-4xl">
                {" "}
                Tech
                <span className="mx-2 text-white ">\</span>
                Nest
              </span>
              <span className="ml-3 text-white font-semibold">{">"}</span>
            </p>
          </Typography>
          <br />

          <p className="md:w-2/3">
            <span className="text-3xl font-bold text-[#EB3678]">
              019 - 4565 - 009
            </span>
            <br />
            TechNest / Gadget House
            <br />
            Providing all the latest Gadgets and updates to all the people for
            tech Gadget
          </p>
        </aside>
        <nav className="space-y-5 mr-0 md:mr-10">
          <h6 className="footer-title text-[#fba7c6]">Contact Us</h6>
          <a className="link link-hover flex items-center gap-3">
            <BsFillTelephoneFill /> +999-111-0000
          </a>
          <a className="link link-hover flex items-center gap-3">
            <MdEmail className="text-2xl" /> TechNest@007.com
          </a>
          <a className="link link-hover flex items-center gap-5">
            <FaFacebook className="text-3xl" />{" "}
            <FaSquareInstagram className="text-3xl" />{" "}
            <FaLinkedinIn className="text-3xl" />{" "}
            <FaSquareTwitter className="text-3xl" />
          </a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title text-[#eb8fb1]">Services</h6>
          <p>- Lapto Shopping</p>
          <p>- Mobile Shopping</p>
          <p>- Keyboard Shopping</p>
          <p>- Mouse Shopping</p>
        </nav>
      </div>
      <div className="footer items-center px-4 py-10 bg-[#4F1787] text-neutral-content border-t">
        <aside className="items-center grid-flow-col">
          <p className="text-lg">Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p className="text-xl">Privacy Policy</p>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
