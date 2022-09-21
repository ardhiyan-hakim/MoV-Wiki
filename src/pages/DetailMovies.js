import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

import { useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";

function findMovie(movies,id){
  return movies.filter((movie)=> movie.id === id)
}

function Movie_1({ movies, isLogin }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  const params = useParams()
  const {id} = params;
  const [movie] = findMovie(movies,Number(id))
  
  return (
    <>
      <NavbarComponent />

      <DetailMovie
        key={movie.id}
        title={movie.title}
        image={movie.image}
        rating={movie.rating}
        genre={movie.genre}
        actor={movie.actor}
        director={movie.director}
        sinopsis={movie.sinopsis}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_1;
