import CarouselComponent from "../components/CarouselComponent";
import SummaryMovie from "../components/SummaryMovie";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ isLogin, setIsLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  });

  return (
    <>
      <NavbarComponent setIsLogin={setIsLogin} />
      <CarouselComponent />
      <SummaryMovie />
      <FooterComponent />
    </>
  );
}

export default HomePage;
