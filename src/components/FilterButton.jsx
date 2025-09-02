import React from "react";

const FilterButton = ({ icon: Icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm border transition 
        ${active
          ? "bg-purple-900/40 text-purple-300 border-purple-600"
          : "border-purple-600 text-purple-400 hover:bg-purple-900/20"
        }`}
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
};

export default FilterButton;
