import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const PrevArrow = ({ style, onClick }) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "rgba(30, 30, 30, 0.75)",
        background: "rgba(255, 255, 255, 0.5)",
        zIndex: 2,
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        left: "5px",
        transform: "translateY(-50%)",
        width: "50px", // 크기 조절
        height: "50px", // 크기 조절
      }}
      onClick={onClick}
    >
      <IoIosArrowBack size={24} /> {/* 아이콘 크기 조절 */}
    </div>
  );
};

export const NextArrow = ({ style, onClick }) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "rgba(30, 30, 30, 0.75)",
        background: "rgba(255, 255, 255, 0.5)",
        zIndex: 2,
        borderRadius: "50%",
        position: "absolute",
        top: "50%",
        right: "5px",
        transform: "translateY(-50%)",
        width: "50px", // 크기 조절
        height: "50px", // 크기 조절
      }}
      onClick={onClick}
    >
      <IoIosArrowForward size={24} /> {/* 아이콘 크기 조절 */}
    </div>
  );
};
