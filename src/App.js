import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Movie from "./pages/Movie";
import DetailMovies from "./pages/DetailMovies";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import data from "./utils/data";
import reducer from "./bootstrap/reducer";
import Test from "./pages/Test";

function App() {
  const [user] = useState(data.user);
  const [movies] = useState(data.movies);

  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false);
  const store = createStore(reducer);

  return (
    <Provider store={store}>
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
            element={<About isLogin={isLogin} setIsLogin={setIsLogin} />}
          />

          <Route
            path="/movie"
            element={
              <Movie
                movies={movies}
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

          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
