import "../App.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "../styles/layouts/FooterComponent.css";

import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";
import { GrMail } from "react-icons/gr";

function FooterComponent() {
  return (
    <div className="bg-dark text-light">
      <Container className="footer-container">
        <Row className="py-5 ">
          <Col className="col-6">
            <h1 className="mb-3">Mov-Wiki</h1>
            <p className="pe-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Col>
          <Col className="contact">
            <h1 className="mb-3">Contact</h1>
            <div className="contact__body">
              <p>
                <BsInstagram /> Instagram
              </p>
              <p>
                <AiFillFacebook /> Facebook
              </p>
              <p>
                <ImTwitter /> Twitter
              </p>
              <p>
                <GrMail /> Mail Us
              </p>
            </div>
          </Col>
          <Col>
            <h1 className="mb-3">Feedback</h1>
            <InputGroup className="mb-4">
              <Form.Control
                placeholder="Your Email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup>
              <Form.Control
                placeholder="Your Feedback"
                as="textarea"
                aria-label="With textarea"
              />
            </InputGroup>
            <Button className="mt-4 feedback" variant="secondary">
              Submit Feedback
            </Button>
          </Col>
        </Row>
      </Container>
      <Row className="bg-cpy py-4">
        <Col className="text-center  text-light ">
          CopyRight &copy; Mov-Wiki
        </Col>
      </Row>
    </div>
  );
}

export default FooterComponent;
