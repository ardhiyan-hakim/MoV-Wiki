import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Movie_4({ movies, isLogin }) {
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
        key={movies[3].id}
        title={movies[3].title}
        image={movies[3].image}
        rating={movies[3].rating}
        genre={movies[3].genre}
        actor={movies[3].actor}
        director={movies[3].director}
        sinopsis={movies[3].sinopsis}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_4;
