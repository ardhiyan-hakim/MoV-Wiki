import CardMovie from "../components/CardMovie";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function Movie({ movies }) {
  const check = localStorage.getItem("isLogin");
  console.log(check);
  
  return (
    <>
      <NavbarComponent />
      <div className="cardMovie">
        <CardMovie movies={movies} />
      </div>
      <FooterComponent />
    </>
  );
}

export default Movie;
