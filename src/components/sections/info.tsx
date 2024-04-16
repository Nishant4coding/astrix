'use client'
import Image from "next/image";
import React from "react";

export default function Info() {
  return (
    <div className="w-[100%] p-10 flex flex-col justify-center items-center h-auto bg-black text-center text-gray-100  ">
      <div>
        <span className="text-pe text-4xl sm:text-5xl font-bold font-Roboto">
          Let{"`"}s{" "}
        </span>
        <span className="text-pk text-4xl sm:text-5xl font-bold font-Roboto">
          build
        </span>
        <span className="text-pe text-4xl sm:text-5xl font-bold font-Roboto">
          {" "}
          your business together
        </span>
      </div>
      <div className="text-3xl font-bold font-Roboto mt-10">
        info@astrix.co.in
      </div>
      <div
        onClick={() => window.scrollTo(0, 0)}
        className="w-40 h-40 mt-20 flex justify-center items-center relative "
      >
        <div className="w-40 h-40 top-0 absolute bg-pk rounded-full flex justify-center items-center ">
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
        </div>
        <Image
          className="absolute w-8 fcc transform rotate-180 cursor-pointer "
          src="/svgs/pointer.svg"
          width={200}
          height={100}
          alt=""
        />
      </div>
    </div>
  );
}
