"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import sm1 from "../../public/svgs/sm1.svg";
import sm2 from "../../public/svgs/sm2.svg";
import sm3 from "../../public/svgs/sm3.svg";
import sm4 from "../../public/svgs/sm4.svg";
import sm5 from "../../public/svgs/sm5.svg";
import Subscribe from "./Subscribe";

function Footer() {
  return (
    <footer className="bg-zinc-950 w-full ">
      <div className="container mx-auto p-4 flex flex-col items-center relative mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center mb-10 ">
          <div className="mb-8 md:mb-0 flex flex-col justify-center items-center mt-10">
            <Image
              src="/logo.png"
              width={300}
              height={500}
              className="w-60 h-auto text-center justify-center"
              alt=""
            />
            <div className="flex-1"></div>
          </div>
          <div>
            {/* web view */}

            <div className="mb-8  md:mb-0 text-left ml-20 hidden md:block mt-10">
              <h3 className="text-lg font-bold mb-4 text-pe text-Roboto">
                Information
              </h3>
              <nav className="space-y-2">
                <Link
                  href="#"
                  className="text-white hover:text-pe transition duration-300 block"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-pe transition duration-300 block"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-pe transition duration-300 block"
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-white hover:text-pe transition duration-300 block"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <div className="mb-8 md:mb-0 text-left hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-pe">Services</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Website Development
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Application Development
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Product Development
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Branding & Social Media
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Digital Marketing
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                AI Automation
              </Link>
            </nav>
          </div>
          <div className="mb-8 md:mb-0 text-left hidden md:block mt-10">
            <h3 className="text-lg font-bold mb-4 text-pe">Company</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Career
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Terms & Condition
              </Link>
              <Link
                href="#"
                className="text-white hover:text-pe transition duration-300 block"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        {/* social links */}
        <div className="md:hidden w-[60%]">
          <Subscribe />
        </div>
        <div className="fcc fc text-center justify-center p-5">
          <div className="flex flex-row space-x-6 items-center">
            {/* <Link
              href="#"
              className="flex items-center py-2"
            >
              <Image src={sm1} height={40} alt="" />
            </Link>
            <div className="w-[2px] h-10 bg-gray-300"></div> */}
            <Link
              href="https://www.linkedin.com/company/astrixmarketing/"
              target="_blank"
              className="text-green-500 hover:text-green-700 flex items-center py-2"
            >
              <Image src={sm2} height={40} alt="" />
            </Link>
            <div className="w-[2px] h-10 bg-gray-300"></div>
            {/* <Link
              href="#"
              className="text-red-500 hover:text-red-700 flex items-center py-2"
            >
              <Image src={sm3} height={40} alt="" />
            </Link>
            <div className="w-[2px] h-10 bg-gray-300"></div> */}
            <Link
              target="_blank"
              href="https://www.instagram.com/astrix_co_in/"
              className="text-pe hover:text-pe flex items-center py-2"
            >
              <Image src={sm4} height={40} alt="" />
            </Link>
            {/* <div className="w-[2px] h-10 bg-gray-300"></div> */}
            {/* <Link
              href="#"
              className="text-yellow-500 hover:text-yellow-700 flex items-center py-2"
            >
              <Image src={sm5} height={40} alt="" />
            </Link> */}
          </div>
        </div>
      </div>

      <div className=" text-center text-stone-900 lg:text-[250px] text-7xl font-medium font-Roboto pb-0 ">
        astrix
      </div>
    </footer>
  );
}

export default Footer;
