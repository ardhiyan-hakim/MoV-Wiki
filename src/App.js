import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Movie from "./pages/Movie";
import Movie1 from "./pages/Movie_1";
import Movie2 from "./pages/Movie_2";
import Movie3 from "./pages/Movie_3";
import Movie4 from "./pages/Movie_4";
import Movie5 from "./pages/Movie_5";
import Movie6 from "./pages/Movie_6";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import data from "./utils/data";

function App() {
  const [movies, setMovies] = useState(data.movies);
  const [about] = useState(data.about);
  const [user] = useState(data.user);

  const isLoggedIn = JSON.parse(localStorage.getItem('isLogin'));
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage isLogin={isLogin} />} />
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
          element={<About about={about} isLogin={isLogin} />}
        />
        <Route
          path="/movie"
          element={<Movie movies={movies} setMovies={setMovies} />}
        />
        <Route path="/movie/1" element={<Movie1 movies={movies} isLogin={isLogin} />} />
        <Route path="/movie/2" element={<Movie2 movies={movies} isLogin={isLogin} />} />
        <Route path="/movie/3" element={<Movie3 movies={movies} isLogin={isLogin} />} />
        <Route path="/movie/4" element={<Movie4 movies={movies} isLogin={isLogin} />} />
        <Route path="/movie/5" element={<Movie5 movies={movies} isLogin={isLogin} />} />
        <Route path="/movie/6" element={<Movie6 movies={movies} isLogin={isLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
