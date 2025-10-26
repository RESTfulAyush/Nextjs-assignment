import React from "react";

const TeamMemberCard = ({ name, role, image }: any) => {
  return (
    <div className="max-w-sm rounded-4xl shadow-lg overflow-hidden">
      <img className="w-full h-100 object-cover" src={image} alt={name} />
      <div className="p-1 text-center" style={{ backgroundColor: "#8B3D3D" }}>
        <h5 className="text-2xl font-bold text-[#FFFBFB] mb-1">{name}</h5>
        <p className="text-[#FFFBFB] text-opacity-90">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
