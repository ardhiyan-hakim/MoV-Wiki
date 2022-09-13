import React from "react";
import { Row, Col, Card, Image, Button } from "react-bootstrap";
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
    {title: 'Miracle in Cell 07', Rating: 4.9, image:Miracle },
    {title: 'Mumun', Rating: 4.8, image:Mumun },
    {title: 'Uncharted', Rating: 4.7, image:Uncharted },
    {title: 'Onepiece', Rating: 4.6, image:Onepiece},
    {title: 'Pinocchio', Rating: 4.5, image:Pinocchio},
    {title: 'Topgun', Rating: 4.4 ,image:Topgun},
  ]
  return (
    <div>
      <h1>Trending Movies</h1>
      <br />
      <Row className="card-movie">
      {data.map((item, index)=>{
        return(
          <Col md={3} className="movieWrapper"
          key={index} >
          <Card className="movieImage">
            <Image src={item.image} alt="Miracle in Cell 07" className="images" />
            <div className="card-content">
              <div className="p-2 m-1">
                <Card.Title className="text-center">
                  {item.title}
                </Card.Title>
                <Card.Text className="text-center">
                  Rating : {item.Rating} <AiFillStar color="yellow" className="icon" />
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("./1");
                  }}
                >
                  Detail
                </Button>
              </div>
            </div>
          </Card>
        </Col>
        )}
        )}
      </Row>
    </div>
  );
}

export default CardMovie;
