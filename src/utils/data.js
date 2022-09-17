import Miracle from "../assets/Miracle.jpg";
import Mumun from "../assets/Mumun.jpg";
import Uncharted from "../assets/Uncharted.jpg";
import Onepiece from "../assets/Onepiece.jpg";
import Pinocchio from "../assets/Pinocchio.jpg";
import Topgun from "../assets/Topgun.jpg";
import Profile from "../assets/profile/profilepict.jpg";

const movies = [
  {
    title: "Miracle in Cell 07",
    Rating: 4.9,
    image: Miracle,
    path: 1,
  },
  {
    title: "Mumun",
    Rating: 4.8,
    image: Mumun,
    path: 2,
  },
  {
    title: "Uncharted",
    Rating: 4.7,
    image: Uncharted,
    path: 3,
  },
  {
    title: "Onepiece",
    Rating: 4.6,
    image: Onepiece,
    path: 4,
  },
  {
    title: "Pinocchio",
    Rating: 4.5,
    image: Pinocchio,
    path: 5,
  },
  {
    title: "Topgun",
    Rating: 4.4,
    image: Topgun,
    path: 6,
  },
];

const about = [
  {
    id: 1,
    name: "Asep Sahrudin",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFguCVI9ITLUQ/profile-displayphoto-shrink_800_800/0/1654852590206?e=1668643200&v=beta&t=iBR3X8EaEuVmheNGQMtqt5oVCFW_wjdDeqDMLUvizxA",
    link: "https://www.linkedin.com/in/asep-sahrudin-0740761bb/",
  },
  {
    id: 2,
    name: "Ardhiyan AH",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQHRGsh-iof07Q/profile-displayphoto-shrink_800_800/0/1658021383626?e=1668643200&v=beta&t=yJjPJg73WcwI2B57VnUDmO5oknikoV74jWlG-LDRY4k",
    link: "https://www.linkedin.com/in/ardhiyan-hakim/",
  },
  {
    id: 3,
    name: "Christofer Nazara",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQFAx8W_pH9WRg/profile-displayphoto-shrink_800_800/0/1662880782215?e=1668643200&v=beta&t=poS87q2x6QFxIqPOOlP-RaHY-Kf-WmX5MJCADSmyxbY",
    link: "https://www.linkedin.com/in/christofer-nazara-449bbb24b/",
  },
  {
    id: 4,
    name: "Firman Wijaya",
    image:
      "https://media-exp1.licdn.com/dms/image/D4E35AQEzSxlpL_MBQw/profile-framedphoto-shrink_800_800/0/1638801198359?e=1663506000&v=beta&t=bZUVAH-hvwDHt111aYbIEfOF7leYE4LtpkEwKgsQTnA",
    link: "https://www.linkedin.com/in/firmanwijayadinata",
  },
  {
    id: 5,
    name: "Anna",
    image: Profile,
    link: "https://www.linkedin.com/in/ardhiyan-hakim/",
  },
  {
    id: 6,
    name: "Siska",
    image: Profile,
    link: "https://www.linkedin.com/in/ardhiyan-hakim/",
  },
];

const data = {
  movies,
  about,
};

export default data;
