import Image from "next/image";
import { Mail } from "lucide-react";
import { Inria_Sans } from "next/font/google";

const InriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: "400",
});

export default function RoutePlanner() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-img/homepage/RoutePlannerbg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 pt-8">
            <div className="space-y-3">
              <p className={`${InriaSans.className} text-2xl text-[#FFFFFF] `}>
                Effortless electric adventure await
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                <span className="text-semibold bg-gradient-to-r from-[#FF0707] to-[#FFF9F9] bg-clip-text text-transparent">
                  Route Planner
                </span>
              </h1>

              <p className="text-[#FFFFFF] text-medium text-xl max-w-xl leading-relaxed pt-2">
                Plan your journey with Dabas EV ! Experience effortless
                navigation tailored to EV owner's needs.
              </p>
            </div>
          </div>

          {/* Right Content - Phone/Video Mockup */}
          <div className="flex justify-center lg:justify-end items-start pt-8">
            <div className="relative w-[230px]">
              <Image
                src="/bg-img/homepage/video2.gif"
                alt="Route Planner App Interface"
                width={230}
                height={500}
                className="drop-shadow-2xl w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 lg:mt-24 text-center space-y-5 pb-12">
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-[#FF0707] to-[#FFF9F9] bg-clip-text text-transparent">
              Stay Tuned
            </span>
          </h2>

          <p className="text-gray-300 text-base lg:text-lg">
            Subscribe to our newsletter and stay updated on EV news!
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto items-center justify-center pt-4">
            <div className="relative w-full sm:flex-1 max-w-xl">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail className="w-6 h-6" />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-2 border-gray-600 rounded-full px-16 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 hover:bg-red-600 text-white font-semibold px-12 py-4 rounded-full border-2 border-gray-700 hover:border-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6),0_0_40px_rgba(239,68,68,0.4)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
