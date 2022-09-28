import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Movie from "./pages/Movie";
import DetailMovies from "./pages/DetailMovies";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./bootstrap/reducer";

const store = createStore(reducer);

function App() {
  const isLoggedIn = JSON.parse(localStorage.getItem("isLogin"));
  const [isLogin, setIsLogin] = useState(isLoggedIn ? true : false);

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
            element={<LandingPage isLogin={isLogin} setIsLogin={setIsLogin} />}
          />

          <Route
            path="/about"
            element={<About isLogin={isLogin} setIsLogin={setIsLogin} />}
          />

          <Route
            path="/movie"
            element={<Movie isLogin={isLogin} setIsLogin={setIsLogin} />}
          />

          <Route
            path="/movie/:id"
            element={<DetailMovies isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
