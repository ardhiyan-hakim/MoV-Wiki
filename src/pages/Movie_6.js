import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Movie_6({ movies, isLogin }) {
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
        key={movies[5].id}
        title={movies[5].title}
        image={movies[5].image}
        rating={movies[5].rating}
        genre={movies[5].genre}
        actor={movies[5].actor}
        director={movies[5].director}
        sinopsis={movies[5].sinopsis}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_6;
