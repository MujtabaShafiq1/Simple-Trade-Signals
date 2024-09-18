import React from "react";
import Image from "next/image";
import { SOCIAL_ICONS } from "sts/utils/constants";

const Footer = () => {
  return (
    <footer className="text-neutral-100 border-t bg-gray-100">
      <div className="container mx-auto p-4 gap-8 flex flex-col justify-between items-center text-center">
        <div className="flex flex-col gap-4">
          <Image src="/assets/logo.png" width={180} height={180} alt="logo" />
          <div className="flex justify-center items-center">
            {SOCIAL_ICONS.map(({ Icon, label, link }) => (
              <a
                key={label}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer">
                <Icon className="text-neutral-100 hover:bg-primary-100 hover:text-neutral-50 rounded-full cursor-pointer w-10 h-10 p-2" />
              </a>
            ))}
          </div>
        </div>
        <p className="max-w-screen-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <p>&copy;2023 LeadLoom. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
