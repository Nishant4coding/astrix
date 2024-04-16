"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const unlockVarient = {
  active: {
    opacity: 1,
  },
  inactive: {
    opacity: 0,
  },
};

export default function Unlock() {
  return (
    <section className="min-h-screen fcc bg-[url('/unlock.png')]  bg-cover bg-no-repeat bg-center object-cover z-10 snap-center py-8">
      {/* web view */}
      <div className="hidden lg:inline-flex w-full h-full fc fsc ">
        <div className="fc fcc gap-4 mx-8">
          <div className="p-0 text-center mt-10 ">
            <span className="text-gray-300 text-5xl font-medium font-Roboto">
              Unlock the future of efficiency <br />
              with our
            </span>
            <span className="text-pk text-5xl font-medium font-Roboto">
              {" "}
              AI Automation
            </span>
            <span className="text-gray-300 text-5xl font-medium font-Roboto">
              {" "}
              services
            </span>
          </div>

          <div className="w-1/3 text-center text-gray-300 text-xl font-light font-Roboto">
            Our AI Automation services harness the power of artificial
            intelligence to automate repetitive tasks, make data-driven
            decisions, and optimize workflows across your organization.
          </div>

          <div className="mt-20 fsc gap-5 p-10 justify-evenly items-stretch ">
            <div className="fc fss gap-20 inline-flex w-1/5 ">
              <div className="fc fsc gap-5 flex-wrap">
                <div className="text-center text-gray-300 text-2xl font-semibold font-Roboto">
                  Data Analytics
                </div>
                <div className="text-center text-gray-300 text-base font-light font-Roboto">
                  Extract valuable insights from your data to drive data-driven
                  decision-making.
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="text-center text-gray-300 text-2xl font-semibold font-Roboto">
                  Process Automation
                </div>
                <div className="text-center text-gray-300 text-base font-light font-Roboto">
                  Streamline workflows, reduce manual interventions, and boost
                  operational efficiency.
                </div>
              </div>
            </div>

            <div className="w-[2px] h-cover bg-gradient-to-b from-transparent via-white to-transparent " />

            <div className="flex-col justify-start items-center gap-10 inline-flex w-1/5">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="text-center text-gray-300 text-2xl font-semibold font-Roboto">
                  Predictive Analytics
                </div>
                <div className="text-center text-gray-300 text-base font-light font-Roboto">
                  Anticipate trends and behaviors for proactive decision-making.
                  Stay ahead in the digital age with AI Automations. Embrace the
                  future of automation today.
                </div>
              </div>
              <div className="w-full h-20 fcc fc">
                <Link
                  target="_blank"
                  href="https://calendly.com/tusharasthana2002/free-consultation"
                >
                  <Button className="bg-pk rounded-xl m-auto text-white px-12 py-8 text-2xl whitespace-pre">
                    Click to integrate
                  </Button>
                </Link>
              </div>
            </div>

            <div className="w-[2px] h-cover bg-gradient-to-b from-transparent via-white to-transparent " />

            <div className="fc fes gap-12 w-1/5 ">
              <div className="fc fsc gap-5 ">
                <div className="text-center text-gray-300 text-2xl  font-semibold font-Roboto">
                  Virtual Assistants
                </div>
                <div className=" text-center text-gray-300 text-base font-lightfont-Roboto ">
                  Enhance customer support and engagement with intelligent
                  chatbots.
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="  text-center text-gray-300 text-2xl font-semibold font-Roboto">
                  AI-Powered Marketing
                </div>
                <div className=" text-center text-gray-300 text-base font-light font-Roboto ">
                  Optimize marketing campaigns with AI-driven strategies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className=" lg:hidden w-full h-auto flex-col  justify-start items-center gap-10 inline-flex bg-cover bg-no-repeat bg-center   bg-[url('/unlock.png')]">
        <div className="flex-col justify-start items-center text-center mt-8">
          <span className="text-gray-300 text-4xl">
            Unlock the future of efficiency with our &nbsp;
          </span>
          <span className="text-pk text-4xl">AI Automation</span>
          <span className="text-gray-300 text-3xl font-medium font-Roboto">
            {" "}
            services
          </span>
          <div className="text-gray-300 text-xl font-light font-Roboto mt-5  text-center p-5">
            Our AI Automation services harness the power of artificial
            intelligence to automate repetitive tasks, make data-driven
            decisions, and optimize workflows across your organization.
          </div>
        </div>

        <div className="fsc fc gap-8">
          <motion.div
            variants={unlockVarient}
            initial="inactive"
            whileInView="active"
            className="fcc fc"
          >
            <div className=" text-center text-gray-300 text-3xl w-48  font-semibold font-Roboto">
              Data Analytics
            </div>
            <div className="p-5 text-center text-gray-300 text-xl font-light font-Roboto">
              Extract valuable insights from your data to drive data-driven
              decision-making.
            </div>
          </motion.div>

          <motion.div
            variants={unlockVarient}
            initial="inactive"
            whileInView="active"
            className="fcc fc"
          >
            <div className="text-center text-gray-300 w-48 text-3xl font-semibold font-Roboto">
              Process Automation
            </div>
            <div className="p-5 text-center text-gray-300 text-xl font-light font-Roboto">
              Streamline workflows, reduce manual interventions, and boost
              operational efficiency.
            </div>
          </motion.div>

          <motion.div
            variants={unlockVarient}
            initial="inactive"
            whileInView="active"
            className="fcc fc"
          >
            <div className="text-center text-gray-300 w-48 text-3xl font-semibold font-Roboto">
              Chatbots and Virtual Assistants:
            </div>
            <div className="p-5 text-gray-300 text-xl font-light font-Roboto text-center">
              Enhance customer support and engagement with intelligent chatbots.
            </div>
          </motion.div>
          <motion.div
            variants={unlockVarient}
            initial="inactive"
            whileInView="active"
            className="fcc fc"
          >
            <div className=" text-center text-gray-300 w-48 text-3xl font-semibold font-Roboto">
              AI-Powered Marketing
            </div>
            <div className="p-5 text-gray-300 text-xl font-light font-Roboto text-center">
              Optimize marketing campaigns with AI-driven strategies.
            </div>
          </motion.div>

          <motion.div
            variants={unlockVarient}
            initial="inactive"
            whileInView="active"
            className="fcc fc"
          >
            <div className=" text-center text-gray-300 w-48 text-3xl font-semibold font-Roboto">
              Predictive Analytics
            </div>
            <div className="p-5 text-center text-gray-300 text-xl font-light font-Roboto">
              Anticipate trends and behaviors for proactive decision-making.
              Stay ahead in the digital age with AI Automations. Embrace the
              future of automation today.
            </div>
          </motion.div>

          <div className="w-[220px] h-[60px] relative mb-10">
            <div className="w-[220px] h-[60px] left-0 top-0 absolute bg-pk rounded-3xl">
              <Link
                target="_blank"
                href="https://calendly.com/tusharasthana2002/free-consultation"
                className="p-5 absolute text-center inset-0 flex items-center justify-center text-gray-300 text-xl font-bold font-Roboto"
              >
                Click to integrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
