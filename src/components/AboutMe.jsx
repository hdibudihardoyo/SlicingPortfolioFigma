import React from "react";
import ProfilePic from "../assets/ProfilePic.png";

const AboutMe = () => {
  return (
    <section className="px-6 md:px-28 py-20">
      {/* Konten */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* Foto Profil */}
        <div>
          <img
            src={ProfilePic} 
            alt="Foto Profil Hadi Budi Hardoyo"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-purple-600 shadow-lg"
          />
        </div>

        {/* Info */}
        <div>
          {/* Badge */}
          <span className="inline-block bg-purple-900/40 text-blue-500 font-bold text-sm px-5 py-3 rounded-full mb-4">
            Tentang Saya
          </span>
          {/* Nama */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Hadi Budi Hardoyo
          </h2>
          {/* Deskripsi */}
          <ul className="text-gray-300 space-y-3 leading-relaxed">
            <li>👋 Halo, saya Hadi. Senang berkenalan denganmu!</li>
            <li>🎓 Lulusan Sarjana Teknik Informatika. <br />
                💻 Memiliki pengalaman lebih dari 1 tahun dalam mengembangkan
                    antarmuka dengan JavaScript dan React JS. <br />
                🚀 Tertarik pada pengembangan Front-end (React, React Native,
                    Vue.js) serta desain UI/UX.
            </li>
            <li>
              🌐 Suka menjelajahi teknologi baru dan terus belajar untuk
              meningkatkan keterampilan.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
