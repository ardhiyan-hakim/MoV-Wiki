import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/layouts/NavbarStyled.css";
import { useNavigate } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

function NavbarComponent() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="navlogo" onClick={() => navigate("/")}>
          MoV
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
            <Nav.Link onClick={() => navigate("/movie")}>Movie</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control className="me-2" aria-label="Search" placeholder="Search"/>
            <Button>
              <BsSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
