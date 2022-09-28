import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Movie from "./pages/Movie";
import DetailMovies from "./pages/DetailMovies";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./utils/data";

function App() {
  const [user] = useState(data.user);
  const [movies] = useState(data.movies);
  const { access_token } = useSelector((state) => state);

  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false);

  const api = axios.create({
    baseURL: "https://kawahedukasibackend.herokuapp.com",
    timeout: 5000,
    headers: {
      access_token,
    },
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage isLogin={isLogin} setIsLogin={setIsLogin} />}
        />

        <Route
          path="/login"
          element={
            <LandingPage
              users={user}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              api={api}
            />
          }
        />

        <Route
          path="/about"
          element={<About isLogin={isLogin} setIsLogin={setIsLogin} />}
        />

        <Route
          path="/movie"
          element={
            <Movie movies={movies} isLogin={isLogin} setIsLogin={setIsLogin} />
          }
        />

        <Route
          path="/movie/:id"
          element={
            <DetailMovies
              movies={movies}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
