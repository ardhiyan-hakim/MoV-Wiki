import React from "react";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";

function DetailMovie({
  title,
  rating,
  image,
  genre,
  actor,
  director,
  sinopsis,
}) {
  return (
    <>
      <div className="wrapper">
        <div className="content-header">
          <div className="content-header-image">
            <Image src={image} alt="" className="images" />
          </div>
          <div className="content-header-title">
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text className="text-center">
              Rating : {rating} <AiFillStar color="#F7B000" className="icon" />
            </Card.Text>
          </div>
        </div>
        <div className="content-body">
          <div className="content-body-genre">
            <Card.Title>Genre :</Card.Title> <p>{genre}</p>
          </div>
          <div className="content-body-actor">
            <Card.Title>Actor : </Card.Title>
            <p>{actor}</p>
          </div>
          <div className="content-body-director">
            <Card.Title>Director :</Card.Title> <p>{director}</p>
          </div>
          <div className="content-body-sinopsis">
            <Card.Title>Sinopsis :</Card.Title>
            <p>{sinopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailMovie;
