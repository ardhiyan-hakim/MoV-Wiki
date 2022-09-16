import React from "react";
import Onepiece from "../assets/Onepiece.jpg";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";
import NavbarComponent from "../layouts/NavbarComponent";
import FooterComponent from "../layouts/FooterComponent";

function Movie_3() {
  return (
    <>
      <NavbarComponent />
      
      <div className="wrapper">
        <div className="content-header">
          <div className="content-header-image">
            <Image src={Onepiece} alt="" className="images" />
          </div>
          <div className="content-header-title">
            <Card.Title className="text-center">One Piece Film: Red</Card.Title>
            <Card.Text className="text-center">
              Rating : 4.7 <AiFillStar color="#F7B000" className="icon" />
            </Card.Text>
          </div>
        </div>
        <div className="content-body">
          <div className="content-body-genre">
            <Card.Title>Genre :</Card.Title> <p>Animation/Action/Adventure</p>
          </div>
          <div className="content-body-actor">
            <Card.Title>Actor : </Card.Title>
            <p>
              Shanks, Monkey D.Luffy, Nami, Roronoa Zoro, Usopp, Coby, Sanji,
              Nico Robin, Trafalgar Law, Ben Beckman, Jinbei , Charlotte Brulee
            </p>
          </div>
          <div className="content-body-director">
            <Card.Title>Director :</Card.Title> <p>Gorô Taniguchi</p>
          </div>
          <div className="content-body-sinopsis">
            <Card.Title>Sinopsis :</Card.Title>{" "}
            <p>
              Cerita diatur di "Pulau Musik" Elegia , di mana Uta , diva
              terbesar di dunia, mengadakan konser live pertamanya dan
              mengungkapkan dirinya kepada publik. Topi Jerami , bajak laut ,
              Marinir , dan penggemar dari seluruh dunia berkumpul untuk
              menikmati suara Uta, yang telah digambarkan sebagai "dunia lain".
              Namun, acara dimulai dengan pengungkapan mengejutkan bahwa Uta
              adalah putri Shanks .
            </p>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default Movie_3;
