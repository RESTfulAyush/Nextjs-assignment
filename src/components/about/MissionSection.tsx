import StatCard from "@/components/about/shared/StatsCard";
import Image from "next/image";

const MissionSection = () => {
  const stats = [
    {
      value: "500+",
      label: "Charging Points",
      color: "#FF0A0A9E",
    },
    { value: "100+", label: "Cities", color: "#FF0A0A9E" },
    { value: "1lac+", label: "Users", color: "#FF0A0A9E" },
    {
      value: "50M+",
      label: "kWh Delivered",
      color: "#FF0A0A9E",
    },
  ];

  return (
    <section className="min-h-screen bg-[#150C0C] text-white py-16 px-6 md:px-12 lg:px-20 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        {/* Header - Only "Our Mission" */}
        <div className="mb-8 lg:mb-12">
          <h3 className="text-[#FF0A0AC9] text-sm md:text-base font-medium tracking-wider uppercase">
            Our Mission
          </h3>
        </div>

        {/* Content Grid - 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column - Title, Description and Stats */}
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-extrabold leading-tight">
              Making Electric Mobility Accessible
              <br />
              to Everyone
            </h1>

            <p className="text-[#FFFFFFC9] text-xl md:text-lg leading-relaxed">
              Founded in 2020, EV Power has Grown from a single charging station
              to over 10,000 charging points across the country. Our mission is
              to make EV charging as convenient as fueling a conventional
              vehicle.
            </p>

            {/* Stats Grid - Using StatCard Component */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  gradient={stat.color}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative group">
            <div className="relative rounded-4xl overflow-hidden">
              <img src="bg-img/aboutpage/charger.png" alt="EV Charging Port" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
