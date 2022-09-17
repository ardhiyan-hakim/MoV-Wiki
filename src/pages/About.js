import Cardbio from "../components/CardBio";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function About({ about }) {
  return (
    <>
      <NavbarComponent />
      <Cardbio about={about} />
      <FooterComponent />
    </>
  );
}

export default About;
