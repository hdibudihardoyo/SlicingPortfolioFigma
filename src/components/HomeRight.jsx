import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const HomeRight = () => {
  return (
    <div className="home-right w-full md:w-1/3 text-center md:text-right">
      <div className="flex flex-col items-center md:items-end gap-4 mt-6 text-blue-500 text-sm">
        <a
          href="src/assets/cv ats hdibudihardoyo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 transition duration-300 hover:border-white active:scale-95 transform"
        >
          Resume CV <FiDownload />
        </a>

        <a
          href="src/assets/cv ats hdibudihardoyo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-7 py-3 rounded-full border border-purple-500"
        >
          <FaWhatsapp /> Hubungi Saya
        </a>
      </div>
    </div>
  );
};

export default HomeRight;
