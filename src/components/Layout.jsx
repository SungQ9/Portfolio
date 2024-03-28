import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  position: absolute;
  top: 70px;
  bottom: 70px;
  left: 70px;
  right: 70px;
  overflow: hidden;
  & > div {
    height: 100%;
    display: flex;
  }
  @media ${(props) => props.theme.mobile} {
    position: static;
  }
`;

const Contents = styled.div`
  flex: 1;
  width: calc(100% - 35%);
  background-color: ${(props) => props.theme.bgColor};
  margin-bottom: 10%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    height: 100vh;
  }
`;

function Layout() {
  return (
    <Container>
      <div>
        <Contents>
          <Outlet />
        </Contents>
      </div>
    </Container>
  );
}

export default Layout;
