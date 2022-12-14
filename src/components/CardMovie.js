import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";

import "../styles/CardMovie.css";

import { useNavigate } from "react-router-dom";
import ModalsComponent from "./Modals";
import { useSelector } from "react-redux";

function CardMovie() {
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state);
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
        <ModalsComponent
          show={show}
          handleClose={handleClose}
          method={"post"}
        />

        <Row className="card-movie">
          {movies.map((item, index) => {
            return (
              <Col md={3} className="movieWrapper" key={index}>
                <Card className="movieImage">
                  <Image src={item.image} alt={item.name} className="images" />
                  <div className="card-content">
                    <div className="p-2 m-1">
                      <Card.Title className="text-center">
                        {item.name}
                      </Card.Title>
                      <Card.Text className="text-center">
                        Rating : {item.description1}
                        <AiFillStar color="yellow" className="icon" />
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate(`./${item.id}`);
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
