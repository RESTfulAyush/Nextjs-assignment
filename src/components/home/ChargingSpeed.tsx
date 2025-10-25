const speeds = [
  {
    title: "Ultra-Fast DC",
    range: "180–340 kW",
    desc: "Perfect for long-distance travel.",
  },
  { title: "Fast DC", range: "30–120 kW", desc: "Ideal for quick top-ups." },
  {
    title: "AC Charging",
    range: "3.3–22 kW",
    desc: "Best for overnight charging.",
  },
];

const ChargingSpeed = () => (
  <section className="bg-[#0E1322] py-20 text-center">
    <h2 className="text-3xl font-semibold mb-10">Choose Your Charging Speed</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
      {speeds.map((s) => (
        <div
          key={s.title}
          className="bg-black/60 p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition"
        >
          <h3 className="text-xl font-semibold text-orange-500">{s.title}</h3>
          <p className="mt-2 text-gray-300">{s.range}</p>
          <p className="mt-3 text-gray-400">{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ChargingSpeed;
