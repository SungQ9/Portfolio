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
import SocketIOChat from "../styles/img/SocketIOChat.png";
import SocketIOChat2 from "../styles/img/SocketIOChat-2.png";
import Portfolio from "../styles/img/Portfolio-1.png";
import Portfolio2 from "../styles/img/Portfolio-2.png";
import Portfolio3 from "../styles/img/Portfolio-3.png";

const projects = [
  {
    id: 1,
    name: "DR.Pick",
    subname: "비대면(화상) 진료 및 통합 의료 서비스(팀프로젝트)",
    images: [DrpickThumb, Drpick, Drpick2, Drpick3, Drpick4, Drpick5, Drpick6],
    description: [
      "🏗️ 일정 :  24.01.05 ~ 24.01.31 ",
      "👥 인원 : 4명",
      "React 구조 설계 , WebRTC를 이용한 화상채팅 기능, 사용자 & 관리자 페이지 (Front),Front 전체 페이지 동작처리, Front 와 Back 연동, Linux서버 구축",
    ],
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
    id: 2,
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
    description: [
      "🏗️ 일정 - 23.11.06 ~ 23.11.17 ",
      "👥 인원 - 4명",
      "DB설계, 사용자 페이지 전반, 장바구니 / 렌탈 신청 페이지/ 마이페이지, 제품검색 / 상세검색 기능 , 리뷰 CRUD, 문의 CRUD",
    ],
    skills: ["Spring", "Mybatis", "JQuery", "JSP"],
    gitUrl: "https://github.com/MidProject-Rental-Service/trent",
    docUrl:
      "https://drive.google.com/file/d/1nG8oQZvkhuHkm2ZZYoYnUxpSv-jfU8dJ/view?usp=sharing",
  },

  {
    id: 3,
    name: "Live Chat Room",
    subname: "",
    images: [Chat1, Chat2],
    description: [
      "🏗️ 일정 - 23.12.15 ~ 23.12.20 ",
      "👥 인원 - 1명",
      "React,SocketIO를 이용한 다자간 채팅방",
    ],
    skills: ["React", "Node.js", "SocketIO"],
    gitUrl: "https://github.com/SungQ9/CHAT-APP.git",
    url: "https://sungq9.github.io/CHAT-APP/",
  },
  {
    id: 4,
    name: "Chat",
    subname: "",
    images: [SocketIOChat, SocketIOChat2],
    description: [
      "🏗️ 일정 - 23.12.12 ~ 23.12.15 ",
      "👥 인원 - 1명",
      "WebSocket,SocketIO 를 이용한 채팅방 클론코딩",
    ],
    skills: ["Node.js", "SocketIO", "WebSocket"],
    gitUrl: "https://github.com/finalProject-doctorPick",
  },
  {
    id: 5,
    name: "Portfolio",
    subname: "",
    images: [Portfolio, Portfolio2, Portfolio3],
    description: [
      "🏗️ 일정 - 24.03.25 ~ 24.04.03 ",
      "👥 인원 - 1명",
      "React 기반의 웹 포트폴리오 ",
    ],
    skills: ["React", "styled component", "framer-motion"],
    gitUrl: "https://github.com/SungQ9/Portfolio",
    url: "https://sungq9.github.io/Portfolio/",
  },
];

export default projects;
