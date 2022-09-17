import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardComponent({ image, name, link }) {
  return (
    <Card className="card-bio">
      <Card.Img src={image} className="profileimg" />
      <Card.Title>Frontend Developer</Card.Title>
      <div className="name">{name}</div>
      <Button variant="primary" className="link-button">
        <a href={link} target="_blank" rel="noreferrer">
          Contact Me
        </a>
      </Button>
    </Card>
  );
}

export default CardComponent;
