import "../styles/Movie.css";
import CardMovie from "../components/CardMovie";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import createInstance from "../bootstrap/api";
import { setMovies } from "../bootstrap/action";

function Movie({ isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api = createInstance(15000);

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  useEffect(() => {
    api
      .get("/content/data/timUwU22")
      .then((res) => {
        dispatch(setMovies(res.data));
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <NavbarComponent setIsLogin={setIsLogin} />
      <div className="cardMovie">
        <CardMovie />
      </div>
      <FooterComponent />
    </>
  );
}

export default Movie;
