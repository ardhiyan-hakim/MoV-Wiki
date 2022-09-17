import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

function Movie_1({ movies }) {
  return (
    <>
      <NavbarComponent />

      <DetailMovie
        key={movies[0].id}
        title={movies[0].title}
        image={movies[0].image}
        rating={movies[0].rating}
        genre={movies[0].genre}
        actor={movies[0].actor}
        director={movies[0].director}
        sinopsis={movies[0].sinopsis}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_1;
