import "../styles/layouts/CardBioStyled.css";
import CardComponent from "./CardComponent";

const Cardbio = ({ about }) => {
  return (
    <div className="card-container">
      {about.map((aboutItem) => {
        return (
          <CardComponent
            image={aboutItem.image}
            name={aboutItem.name}
            link={aboutItem.link}
          />
        );
      })}
    </div>
  );
};

export default Cardbio;
