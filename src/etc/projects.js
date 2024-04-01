import TrentThumb from "../styles/img/Trent-thum-1.png";
import TrentThumb2 from "../styles/img/Trent-thum-2.png";
import Trent from "../styles/img/Trent-1.png";
import Trent2 from "../styles/img/Trent-2.png";
import Trent3 from "../styles/img/Trent-3.png";
import Trent4 from "../styles/img/Trent-4.png";
import Trent5 from "../styles/img/Trent-5.png";
import Trent6 from "../styles/img/Trent-6.png";
import DrpickThumb from "../styles/img/Drpick-thum.png";
import Drpick from "../styles/img/Drpick-1.png";
import Drpick2 from "../styles/img/Drpick-2.png";
import Drpick3 from "../styles/img/Drpick-3.png";
import Drpick4 from "../styles/img/Drpick-4.png";
import Drpick5 from "../styles/img/Drpick-5.png";
import Drpick6 from "../styles/img/Drpick-6.png";
import Chat1 from "../styles/img/Chat-thum-1.png";
import Chat2 from "../styles/img/Chat-thum-2.png";

const projects = [
  {
    id: 1,
    name: "T'Rent",
    subname: "전자제품 렌탈 가격 비교 플랫폼 (팀프로젝트)",
    images: [
      TrentThumb,
      TrentThumb2,
      Trent,
      Trent2,
      Trent3,
      Trent4,
      Trent5,
      Trent6,
    ],
    description: "Spring Framework를 이용한 전자제품 렌탈 가격 비교 플랫폼 ",
    skills: ["Spring", "Mybatis", "JQuery", "JSP"],
    gitUrl: "https://github.com/MidProject-Rental-Service/trent",
    docUrl:
      "https://drive.google.com/file/d/1nG8oQZvkhuHkm2ZZYoYnUxpSv-jfU8dJ/view?usp=sharing",
  },
  {
    id: 2,
    name: "DR.Pick",
    subname: "",
    images: [DrpickThumb, Drpick, Drpick2, Drpick3, Drpick4, Drpick5, Drpick6],
    description: "비대면(화상) 진료 및 통합 의료 서비스",
    skills: [
      "Spring",
      "JWT",
      "React",
      "Node.js",
      "WebRTC",
      "Flask",
      "Selenium",
      "Tensorflow",
    ],
    gitUrl: "https://github.com/finalProject-doctorPick",
    docUrl:
      "https://drive.google.com/file/d/1TsMGeIa4UH-g79N2prRmwPH7U53jNths/view?usp=sharing",
    url: "https://sungq9.github.io/drpick/",
  },
  {
    id: 3,
    name: "CHAT-APP",
    subname: "",
    images: [Chat1, Chat2],
    description: "가전렌탈서비스 플랫폼",
    skills: ["React", "Node.js"],
    gitUrl: "https://github.com/SungQ9/CHAT-APP.git",
    url: "https://sungq9.github.io/CHAT-APP/",
  },
  {
    id: 4,
    name: "Zoom",
    subname: "",
    images: [Trent, Drpick],
    description: "비대면(화상) 진료 및 통합 의료 서비스",
    skills: ["Node.js"],
    gitUrl: "https://github.com/finalProject-doctorPick",
  },
];

export default projects;
