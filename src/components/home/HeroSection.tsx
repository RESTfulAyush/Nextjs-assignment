"use client";

import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="h-[100vh] flex flex-col items-center justify-center text-center bg-[url('/bg-img/homepage/hero-img.png')] bg-cover bg-center overflow-hidden">
      <div className="relative z-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold font-inter leading-tight bg-gradient-to-r from-[#FCDFDF] to-[#8C0303] bg-clip-text text-transparent">
          Building the Largest network <br /> of EV charges in India
        </h1>

        <p className="leading-8 mt-4 text-white inline-flex gap-4 text-base sm:text-lg md:text-xl">
          <span>Discover</span>
          <span>|</span>
          <span>Charge</span>
          <span>|</span>
          <span>Pay</span>
        </p>

        <div className="leading-8 text-white text-lg sm:text-xl md:text-2xl font-extrabold font-inter mt-4">
          DOWNLOAD THE APP NOW
        </div>

        <div className="mt-6 flex flex-wrap gap-4 justify-center items-center">
          <Link href="/">
            <Image
              src="/bg-img/homepage/AppStore.png"
              alt="Download on App Store"
              width={156}
              height={100}
              className="object-cover object-center rounded-[50px]"
              priority
            />
          </Link>

          <span className="text-white text-2xl font-bold hidden sm:inline">
            |
          </span>

          <Link href="/">
            <Image
              src="/bg-img/homepage/PlayStore.png"
              alt="Get it on Google Play"
              width={156}
              height={100}
              className="object-cover object-center rounded-[50px]"
              priority
            />
          </Link>
        </div>
      </div>

      {/* 👇 Responsive bottom-left image */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-10 md:left-20">
        <Image
          src="/bg-img/homepage/charge.png"
          alt="EV charger"
          width={180}
          height={300}
          className="w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] h-auto rounded-xl shadow-2xl"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
