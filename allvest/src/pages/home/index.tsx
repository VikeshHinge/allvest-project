import React from "react";
import Header from "../../assets/images/header.jpeg";

const Home = () => {
  return (
    <section className="h-screen relative flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{
          backgroundImage: `url('https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67caeae0778752ffb12a1c69_graphic-background-min-p-1600.jpeg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />
    </section>
  );
};

export default Home;
