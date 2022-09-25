import CardMovie from "../components/CardMovie";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Movie({ movies, setMovies, isLogin, setIsLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }

    console.log(movies);
  });

  return (
    <>
      <NavbarComponent setIsLogin={setIsLogin} />
      <div className="cardMovie">
        <CardMovie movies={movies} setMovies={setMovies} />
      </div>
      <FooterComponent />
    </>
  );
}

export default Movie;
