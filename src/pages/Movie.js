import CardMovie from "../components/CardMovie";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function Movie({ movies }) {  
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
