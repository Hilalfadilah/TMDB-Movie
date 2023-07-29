import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import { WithRouter } from "../utils/Navigation";
import { useSelector } from "react-redux";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <Layout>
      <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
        {favorites ? (
          favorites.map((movie) => (
            <Card
              key={movie.id}
              image={movie.poster_path}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
            />
          ))
        ) : (
          <h1 className="text-2xl text-blue-700 text-center py-10">
            No Favorite Movies
          </h1>
        )}
      </div>
    </Layout>
  );
};

export default WithRouter(Favorite);
