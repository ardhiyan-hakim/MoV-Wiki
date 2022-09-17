import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

function Movie_2({movies}) {
  return (
    <>
      <NavbarComponent />

      <DetailMovie
        key={movies[1].id}
        title={movies[1].title}
        image={movies[1].image}
        rating={movies[1].rating}
        genre={movies[1].genre}
        actor={movies[1].actor}
        director={movies[1].director}
        sinopsis={movies[1].sinopsis}
      />
      <FooterComponent />
    </>
  );
}

export default Movie_2;
