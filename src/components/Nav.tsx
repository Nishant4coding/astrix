import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { HamburgerOnMobile } from "./Hamburger";
import NavLinks from "./navLinks";

function Nav() {
  return (
    <div className="fc fcc w-full ">
      <div className="fr fcb md:w-[90%] w-[95%]">
        <Image
          className="w-40 h-16"
          alt="main logo"
          src="/logo.png"
          width={500}
          height={300}
          priority
        />
        <div className="fss gap-12 text-md w-[50%] font-base hidden md:flex">
          <NavLinks />
        </div>
        <div className="text-xl cursor-pointer ">
          <Link
            target="_blank"
            href="https://calendly.com/tusharasthana2002/free-consultation"
          >
            <div className="bg-gradient-pp text-transparent bg-clip-text hidden md:block">
              CONSULT NOW
            </div>
          </Link>
          <div className="w-fit md:hidden fc ">
            <Suspense>
              <HamburgerOnMobile />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
