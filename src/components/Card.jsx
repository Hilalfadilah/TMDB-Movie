import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { WithRouter } from "../utils/Navigation";

const Card = (props) => {
  const { id, image, title, rating, onClick, vote } = props;

  return (
    <>
      <div key={id} className="card card-compact">
        <Link to={`/Detail/${id}`}>
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w500/${image}`}
              alt="Movie"
              title={title}
              id={id}
              className="w-60 pt-10"
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="text-sm text-center text-slate-200 font-medium">
            {title}
          </h2>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ml-2 text-sm font-bold text-slate-200">{rating}</p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-slate-200 underline hover:no-underline"
            >
              {vote} reviews
            </a>
          </div>
          <div className="card-actions justify-center mt-10">
            <Button Label="Add Favorite" onClick={onClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default WithRouter(Card);
