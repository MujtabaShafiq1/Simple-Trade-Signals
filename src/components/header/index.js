import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { IoMenu as MenuIcon } from "react-icons/io5";
import { NAV_OPTIONS } from "sts/utils/constants";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="z-50 fixed bg-transparent min-w-full">
      <div className="max-w-screen-2xl border-none flex flex-wrap items-center justify-between px-4 mx-auto h-[120px]">
        <Image src="/assets/logo.svg" width={80} height={80} alt="logo" />
        <MenuIcon
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          className="w-8 h-8 md:hidden text-neutral-300"
          onClick={() => setOpen((prev) => !prev)}
        />
        <div
          className={`hidden md:block md:w-auto transition-all ease-in-out duration-300`}
          id="dropdownHover">
          <ul className="font-medium flex flex-row gap-8 items-center">
            {Object.entries(NAV_OPTIONS).map(([key, value], index) => (
              <li key={key}>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={300}
                  to={value}
                  className="text-neutral-50 text-lg cursor-pointer">
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        id="dropdownHover"
        className={`bg-neutral-50 w-[100vw] transition-all ease-in-out duration-300 ${
          open ? `block` : `hidden`
        }`}>
        <ul className="font-medium flex flex-col p-4 gap-6 border items-center shadow-lg">
          {Object.entries(NAV_OPTIONS).map(([key, value], index) => (
            <li key={key}>
              <Link
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
                to={value}
                className="text-primary-300 text-md cursor-pointer">
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
