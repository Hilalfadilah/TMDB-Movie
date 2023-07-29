import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { useDispatch } from "react-redux";
import { reduxAction } from "../utils/redux/actions/action";
import Skeletoncard from "../components/skeleton/Skeletoncard";
import { lazy, Suspense } from "react";
import Swal from "sweetalert2";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const dispatch = useDispatch();
  const Card = lazy(() => import("../components/Card"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=a2127362ead2634e824bdf7cd0478223"
      )
      .then((response) => {
        const { results } = response.data;
        if (results) {
          setPopular(results);
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
      <div className="pt-28 ml-2">
        <h1 className="text-4xl font-bold text-slate-200">Popular</h1>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 place-items-center">
        {popular.map((popular) => (
          <Suspense key={popular.id} fallback={<Skeletoncard />}>
            <Card
              key={popular.id}
              image={popular.poster_path}
              id={popular.id}
              title={popular.title}
              rating={popular.vote_average}
              vote={popular.vote_count}
              onClick={() => handleFav(popular)}
            />
          </Suspense>
        ))}
      </div>
    </Layout>
  );
};

export default Popular;
