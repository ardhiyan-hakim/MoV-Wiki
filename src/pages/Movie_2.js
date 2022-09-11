import React from "react";
import Mumun from "../assets/Mumun.jpg";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";
function Movie_2() {
  return (
    <div className="wrapper">
      <div className="content-header">
        <div className="content-header-image">
          <Image src={Mumun} alt="" className="images" />
        </div>
        <div className="content-header-title">
          <Card.Title className="text-center">Mumun</Card.Title>
          <Card.Text className="text-center">
            Rating : 4.8 <AiFillStar color="#F7B000" className="icon" />
          </Card.Text>
        </div>
      </div>
      <div className="content-body">
        <div className="content-body-genre">
          <Card.Title>Genre :</Card.Title> <p>Horror/Komedi</p>
        </div>
        <div className="content-body-actor">
          <Card.Title>Actor : </Card.Title>{" "}
          <p>
            Acha Septriasa,Dimas Aditya,Volland Humonggio,H. Mandra, Beddu,Ence
            Bagus,Fajar Nugra,Oce Permatasari,Oce Permatasari, Eddies Adellia,H.
            Malih,Sabar Bokir,Chacha Marissa,Adam Jackson,Diky Otoy, Sujad
            Samiaji
          </p>
        </div>
        <div className="content-body-director">
          <Card.Title>Director :</Card.Title> <p>Rizal Mantovani</p>
        </div>
        <div className="content-body-sinopsis">
          <Card.Title>Sinopsis :</Card.Title>{" "}
          <p>
            Mumun (Acha Septriasa) dan Juned (Dimas Aditya) merupakan sepasang
            kekasih yang saling mencintai. Namun, Mumun tewas secara mengenaskan
            dalam sebuah kecelakaan dan Juned sangat terpukul karenanya. Setelah
            jasad Mumun dikuburkan, ternyata Husein (Mandra) selaku penggali
            kubur lupa membuka tali pocong Mumun pada saat prosesi penguburan,
            sehingga ia bangkit dari kubur untuk meminta agar tali pocongnya
            dibukakan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie_2;
