import React from "react";
import { LucideIcon } from "lucide-react";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="bg-[#150C0C] border border-[#FFFFFF26] rounded-3xl p-6 md:p-8 hover:border-[#FF0A0A4D] transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,10,10,0.2)]">
      {/* Icon Wrapper */}
      <div className="bg-[#FF0A0A1A] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#FF0A0A9E]" />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl md:text-2xl font-semibold mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-white md:text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
