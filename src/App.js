import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import Movie_1 from "./pages/Movie_1";
import Movie_2 from "./pages/Movie_2";
import Movie_3 from "./pages/Movie_3";
import Movie_4 from "./pages/Movie_4";
import Movie_5 from "./pages/Movie_5";
import Movie_6 from "./pages/Movie_6";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/movie/1" element={<Movie_1 />} />
          <Route path="/movie/2" element={<Movie_2 />} />
          <Route path="/movie/3" element={<Movie_3 />} />
          <Route path="/movie/4" element={<Movie_4 />} />
          <Route path="/movie/5" element={<Movie_5 />} />
          <Route path="/movie/6" element={<Movie_6 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
