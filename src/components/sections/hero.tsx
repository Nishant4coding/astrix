"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const scrollToAbout = () => {
  const AboutSection = document.getElementById("about");
  if (AboutSection) {
    AboutSection.scrollIntoView({ behavior: "smooth" });
  }
};
function HeroSection() {
  useEffect(() => {
    function counter(id: string, start: number, end: number, duration: number) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          if (obj) {
            obj.textContent = current.toString();
          }
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }

    counter("count1", 0, 99, 3000);
    counter("count2", 0, 32, 2500);
    counter("count3", 0, 3, 3000);
  }, []);

  return (
    <section className="w-full fc fcc relative">
      <div className="w-[80%] my-16 fr  flex-wrap xl:flex-nowrap gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fc justify-center gap-20  min-w-[50%] md:w-full md:m-auto  md:p-16"
        >
          <div className="fc self-start gap-8 lg:mx-8 ">
            <div className="text-center text-white text-3xl sm:text-5xl md:text-7xl md:text-left font-bold font-Roboto tracking-wider">
              Your Complete <br />
              <span className="bg-gradient-pp text-transparent bg-clip-text">
                Digital Solutions <br />
              </span>
              Partner
            </div>
            <div className="w-full md:w-[450px] text-white text-md md:text-xl font-normal font-Roboto  text-center md:text-left">
              Unleash Your Business Potential with Expert IT, Web, Mobile
              Development, Product Innovation, Social Media Branding, and
              Digital Marketing Strategies
            </div>
          </div>
          <div className="fr items-center gap-8 lg:mx-8 flex-wrap fcc md:flex-nowrap md:fsc">
            <Link
              target="_blank"
              href="https://calendly.com/tusharasthana2002/free-consultation"
            >
              <div className="text-white p-4 px-8 border-2 rounded-lg">
                Consult Now
              </div>
            </Link>
            <Link target="_blank" href="/Assets/Astrix Brochure.pdf">
              <div className="text-center text-pk text-xl font-bold font-Roboto">
                Download Brochure
              </div>
            </Link>
          </div>
        </motion.div>

        {/* image element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=" min-w-[50%] md:w-full"
        >
          <div className="m-auto w-fit relative ">
            <Image
              src={"/svgs/hero.svg"}
              width={600}
              height={800}
              alt="images absolute top-0 left-0"
              className="w-auto h-auto"
            />
            <div className="absolute top-[50%] -translate-y-[50%] right-0 fc fcc gap-8 md:gap-20 text-white w-16 md:w-36 break-words">
              <div className="text-md md:text-3xl w-24 ">
                +<span id="count1">0</span>
                <br />
                <span className="text-[0.5em] font-semibold font-Plus Jakarta Sans ">
                  Project Complete
                </span>
              </div>
              <div className="text-md md:text-3xl w-24">
                +<span id="count2">0</span>
                <br />
                <span className="text-[0.5em] font-semibold font-Plus Jakarta Sans ">
                  Happy Client
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              <div className="text-md md:text-3xl w-24">
                +<span id="count3">0</span>
                <br />
                <span className="text-[0.5em] font-semibold font-Plus Jakarta Sans ">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        layout
        className="absolute hidden xl:block bottom-0 left-[50%] -translate-x-[50%] w-32 h-32 "
      >
        <div className="w-30 h-30 mt-20 flex justify-center items-center relative">
          <Image
            src="/svgs/info.svg"
            width={200}
            height={100}
            alt=""
            className="animate-spin"
            style={{
              animationDuration: "6s",
            }}
          />

          <Image
            onClick={scrollToAbout}
            className="absolute flex w-6 text-bold justify-center items-center  mt-8 transform cursor-pointer"
            src="/svgs/pointer.svg"
            width={200}
            height={100}
            alt=""
          />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
