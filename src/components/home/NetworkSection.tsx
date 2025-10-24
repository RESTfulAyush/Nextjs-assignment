"use client";

import Image from "next/image";
import { Kite_One } from "next/font/google";
import { Instrument_Sans } from "next/font/google";

const kiteOne = Kite_One({
  weight: "400",
  subsets: ["latin"],
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "400",
});

const logos = [
  { src: "/bg-img/homepage/icons/yourStory.png", alt: "yourStory" },
  { src: "/bg-img/homepage/icons/time.png", alt: "TIME" },
  { src: "/bg-img/homepage/icons/TechCrunch.png", alt: "TechCrunch" },
  { src: "/bg-img/homepage/icons/wwf.png", alt: "WWF" },
];

const NetworkSection = () => (
  <section className="relative min-h-[90vh] flex flex-col justify-between items-center text-center bg-[#03091D] overflow-hidden">
    {/* ✅ Background City Image */}
    <div className="absolute bottom-30 left-0 w-full">
      <Image
        src="/bg-img/homepage/network.png"
        alt="City background"
        width={1800}
        height={600}
        className="w-full object-cover"
        priority
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#03091D] via-[#03091D]/70 to-transparent"></div>
    </div>

    {/* ✅ Top Text Content */}
    <div className="relative px-4 pt-40">
      <h2 className="text-[48px] font-light text-white mb-4 leading-snug">
        <span className={kiteOne.className}>Join our network of </span>
        <span className="font-extrabold text-white">7000+</span>
        <br />
        <span className="font-semibold bg-gradient-to-r from-[#FF0505] to-[#FFFBFB] text-transparent bg-clip-text">
          EV Charging station
        </span>
      </h2>
    </div>

    {/* ✅ Bottom Section - Featured Logos */}
    <div className="relative w-full text-center">
      {/* Section Label */}
      <p className={`${instrumentSans.className} text-white text-[24px]`}>
        AS FEATURED IN ...
      </p>

      {/* Brand List */}
      <div className="flex flex-wrap justify-around items-center gap-6 sm:gap-12 text-white my-8 mx-8">
        {logos.map((logo, idx) => (
          <div key={logo.alt} className="flex items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={0}
              className="object-contain"
            />
            <span>|</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NetworkSection;
