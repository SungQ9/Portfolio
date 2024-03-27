import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const Navigator = styled.div`
  display: flex;
  text-align: center;
  margin-right: 2.5%;
`;

const NavLink = styled(motion.p)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100px;
  height: 50px;
  margin-inline: 2px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">
      <Container>
        <h2> SungQ</h2>
        <Navigator>
          <NavLink onClick={() => navigate("/")}>Home</NavLink>
          <NavLink onClick={() => navigate("/about")}>About</NavLink>
          <NavLink onClick={() => navigate("/projects")}>Projects</NavLink>
        </Navigator>
      </Container>
    </div>
  );
}

export default Header;
