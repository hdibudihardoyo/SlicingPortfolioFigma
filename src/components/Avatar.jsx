import React from 'react'
import avatar from "../assets/avatar.svg";

const Avatar = () => {
  return (
    <div>
      {/* Avatar */}
      <div className="w-[350px] h-[350px] rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img
        src={avatar}
        alt="Avatar"
        className="w-full h-full object-cover"
        />
     </div>
    </div>
  )
}

export default Avatar
