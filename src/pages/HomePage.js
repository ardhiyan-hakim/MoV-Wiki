import CarouselComponent from "../components/CarouselComponent";
import SummaryMovie from "../components/SummaryMovie";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function HomePage() {
  return (
    <>
      <NavbarComponent />
      <CarouselComponent />
      <SummaryMovie />
      <FooterComponent />
    </>
  );
}

export default HomePage;
