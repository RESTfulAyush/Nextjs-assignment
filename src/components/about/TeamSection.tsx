import TeamMemberCard from "@/components/about/shared/TeamMemberCard";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sharminder Dabas",
      role: "Founder & CEO",
      image: "/team/sharminder.jpg",
    },
    {
      name: "Jyoti",
      role: "Co-Founder & CFO",
      image: "/team/jyoti.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#150C0C] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-3">
            OUR TEAM
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Meet the Innovators
          </h1>
          <p className="text-[#FFFBFBC9] text-2xl sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts is united by a common goal to
            revolutionize the way India charges its electric vehicles.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="text-[#FFFBFB] max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals who want to make a
            difference in the world of sustainable transportation.
          </p>
          <button className="group relative inline-flex items-center justify-center px-4 py-2 text-2xl font-medium text-white bg-[#C54242E5] rounded-full shadow-lg transition-all duration-300 hover:scale-105">
            Contact Us
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
