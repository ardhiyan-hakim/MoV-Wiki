import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Movie_3({movies, isLogin}) {
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
        key={movies[2].id}
        title={movies[2].title}
        image={movies[2].image}
        rating={movies[2].rating}
        genre={movies[2].genre}
        actor={movies[2].actor}
        director={movies[2].director}
        sinopsis={movies[2].sinopsis}
      />
      <FooterComponent />
    </>
  );
}

export default Movie_3;
