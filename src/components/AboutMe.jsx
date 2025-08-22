import React from "react";

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between shadow-lg py-36">
      {/* Foto Profil */}
      <div className="">
        <img
          src="src/assets/people01.png"
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-600 shadow-lg"
        />
      </div>

      {/* Info */}
      <div className="max-w-2xl text-left">
        {/* Badge */}
        <span className="inline-block bg-purple-900/40 text-purple-300 text-sm px-5 py-2 rounded-full mb-4">
          Tentang Saya
        </span>

        {/* Nama */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Hadi Budi Hardoyo
        </h2>

        {/* Deskripsi */}
        <ul className="text-gray-300 space-y-3 leading-relaxed">
          <li>
            👋 Halo, nama saya Hadi Budi Hardoyo, tapi bisa
            panggil saya Hadi saja. Salam Kenal!
          </li>
          <li>
            💻 Lebih dari 1 tahun pengalaman dalam mengembangkan dan
            memprogram antarmuka dengan JavaScript dan React JS.
          </li>
          <li>
            🎓 Lulusan Sarjana Teknik Informatika
          </li>
          <li>
            🚀 Tertarik pada pengembangan Front-end dengan React, React Native,
            Vue.js, serta desain UI/UX.
          </li>
          <li>
            ✨ Selalu berusaha menjadi sedikit lebih baik dari hari sebelumnya.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
