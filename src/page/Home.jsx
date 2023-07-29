import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";
import { lazy, Suspense } from "react";

import axios from "axios";
import Layout from "../components/Layout";
import Skeletoncard from "../components/skeleton/Skeletoncard";
import Swal from "sweetalert2";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  const Card = lazy(() => import("../components/Card"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=a2127362ead2634e824bdf7cd0478223"
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          setMovie(results);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleFav = (movie) => {
    const getMovies = localStorage.getItem("favMovies");
    if (getMovies) {
      const parsedMovies = JSON.parse(getMovies);
      parsedMovies.push(movie);
      localStorage.setItem("favMovies", JSON.stringify(parsedMovies));
      dispatch(reduxAction("ADD_FAVORITE", parsedMovies));
      const Toast = Swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "success",
        title: "Success",
      });
    } else {
      localStorage.setItem("favMovies", JSON.stringify([movie]));
      dispatch(reduxAction("ADD_FAVORITE", [movie]));
    }
  };

  return (
    <Layout>
      <div className="mt-12">
        <Jumbotron />
      </div>
      <div className="mt-20 ml-2">
        <h1 className="text-4xl text-slate-200 font-bold">Now Playing</h1>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 place-items-center">
        {movie.map((movie) => (
          <Suspense key={movie.id} fallback={<Skeletoncard />}>
            <Card
              key={movie.id}
              image={movie.poster_path}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              vote={movie.vote_count}
              onClick={() => handleFav(movie)}
            />
          </Suspense>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
