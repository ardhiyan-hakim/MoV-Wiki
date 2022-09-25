import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Movie from "./pages/Movie";
import DetailMovies from "./pages/DetailMovies";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import data from "./utils/data";

function App() {
  const [movies, setMovies] = useState(data.movies);
  const [about] = useState(data.about);
  const [user] = useState(data.user);

  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false);

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
            />
          }
        />
        <Route
          path="/about"
          element={
            <About about={about} isLogin={isLogin} setIsLogin={setIsLogin} />
          }
        />
        <Route
          path="/movie"
          element={
            <Movie
              movies={movies}
              setMovies={setMovies}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
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
