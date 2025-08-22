import React from "react";

const ExperienceCard = ({ icon: Icon, subtitle, title }) => {
  return (
    <div className="border border-purple-600/40 rounded-2xl p-8 flex flex-col items-center hover:bg-purple-600/10 transition">
      <Icon className="w-10 h-10 text-purple-400 mb-4" />
      <p className="text-gray-400">
        {subtitle}
      </p>
      
      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>
    </div>
  );
};

export default ExperienceCard;
