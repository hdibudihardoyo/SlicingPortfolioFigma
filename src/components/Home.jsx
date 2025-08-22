import React from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import Avatar from "./Avatar";

const Home = () => {
  return (
    <section id="home" className="flex flex-col py-36 shadow-lg px-2">

      {/* Main Content */}
      <div className="flex flex-row items-center justify-between gap-12">

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
