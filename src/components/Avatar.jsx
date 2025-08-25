import React from "react";
import avatar from "../assets/avatar.svg";

const Avatar = () => {
  return (
    <div className="flex justify-center">
      {/* Avatar */}
      <div className="w-48 h-48 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img
          src={avatar}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Avatar;
