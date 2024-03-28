import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  -webkit-box-pack: justify;
  align-items: center;
  -webkit-box-align: center;
  text-align: center;
  height: 35px;
  background-color: #f8f9fa;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    display: none; // 화면 너비가 1024픽셀 이상일 때 Footer 숨김
  }
`;

const Text = styled.h4`
  font-size: 0.6rem;
  font-weight: 400;
  margin: 0;
`;

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Text>Copyright © 2024</Text>
        <Text>Web Developer Protfolio by SungQ</Text>
      </Container>
    </div>
  );
}

export default Footer;
