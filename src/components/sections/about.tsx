import React from "react";
import curve from "../../../public/svgs/curve.svg";

function About() {
  return (
    <section className=" w-full">
      <div className="bg-zinc-950 rounded-br-[50px] h-auto lg:p-10">
        <div className="bg-white rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[50px] rounded-br-[50px]">
          <div className="flex-col justify-start items-center">
            <div className="flex-col gap-2.5">
              <div className="text-center pt-20">
                <span className="text-zinc-900 lg:text-5xl text-3xl font-bold font-Roboto">
                  We are <br />
                  humans who{" "}
                </span>
                <span className="text-purple-800 lg:text-5xl text-3xl font-bold font-Roboto">
                  collaborates
                </span>
                <span className="text-zinc-900 lg:text-5xl text-3xl font-bold font-Roboto">
                  {" "}
                  with <br /> some humans{" "}
                </span>
              </div>
              <div className="text-center text-neutral-600 text-xl lg:text-3xl font-extrabold font-Roboto lg:leading-[57.50px] mt-20">
                At Astrix, we're more than just a digital agency; <br />
                we're architects of transformation 🚀
              </div>
              <img className="mb-20" src="/svgs/curve.svg" alt="" />
              <div className="text-center text-purple-800 text-xl w-[80%] font-normal font-Roboto mx-auto pb-10">
                Our journey began with a deep passion for technology and a
                vision for a future where businesses thrive in the digital
                landscape. With years of experience in IT solutions, web design,
                mobile app development, and digital marketing, we've evolved
                into a dynamic force.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
