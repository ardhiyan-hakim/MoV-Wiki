import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Miracle from "../assets/Miracle.jpg";
import Mumun from "../assets/Mumun.jpg";
import Uncharted from "../assets/Uncharted.jpg";
import Onepiece from "../assets/Onepiece.jpg";
import Pinocchio from "../assets/Pinocchio.jpg";
import Topgun from "../assets/Topgun.jpg";

import "../styles/CardMovie.css";

import { useNavigate } from "react-router-dom";

function CardMovie() {
  const navigate = useNavigate();
  const data = [
    { title: "Miracle in Cell 07", Rating: 4.9, image: Miracle, path: 1 },
    { title: "Mumun", Rating: 4.8, image: Mumun, path: 2 },
    { title: "Uncharted", Rating: 4.7, image: Uncharted, path: 3 },
    { title: "Onepiece", Rating: 4.6, image: Onepiece, path: 4 },
    { title: "Pinocchio", Rating: 4.5, image: Pinocchio, path: 5 },
    { title: "Topgun", Rating: 4.4, image: Topgun, path: 6 },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="movie-header">
        <h1>Trending Movies</h1>
        <button className="modals-trigger" onClick={handleShow}>
          <p>+</p>
        </button>
      </div>

      <div className="cardContainer">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Rating</Form.Label>
                <Form.Control placeholder="" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Image</Form.Label>
                <Form.Control placeholder="" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Genre</Form.Label>
                <Form.Control placeholder="" autoFocus />

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Label>Director</Form.Label>
                <Form.Control placeholder="" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Actor</Form.Label>
                <Form.Control placeholder="" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Row className="card-movie">
          {data.map((item, index) => {
            return (
              <Col md={3} className="movieWrapper" key={index}>
                <Card className="movieImage">
                  <Image
                    src={item.image}
                    alt="Miracle in Cell 07"
                    className="images"
                  />
                  <div className="card-content">
                    <div className="p-2 m-1">
                      <Card.Title className="text-center">
                        {item.title}
                      </Card.Title>
                      <Card.Text className="text-center">
                        Rating : {item.Rating}{" "}
                        <AiFillStar color="yellow" className="icon" />
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate(`./${item.path}`);
                        }}
                      >
                        Detail
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default CardMovie;
