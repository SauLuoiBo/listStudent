import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/liststudent">DashBoard</Link>
      </li>
      <li>
        <Link to="/addstudent">Add</Link>
      </li>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;

    &.iphone {
        display: none;
    }
  }

  li {
    margin: 0 1rem;
    padding: 0 1rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;

    :hover {
      color: red;
    }
  }
`;

export default Navbar;
