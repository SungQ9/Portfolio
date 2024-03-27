import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

function Footer() {
  return (
    <div className="footer">
      <Container>
        <h4>Copyright © 2024</h4>
        <h4>Web Developer Protfolio by SungQ</h4>
      </Container>
    </div>
  );
}

export default Footer;
