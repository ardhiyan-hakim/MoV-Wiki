import Miracle from "../assets/Miracle.jpg";
import Mumun from "../assets/Mumun.jpg";
import Uncharted from "../assets/Uncharted.jpg";
import Onepiece from "../assets/Onepiece.jpg";
import Pinocchio from "../assets/Pinocchio.jpg";
import Topgun from "../assets/Topgun.jpg";
import Profile from "../assets/profile/profilepict.jpg";

const movies = [
  {
    id: 1,
    title: "Miracle in Cell 07",
    rating: 4.9,
    image: Miracle,
    path: 1,
    genre: "Drama/Komedi",
    actor:
      "Vino G. Bastian,Graciella Abigail,Mawar Eva de Jongh,Indro Warkop, Tora Sudiro, Rigen Rakelna, Indra Jegel, Bryan Domani, Denny Sumargo, Agla Artalidia, Marsha Timothy,Agoes Kencrot, Coki Pardede, Rifnu Wikana, Iedil Dzuhrie Alaudin, Nadila Ernesta, Makayla Rose, Sheila Dara Aisha, Yatti Surachman",
    director: "Hanung Bramantyo",
    sinopsis:
      "Dodo (Vino G. Bastian) hanya ingin menjadi ayah yang baik bagi anaknya, Kartika (Graciella Abigail/Mawar de Jongh), sekalipun ia memiliki keterbatasan dalam hal kecerdasan, sehingga ia bertingkah dan berperilaku seperti anak-anak. Pada kenyataannya, Kartikalah yang lebih sering menjaga dan merawat sang ayah. Keduanya hidup bahagia. Kartika bangga pada ayahnya yang sehari-hari berjualan balon. Akan tetapi, kebahagiaan mereka tidak berlangsung lama, karena keduanya harus dipisahkan. Dodo ditangkap atas tuduhan memperkosa dan membunuh gadis kecil bernama Melati (Makayla Rose). Dodo dimasukkan ke penjara, lebih tepatnya ke dalam sel nomor tujuh, yang dihuni oleh napi-napi beringas, seperti Japra (Indro Warkop), Jaki (Tora Sudiro), Yunus (Rigen Rakelna), Atmo (Indra Jegel), dan Asrul (Bryan Domani). Setelah berbagai peristiwa yang dialami Dodo di penjara, Dodo berhasil mendapatkan bantuan untuk menyelundupkan Kartika ke dalam selnya. Kedekatan Dodo dan Kartika menularkan kebahagiaan bagi napi dan sipir lain di dalam penjara. Mereka mulai ragu apakah pria penyayang seperti Dodo tega membunuh Melati",
  },
  {
    id: 2,
    title: "Mumun",
    rating: 4.8,
    image: Mumun,
    path: 2,
    genre: "Horror/Komedi",
    actor:
      "Acha Septriasa,Dimas Aditya,Volland Humonggio,H. Mandra, Beddu,Ence Bagus,Fajar Nugra,Oce Permatasari,Oce Permatasari, Eddies Adellia,H. Malih,Sabar Bokir,Chacha Marissa,Adam Jackson,Diky Otoy, Sujad Samiaji",
    director: "Rizal Mantovani",
    sinopsis:
      "Mumun (Acha Septriasa) dan Juned (Dimas Aditya) merupakan sepasang kekasih yang saling mencintai. Namun, Mumun tewas secara mengenaskan dalam sebuah kecelakaan dan Juned sangat terpukul karenanya. Setelah jasad Mumun dikuburkan, ternyata Husein (Mandra) selaku penggali kubur lupa membuka tali pocong Mumun pada saat prosesi penguburan, sehingga ia bangkit dari kubur untuk meminta agar tali pocongnya dibukakan.",
  },
  {
    id: 3,
    title: "Onepiece",
    rating: 4.6,
    image: Onepiece,
    path: 3,
    genre: "Animation/Action/Adventure",
    actor:
      "Shanks, Monkey D.Luffy, Nami, Roronoa Zoro, Usopp, Coby, Sanji, Nico Robin, Trafalgar Law, Ben Beckman, Jinbei , Charlotte Brulee",
    director: "Gorô Taniguchi",
    sinopsis:
      "Cerita diatur di Pulau Musik Elegia , di mana Uta , diva terbesar di dunia, mengadakan konser live pertamanya dan mengungkapkan dirinya kepada publik. Topi Jerami , bajak laut , Marinir , dan penggemar dari seluruh dunia berkumpul untuk menikmati suara Uta, yang telah digambarkan sebagai dunia lain. Namun, acara dimulai dengan pengungkapan mengejutkan bahwa Uta adalah putri Shanks ",
  },
  {
    id: 4,
    title: "Pinocchio",
    rating: 4.5,
    image: Pinocchio,
    path: 4,
    genre: "Adventure/Comedy/Drama/Family",
    actor:
      "Pinokio",
    director: "Robert Zemeckis",
    sinopsis:
      " Sebuah boneka dihidupkan oleh seorang peri, yang menugaskannya untuk menjalani kehidupan yang bajik untuk menjadi anak laki-laki sejati.",
  },
  {
    id: 5,
    title: "Topgun",
    rating: 4.4,
    image: Topgun,
    path: 5,
    genre: "Action / Drama",
    actor:
      "Tom Cruise , Jennifer Connely , Miles Teller",
    director: "Joseph Kosinski",
    sinopsis:
      " Lebih dari 30 tahun mengabdi sebagai salah satu penerbang Angkatan Laut terbaik, Pete “Maverick” Mitchell berada dalam posisi dambaannya, melakukan aksi-aksi mendobrak sebagai pilot uji nan pemberani, dan menampik setiap kesempatan naik pangkat karena akan membuatnya tak bisa menerbangkan pesawatnya.",
  },
  {
    id: 6,
    title: "Uncharted",
    rating: 4.7,
    image: Uncharted,
    path: 6,
    genre: "Action / Adventure",
    actor : "Tom Holland , Mark Wahlberg , Antonio Banderas",
    director: "Ruben Fleischer",
    sinopsis:
      "     Nathan Drake (Tom Holland) yang pintar jalanan direkrut oleh pemburu harta karun berpengalaman Victor Sully Sullivan (Mark Wahlberg) untuk memulihkan kekayaan yang dikumpulkan oleh Ferdinand Magellan dan hilang 500 tahun yang lalu oleh House of Moncada. Apa yang dimulai sebagai pekerjaan perampokan bagi duo ini menjadi perlombaan lari keliling dunia untuk mencapai hadiah di hadapan Santiago Moncada (Antonio Banderas) yang kejam, yang percaya bahwa dia dan keluarganya adalah ahli waris yang sah. Jika Nate dan Sully dapat menguraikan petunjuk dan memecahkan salah satu misteri tertua di dunia, mereka akan menemukan harta senilai $5 miliar dan mungkin bahkan saudara laki-laki Nate yang telah lama hilang...tetapi hanya jika mereka dapat belajar untuk bekerja sama.",
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
