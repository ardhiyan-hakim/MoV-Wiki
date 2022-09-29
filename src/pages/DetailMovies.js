import React from "react";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";
import DetailMovie from "../components/DetailMovie";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function findMovie(movies, id) {
  return movies.filter((movie) => movie.id === id);
}

function Movie_1({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state);

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
        movie={movie}
      />

      <FooterComponent />
    </>
  );
}

export default Movie_1;
