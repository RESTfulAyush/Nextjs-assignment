import { Zap, Battery, Clock } from "lucide-react";

export default function ChargingSpeed() {
  const chargingOptions = [
    {
      id: 1,
      icon: Zap,
      title: "Ultra-Fast DC",
      power: "180-340 kW",
      description:
        "Perfect for long-distance travel. Get up to 300Km range in just 15 minutes.",
    },
    {
      id: 2,
      icon: Battery,
      title: "Fast DC",
      power: "30-120 kW",
      description: "Ideal for quick top-ups during shopping or dining.",
    },
    {
      id: 3,
      icon: Clock,
      title: "AC Charging",
      power: "3.3-22 kW",
      description: "Best for overnight charging at home or office.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#03081D] text-white px-6 py-16 flex items-center">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#E96F6F] text-base font-medium mb-4 tracking-wide">
            Charging Solution
          </p>
          <h1 className="text-4xl font-semibold mb-6">
            Choose Your Charging Speed
          </h1>
          <p className="text-[#FFFFFF] text-xl max-w-3xl mx-auto">
            From rapid DC charging to overnight AC charging, we've got all your
            charging needs covered.
          </p>
        </div>

        {/* Charging Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {chargingOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <div
                key={option.id}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-300"
              >
                <div className="bg-red-900/30 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <div className="mb-4">
                  <span className="text-[#F70E0E] text-2xl font-semibold">
                    {option.power}
                  </span>
                  <span className="text-[#FFFFFF] ml-2 text-semibold">
                    charging speed
                  </span>
                </div>
                <p className="text-[#FFFFFF] text-semibold">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
