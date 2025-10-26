import React from "react";

type StatCardProps = {
  value: string | number;
  label: string;
  gradient?: string; // optional with default value
};

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  gradient = "from-red-500 to-red-600",
}) => {
  return (
    <div className="relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

      {/* Card container */}
      <div className="relative bg-[#150C0C] border border-[#FFFFFF4F] rounded-3xl p-6 hover:border-red-500/50 transition-all duration-300 backdrop-blur-sm">
        <div
          className={`text-4xl md:text-5xl font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}
          style={{ color: "#FF0A0A9E" }}
        >
          {value}
        </div>
        <div className="text-zinc-400 text-sm md:text-base font-medium">
          {label}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
