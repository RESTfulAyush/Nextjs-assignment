import React from "react";
import ValueCard from "@/components/about/shared/ValueCard";
import { Leaf, Lightbulb, Users, LucideIcon } from "lucide-react";

type ValueCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const ValuesSection = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We're committed to reducing carbon emissions and building a cleaner future for generations to come.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously push the boundaries of technology to provide the best charging experience.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Our users are at the heart of everything we do. We're dedicated to exceeding their expectations.",
    },
  ];

  return (
    <section className="bg-[#0D120E] py-20">
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#FF0A0A] text-sm md:text-base font-medium tracking-wider uppercase mb-3">
            OUR VALUES
          </p>
          <h2 className="text-[#FFFBFB] text-3xl md:text-5xl font-bold mb-6">
            What Drives Us Forward
          </h2>
          <p className="text-[#FFFBFB] text-2xl max-w-3xl mx-auto">
            Our core values shape everything we do, from product development to
            customer service.
          </p>
        </div>
      </div>

      <div className="w-full px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
