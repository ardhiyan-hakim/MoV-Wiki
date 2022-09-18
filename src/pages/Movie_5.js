import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Movie_5({ movies, isLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  return (
    <>
      <NavbarComponent />
      <DetailMovie
        key={movies[4].id}
        title={movies[4].title}
        image={movies[4].image}
        rating={movies[4].rating}
        genre={movies[4].genre}
        actor={movies[4].actor}
        director={movies[4].director}
        sinopsis={movies[4].sinopsis}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_5;
