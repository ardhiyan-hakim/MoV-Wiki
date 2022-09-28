import CardMovie from "../components/CardMovie";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import createInstance from "../bootstrap/api";

function Movie({ movies, setMovies, isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const api = createInstance(15000);

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  return (
    <>
      <NavbarComponent setIsLogin={setIsLogin} />
      <div className="cardMovie">
        <CardMovie movies={movies} setMovies={setMovies} />
      </div>
      <button
        onClick={() => {
          api
            .get("/content/data/mukti")
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        }}
      >
        INI TOMBOL
      </button>
      <FooterComponent />
    </>
  );
}

export default Movie;
