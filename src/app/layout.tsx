// import TwScreenInfo from "@/components/custom/TwScreenInfo";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astrix - Digital Marketing and IT Solutions",
  description:
    "Leading provider of digital marketing, web development, and IT solutions for businesses. Unlock growth with Astrix.",
  keywords: [
    "Digital Marketing Services",
    "IT Solutions",
    "Web Design and Development",
    "Mobile App Development",
    "Product Launch Services",
    "Branding and Design",
    "SEO Services",
    "Social Media Marketing",
    "E-commerce Solutions",
    "Business Growth Strategies",
    "Online Advertising",
    "Content Marketing",
    "Marketing Analytics",
    "Lead Generation",
    "Conversion Optimization",
  ],
  openGraph: {
    type: "website",
    url: "https://astrix.co.in",
    title: "Astrix - Digital Marketing and IT Solutions",
    description:
      "Leading provider of digital marketing, web development, and IT solutions for businesses. Unlock growth with Astrix.",
    images: [
      {
        url: "https://astrix.co.in/logo.png",
        alt: "Astrix - Digital Marketing and IT Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-background`}
      >
        {children}
        {/* <TwScreenInfo /> */}
      </body>
    </html>
  );
}