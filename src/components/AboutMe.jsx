import React from "react";

const AboutMe = () => {
  return (
    <section className="shadow-sm shadow-slate-600 px-20 py-20">
      {/* Konten */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* Foto Profil */}
        <div>
          <img
            src="src/assets/people02.png"
            alt="Profile"
            className="w-80 h-80 rounded-full object-cover border-4 border-purple-600 shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="">
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
            <li>
              👋 Halo, nama saya Hadi Budi Hardoyo, tapi bisa panggil saya Hadi saja. Salam Kenal!
            </li>
            <li>
              🎓 Lulusan Sarjana Teknik Informatika <br />
              💻 Lebih dari 1 tahun pengalaman dalam mengembangkan dan memprogram antarmuka dengan JavaScript dan React JS. <br />
              🚀 Tertarik pada pengembangan Front-end dengan React, React Native, Vue.js, serta desain UI/UX. <br />
            </li>
            <li>
              🌐 Saya suka menjelajahi teknologi baru dan terus belajar untuk meningkatkan keterampilan saya.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
