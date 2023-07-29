import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="hero h-[350px]"
      style={{
        backgroundImage: "url(../../public/wallpaper.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Welcome.</h1>
          <p className="mb-5 text-4xl font-semibold">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
