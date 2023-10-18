import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import "react-multi-carousel/lib/styles.css";
// import Carousel from "react-multi-carousel";

export default function Testimonial() {
  return (
    <div className="w-full bg-zinc-950 max-h-screen p-10 mb-10 ">
      <div className=" items-center text-center justify-center my-10">
        <span className="text-purple-800 text-5xl md:text-5xl font-medium font-Roboto">
          What people{" "}
        </span>
        <span className=" text-pink-500 text-5xl font-medium font-Roboto">
          say <br className="lg:hidden" />
        </span>
        <span className="text-purple-800 text-5xl font-medium font-Roboto">
          {" "}
          about us
        </span>
      </div>

      <div className="fr overflow-x-scroll overflow-y-hidden gap-4 snap-center snap-mandatory h-[50vh]">
        <TestimonialData
          content="But I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete."
          name="Raj Singh"
          position="Marketing Director"
        />

        <TestimonialData
          content="Astrix's campaign hit our target market right on the mark. In just a month of launching our campaign with them, we acquired 500+ customers spanning various cities and demographics. An excellent job!"
          name="Vijay Shekhar Shukla"
          position="Director, qbi institute"
        />
        <TestimonialData
          content="Astrix's approach was simply spectacular. They understand the nuances of the luxury market and tailored a campaign that aligned perfectly with our brand identity. In a short period, we witnessed a significant boost in our online presence and, most importantly, an increase in sales. Astrix is now our go-to agency for marketing solutions."
          name="Ayush Sharma"
          position="md, sharma optical and watches, gr noida"
        />
        <TestimonialData
          content="Astrix's quick response to our problem statement translated into an impressive online presence within just three days. Their focus on driving engagement for our ongoing campaigns. Thanks for the swift and effective support!"
          name="Ayush Gupta"
          position="coo, vaeral"
        />
      </div>
    </div>
  );
}

const TestimonialData = ({
  content,
  name,

  position,
}: {
  content: string;
  name: string;

  position: string;
}) => {
  return (
    <div className="fc text-white text-xl font-Roboto min-w-full lg:min-w-[47vw] p-4 h-[47vh] fss fc snap-start glass  ">
      <div className="md:text-md text-sm leading-relaxed min-h-[40%] ">
        {'"'}
        {content}
        {'"'}
      </div>
      seperator
      <div className="w-full">
        <Image
          src={"/svgs/testimonialSeperator.svg"}
          width={20}
          height={8}
          alt="just a seperator"
          className="w-full h-12 object-fit"
        />
      </div>
      <div className="relative fsc fr w-full">
        <div className="p-4 px-4">
          <div className="w-32 h-32 bg-stone-500 rounded-full" />
        </div>
        <div className="fr justify-between w-[60%]">
          <div className="text-lg font-medium font-Roboto uppercase leading-[28.80px]">
            <div>{name}</div>
            <div className="text-pe ">{position}</div>
          </div>
          <Image
            className="w-20"
            src="/svgs/testimonial.svg"
            width={30}
            height={30}
            alt="test"
          />
        </div>
      </div>
    </div>
  );
};
