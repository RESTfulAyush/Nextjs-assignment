import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "400",
});

const StatsSection = () => (
  <section className="bg-[#03081D] min-h-screen px-6 pt-16 md:pt-24">
    <div className="max-w-7xl w-full mx-auto">
      <div className="max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF0606] to-[#FFF6F6]">
            The Electric
          </span>{" "}
          <span className="text-white">Revolution</span>
          <br />
          <span className="text-white">in Numbers</span>
        </h2>

        <p
          className={`${instrumentSans.className} mt-6 text-gray-400 text-lg leading-relaxed`}
        >
          Through our range of products, we're raising the bar of the EV
          charging ecosystem in India, improving accessibility to the future of
          mobility!
        </p>
      </div>
    </div>
  </section>
);

export default StatsSection;
