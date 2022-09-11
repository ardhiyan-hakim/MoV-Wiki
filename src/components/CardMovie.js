import React from 'react'
import {Container, Row, Col, Card, Image,Button} from 'react-bootstrap'
import { AiFillStar } from "react-icons/ai";
import Miracle from '../assets/Miracle.jpg'
import Mumun from '../assets/Mumun.jpg'
import Uncharted from '../assets/Uncharted.jpg'
import Onepiece from '../assets/Onepiece.jpg'
import Pinocchio from '../assets/Pinocchio.jpg'
import Topgun from '../assets/Topgun.jpg'
import '../styles/CardMovie.css'
function CardMovie() {
  return (
    <div>
        <h1>Trending Movies</h1>
        <br/>
        <Row>
          <Col md={3} className="movieWrapper">
            <Card className="movieImage" >
              <Image src={Miracle} alt ="Miracle in Cell 07" className="images"/>
              <div className="card-content">
              <div className="p-2 m-1">
                <Card.Title className="text-center">Miracle in Cell 07</Card.Title>
                <Card.Text className="text-center">
                 Rating : 4.9 <AiFillStar color="yellow" className="icon"/>
                </Card.Text>
                <Button variant="primary">Detail</Button>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Mumun} alt ="Mumun" className="images"/>
              <div className="card-content">
              <div className="p-2 m-1 ">
                <Card.Title className="text-center">Mumun</Card.Title>
                <Card.Text className="text-center">
                 Rating : 4.8 <AiFillStar color="yellow" className="icon"/>
                </Card.Text>
                <Button variant="primary">Detail</Button>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Uncharted} alt ="Uncharted" className="images"/>
              <div className=" card-content">
              <div className="p-2 m-1 ">
                <Card.Title className="text-center">Uncharted</Card.Title>
                <Card.Text className="text-center">
                 Rating : 4.7 <AiFillStar color="yellow" className="icon"/>
                </Card.Text>
                <Button variant="primary">Detail</Button>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Onepiece} alt ="Onepiece" className="images"/>
              <div className=" card-content">
              <div className="p-2 m-1 ">
                <Card.Title className="text-center">One Piece Film : Red</Card.Title>
                <Card.Text className="text-center">
                 Rating : 4.6 <AiFillStar color="yellow" className="icon"/>
                </Card.Text >
                <Button variant="primary">Detail</Button>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Pinocchio} alt ="Pinocchio" className="images"/>
              <div className=" card-content">
              <div className="p-2 m-1 ">
                <Card.Title className="text-center">Pinocchio</Card.Title>
                <Card.Text className="text-center">
                 Rating : 4.5 <AiFillStar color="yellow" className="icon"/>
                </Card.Text>
                <Button variant="primary">Detail</Button>
                </div>
                </div>
            </Card>
          </Col>
          <Col md={3} className="movieWrapper">
            <Card className="movieImage">
              <Image src={Topgun}  alt ="Miracle in Cell 07" className="images"/>
              <div className=" card-content">
              <div className="p-2 m-1 ">
                <Card.Title className="text-center">Topgun</Card.Title>
                <Card.Text className="text-center">
                 Rating : 4.4 <AiFillStar color="yellow" className="icon"/>
                </Card.Text>
                <Button variant="primary">Detail</Button>
                </div>
                </div>
            </Card>
          </Col>
        </Row>

    </div>
  )
}

export default CardMovie
