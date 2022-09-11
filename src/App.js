import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import Movie1 from "./pages/Movie_1";
import Movie2 from "./pages/Movie_2";
import Movie3 from "./pages/Movie_3";
import Movie4 from "./pages/Movie_4";
import Movie5 from "./pages/Movie_5";
import Movie6 from "./pages/Movie_6";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/1" element={<Movie1 />} />
          <Route path="/movie/2" element={<Movie2 />} />
          <Route path="/movie/3" element={<Movie3 />} />
          <Route path="/movie/4" element={<Movie4 />} />
          <Route path="/movie/5" element={<Movie5 />} />
          <Route path="/movie/6" element={<Movie6 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
