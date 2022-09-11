import Container from "react-bootstrap/Container";
import FooterComponent from "./FooterComponent";

function Layout(props) {
  return (
    <>
      <main>
        <Container>{props.children}</Container>
      </main>
      <FooterComponent />
    </>
  );
}

export default Layout;
