import React from "react";
import Image from "next/image";
import { Inria_Sans } from "next/font/google";

const InriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: "400",
});

const EVChargingSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* GIF Background */}
      <div className="absolute inset-0">
        <Image
          src="/bg-img/homepage/video.gif"
          alt="Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side - Phone mockup (handled by background gif) */}
        <div className="hidden lg:block lg:col-span-6" />

        {/* Right side - Content */}
        <div className="space-y-10 lg:col-span-6 lg:pl-12 xl:pl-20">
          <div>
            <h2 className="text-6xl md:text-7xl font-bold text-black mb-4">
              EV Charging
            </h2>
            <p
              className={`${InriaSans.className} text-4xl md:text-5xl text-[#FF5722]`}
            >
              In 3 Simple Steps
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF0606] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg font-bold">1</span>
              </div>
              <p className="text-xl font-semibold text-black">
                <span className="font-bold">Discover</span> Charging Stations
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF0606] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg font-bold">2</span>
              </div>
              <p className="text-xl font-semibold text-black">
                <span className="font-bold">Charge</span> seamlessly
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FF0606] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg font-bold">3</span>
              </div>
              <p className="text-xl font-semibold text-black">
                <span className="font-bold">Pay</span> conveniently
              </p>
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="space-y-2">
            <div className="flex flex-wrap">
              <a
                href="#"
                className="transition-transform hover:scale-105"
                aria-label="Download on Google Play"
              >
                <Image
                  src="/bg-img/homepage/icons/PlayStore2.png"
                  alt="Get it on Google Play"
                  width={220}
                  height={48}
                />
              </a>
              <a
                href="#"
                className="transition-transform hover:scale-105"
                aria-label="Download on App Store"
              >
                <Image
                  src="/bg-img/homepage/icons/AppStore2.png"
                  alt="Download on the App Store"
                  width={220}
                  height={48}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVChargingSection;
