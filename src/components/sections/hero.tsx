"use client";
import React, { useEffect } from "react";
import "../../app/page.css";
import Image from "next/image";

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
      <div className="w-[80%] my-16 fr  flex-wrap xl:flex-nowrap gap-4">
        <div className="fc justify-center gap-20  min-w-[50%] md:w-full md:m-auto  p-16">
          <div className="fc self-start gap-8 lg:mx-8">
            <div className="text-center text-white text-7xl md:text-5xl md:text-left font-bold font-Roboto tracking-wider">
              Your Complete <br />
              <span className="bg-gradient-pp text-transparent bg-clip-text">
                Digital Solutions <br />
              </span>
              Partner
            </div>
            <div className="w-full md:w-[450px] text-white text-xl font-normal font-Roboto mx-auto text-center md:text-left">
              Unleash Your Business Potential with Expert IT, Web, Mobile
              Development, Product Innovation, Social Media Branding, and
              Digital Marketing Strategies
            </div>
          </div>
          <div className="fr items-center gap-16 lg:mx-8 ">
            <div className="w-[180px] h-[60px] relative">
              <div className="w-[180px] h-[60px] left-0 top-0 absolute rounded-[14px] border-2 border-white">
                <div className="p-5 absolute inset-0 flex items-center justify-center text-center text-white text-xl font-bold font-Roboto ">
                  Consult Now
                </div>
              </div>
            </div>
            <div className="text-center text-pk text-xl font-bold font-Roboto">
              Download Brochure
            </div>
          </div>
        </div>

        {/* image element */}
        <div className=" min-w-[50%] md:w-full">
          <div className="m-auto w-fit relative ">
            <Image
              src={"/svgs/hero.svg"}
              width={600}
              height={800}
              alt="images absolute top-0 left-0 "
            />
            <div className="absolute top-[50%] -translate-y-[50%] right-4 fc fcc gap-20 text-white">
              <div className="text-3xl font-semibold font-Poppins leading-[1.2em]">
                +<span id="count1">0</span>
                <br />
                <span className="text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                  Project Complete
                </span>
              </div>
              <div className="text-3xl font-semibold font-Poppins leading-[1.2em]">
                +<span id="count2">0</span>
                <br />
                <span className="text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                  Happy Client
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </div>
              {/* <div className=" text-3xl font-semibold font-Poppins leading-[1.2em]">
                +<span id="count2">0</span>
                <br />
                <span className="text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                  Happy Client
                </span>
              </div> */}
              <div className="text-3xl font-semibold font-Poppins leading-[1.2em]">
                +<span id="count3">0</span>
                <br />
                <span className="text-xs font-semibold font-Plus Jakarta Sans leading-relaxed">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute hidden xl:block bottom-0 left-[50%] -translate-x-[50%] w-32 h-32 ">
        <Image
          src={"/svgs/heroPageSomeThing.svg"}
          height={300}
          width={300}
          alt="something"
          className="-top-20 left-0 w-96 h-120 z-10 "
        />
      </div>
    </section>
  );
}

export default HeroSection;
