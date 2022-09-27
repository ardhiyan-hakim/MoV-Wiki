import { useSelector } from "react-redux";
import "../styles/layouts/CardBioStyled.css";
import CardComponent from "./CardComponent";

const Cardbio = () => {
  const { about } = useSelector((state) => state);

  return (
    <div className="card-container">
      {about.map((aboutItem) => {
        return (
          <CardComponent
            key={aboutItem.id}
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
