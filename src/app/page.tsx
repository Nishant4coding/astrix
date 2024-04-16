import dynamic from "next/dynamic";
import { Suspense } from "react";
import Marquee from "react-fast-marquee";
const Nav = dynamic(() => import("@/components/Nav"));
const HeroSection = dynamic(() => import("@/components/sections/hero"));
const Footer = dynamic(() => import("@/components/Footer"));
const Brand = dynamic(() => import("@/components/sections/brand"));
const About = dynamic(() => import("@/components/sections/about"));
const Services = dynamic(() => import("@/components/sections/services"));
const Unlock = dynamic(() => import("@/components/sections/unlock"));
const Testimonial = dynamic(() => import("@/components/sections/testimonial"));
const Info = dynamic(() => import("@/components/sections/info"));

export const metadata = {
  icons: {
    icon: "/favicon.png",
  },
};

export default function Home() {
  return (
    <main className="pt-8 snap-proximity snap-y ">
      <Suspense>
        <Nav />
      </Suspense>
      <Suspense>
        <HeroSection />
      </Suspense>
      <Suspense>
        <Brand />
      </Suspense>
      <Suspense>
        <About />
      </Suspense>
      <div className="w-full border border-green h-[20vh] uppercase">
        <div className="w-full h-[40vh] bg-white -z-20 -translate-y-1/4 fcc ">
          <Marquee speed={150} pauseOnHover>
            <div className="text-5xl m-4 text-black ">creative</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">design</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">ui/ux</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">marketing</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">motion</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">animation</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
            <div className="text-5xl m-4 text-black ">branding</div>
            <div className="w-8 h-8 bg-pe m-4 rounded-full shadow-sm" />
          </Marquee>
        </div>
      </div>

      <Suspense>
        <Services />
      </Suspense>
      <Suspense>
        <Unlock />
      </Suspense>
      <Suspense>
        <Testimonial />
      </Suspense>
      <Suspense>
        <Info />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </main>
  );
}
