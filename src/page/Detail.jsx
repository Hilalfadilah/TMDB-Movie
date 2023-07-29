import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  const fetchData = (id, callback) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a2127362ead2634e824bdf7cd0478223`
      )
      .then((response) => {
        callback(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(id, (data) => {
      setDetail(data);
    });
  }, [id]);

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${detail.backdrop_path}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-white">{detail.title}</h1>
            <h2 className="py-6 text-white text-3xl font-semibold">
              Release Date {detail.release_date}
            </h2>
            <p className="pt-2 text-white text-2xl font-semibold">Overview</p>
            <p className="py-5 text-white">{detail.overview}</p>
            <Button Label="Streaming Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
