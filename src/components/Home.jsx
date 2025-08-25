import React from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import Avatar from "./Avatar";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center px-6 md:px-20 py-20 shadow-sm shadow-purple-600/40"
    >
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Home Left */}
        <HomeLeft />

        {/* Avatar */}
        <Avatar />

        {/* Home Right */}
        <HomeRight />
      </div>
    </section>
  );
};

export default Home;
