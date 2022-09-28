import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function findMovie(movies, id) {
  return movies.filter((movie) => movie.id === id);
}

function Movie_1({ movies, isLogin, setIsLogin }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  const params = useParams();
  const { id } = params;
  const [movie] = findMovie(movies, Number(id));

  return (
    <>
      <NavbarComponent setIsLogin={setIsLogin} />

      <DetailMovie
        key={movie.id}
        title={movie.name}
        image={movie.image}
        rating={movie.description1}
        genre={movie.description3}
        actor={movie.description4}
        director={movie.description5}
        sinopsis={movie.description6}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_1;
