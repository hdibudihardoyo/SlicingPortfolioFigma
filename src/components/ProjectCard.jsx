import React from "react";

const ProjectCard = ({ title, description, tags, image, link }) => {
  return (
    <div className="bg-[#1a1a2e] border border-purple-900/40 rounded-2xl p-6 flex flex-col hover:shadow-lg hover:shadow-purple-600/30 hover:scale-105 transition-transform duration-300">
      {/* Judul & Deskripsi */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-lg text-sm bg-purple-900/40 text-purple-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Gambar */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Lihat detail project ${title}`}
        className="group"
      >
        <div className="relative overflow-hidden rounded-xl border border-purple-900/40">
          <img
            src={image}
            alt={`Preview project ${title}`}
            className="rounded-xl w-full object-cover transform group-hover:scale-110 transition duration-500"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
