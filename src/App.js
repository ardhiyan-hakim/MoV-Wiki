import "./App.css";
import data from "./utils/data";

import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Movie from "./pages/Movie";
import Test from "./pages/Test";
import DetailMovies from "./pages/DetailMovies";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./bootstrap/reducer";

function App() {
  const [movies, setMovies] = useState(data.movies);
  const [user] = useState(data.user);

  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false);

  const store = createStore(reducer);
  return (
    <Provider store={store}>
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
            element={<About isLogin={isLogin} />}
          />

          <Route
            path="/movie"
            element={
              <Movie movies={movies} setMovies={setMovies} isLogin={isLogin} />
            }
          />

          <Route
            path="/movie/:id"
            element={<DetailMovies movies={movies} isLogin={isLogin} />}
          />

          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
