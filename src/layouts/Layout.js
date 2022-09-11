// import Container from "react-bootstrap/Container";
import FooterComponent from "./FooterComponent";
import NavMov from "./NavbarComponent";

function Layout(props) {
  return (
    <>
      <NavMov />
      <main>
        {props.children}
      </main>
      <FooterComponent />
    </>
  );
}

export default Layout;
