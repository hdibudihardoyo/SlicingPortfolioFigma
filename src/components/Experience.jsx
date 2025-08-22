import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceCards, experienceBar } from "../constants/index.js";

const Experience = () => {
  return (
    <section id="experience" className="mt-5 shadow-lg">
          <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-5xl">
        {/* Pengantar */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-center mb-4">Pengalaman Saya</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            Saya telah bekerja sebagai pengembang dan desainer selama beberapa tahun,
            dengan pengalaman yang luas dalam berbagai proyek. Berikut ini adalah
            beberapa sorotan dari perjalanan profesional saya.
          </p>
        </div>

        {/* Cards dari data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6 text-center">
          {experienceCards.map((card, i) => (
            <ExperienceCard
              key={i}
              icon={card.icon}
              subtitle={card.subtitle}
              title={card.title}
            />
          ))}
        </div>

        {/* Bar bawah dari data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-purple-900/30 rounded-xl px-8 py-6 text-center">
          {experienceBar.map((item, i) => (
            <p key={i} className="text-purple-400 font-semibold">
              {item.text} <br />
              <span className="text-white">
                {item.highlight}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>

  );
};

export default Experience;
