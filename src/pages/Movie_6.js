import React from "react";
import Uncharted from "../assets/Uncharted.jpg";
import { Card, Image } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import "../styles/Movie.css";
function Movie_6() {
  return (
    <div className="wrapper">
      <div className="content-header">
        <div className="content-header-image">
          <Image src={Uncharted} alt="" className="images" />
        </div>
        <div className="content-header-title">
          <Card.Title className="text-center">Uncharted</Card.Title>
          <Card.Text className="text-center">
            Rating : 4.4 <AiFillStar color="#F7B000" className="icon" />
          </Card.Text>
        </div>
      </div>
      <div className="content-body">
        <div className="content-body-genre">
          <Card.Title>Genre :</Card.Title> <p>Action / Adventure</p>
        </div>
        <div className="content-body-actor">
          <Card.Title>Actor : </Card.Title>{" "}
          <p>Tom Holland , Mark Wahlberg , Antonio Banderas</p>
        </div>
        <div className="content-body-director">
          <Card.Title>Director :</Card.Title> <p>Ruben Fleischer</p>
        </div>
        <div className="content-body-sinopsis">
          <Card.Title>Sinopsis :</Card.Title>
          <p>
            Nathan Drake (Tom Holland) yang pintar jalanan direkrut oleh pemburu
            harta karun berpengalaman Victor "Sully" Sullivan (Mark Wahlberg)
            untuk memulihkan kekayaan yang dikumpulkan oleh Ferdinand Magellan
            dan hilang 500 tahun yang lalu oleh House of Moncada. Apa yang
            dimulai sebagai pekerjaan perampokan bagi duo ini menjadi perlombaan
            lari keliling dunia untuk mencapai hadiah di hadapan Santiago
            Moncada (Antonio Banderas) yang kejam, yang percaya bahwa dia dan
            keluarganya adalah ahli waris yang sah. Jika Nate dan Sully dapat
            menguraikan petunjuk dan memecahkan salah satu misteri tertua di
            dunia, mereka akan menemukan harta senilai $5 miliar dan mungkin
            bahkan saudara laki-laki Nate yang telah lama hilang...tetapi hanya
            jika mereka dapat belajar untuk bekerja sama.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie_6;
