import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

function Movie_3({movies}) {
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
