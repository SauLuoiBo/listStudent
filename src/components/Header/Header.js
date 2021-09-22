import React from "react";
import { Container, Section } from "../../style/GlobalComponents";
import styled from "styled-components";
import Navbar from "./elements/Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Section>
      <Container>
        <Wrapper>
          <Logo>
            <i className="fas fa-address-card"></i>
            <h3>SauLuoi</h3>
          </Logo>
          <Btn
            className={isOpen ? "fas fa-subscript" : "fas fa-bars "}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Navbar />
        </Wrapper>
        {isOpen? <Navbar className='iphone'/>: ''}
        
      </Container>
    </Section>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 2rem 0;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;

  h3 {
    margin-left: 1rem;
  }

  i {
    font-size: 2.4rem;
  }
`;

const Btn = styled.i`
display: none;
justify-content: center;
align-items: center;
  font-size: 2.5rem;
  margin-right: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
	}
`;

export default Header;
