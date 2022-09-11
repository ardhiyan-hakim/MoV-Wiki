import "../styles/layouts/CardBioStyled.css";
import Profile from "../assets/profile/profilepict.jpg";
import CardComponent from "./CardComponent";

const Cardbio = () => {
  return (
    <div className="card-container">
      <CardComponent
        image="https://media-exp1.licdn.com/dms/image/C4D03AQFguCVI9ITLUQ/profile-displayphoto-shrink_800_800/0/1654852590206?e=1668643200&v=beta&t=iBR3X8EaEuVmheNGQMtqt5oVCFW_wjdDeqDMLUvizxA"
        name="Asep"
        link="https://www.linkedin.com/in/asep-sahrudin-0740761bb/"
      />

      <CardComponent
        image="https://media-exp1.licdn.com/dms/image/C5603AQHRGsh-iof07Q/profile-displayphoto-shrink_800_800/0/1658021383626?e=1668643200&v=beta&t=yJjPJg73WcwI2B57VnUDmO5oknikoV74jWlG-LDRY4k"
        name="Ardhiyan"
        link="https://www.linkedin.com/in/ardhiyan-hakim/"
      />

      <CardComponent
        image="https://media-exp1.licdn.com/dms/image/C5603AQFAx8W_pH9WRg/profile-displayphoto-shrink_800_800/0/1662880782215?e=1668643200&v=beta&t=poS87q2x6QFxIqPOOlP-RaHY-Kf-WmX5MJCADSmyxbY"
        name="Christofer Nazara"
        link="https://www.linkedin.com/in/christofer-nazara-449bbb24b/"
      />

      <CardComponent
        image="https://media-exp1.licdn.com/dms/image/D4E35AQEzSxlpL_MBQw/profile-framedphoto-shrink_800_800/0/1638801198359?e=1663506000&v=beta&t=bZUVAH-hvwDHt111aYbIEfOF7leYE4LtpkEwKgsQTnA"
        name="Firman Wijaya"
        link="https://www.linkedin.com/in/firmanwijayadinata"
      />

      <CardComponent
        image={Profile}
        name="Anna"
        link="https://www.linkedin.com/in/ardhiyan-hakim/"
      />

      <CardComponent
        image={Profile}
        name="Siska"
        link="https://www.linkedin.com/in/ardhiyan-hakim/"
      />
    </div>
  );
};

export default Cardbio;
