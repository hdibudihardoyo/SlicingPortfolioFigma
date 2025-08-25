import React, { useState } from "react";
import { projects, filters } from "../constants";
import ProjectCard from "./ProjectCard";
import FilterButton from "./FilterButton";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter project berdasarkan kategori
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="px-6 md:px-28 py-20">
      {/* Header */}
      <span className="inline-block bg-purple-900/40 text-blue-500 font-bold text-sm px-5 py-3 rounded-full mb-4">
        Portfolio
      </span>

      <div className="mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Works and Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {filters.map((f) => (
              <FilterButton
                key={f.value}
                icon={f.icon}
                label={f.label}
                active={activeFilter === f.value}
                onClick={() => setActiveFilter(f.value)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid Project */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
