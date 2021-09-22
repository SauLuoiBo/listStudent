import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../../assets/image/user.png";

const StudentCard = (props) => {
  const { id, name, email } = props.student;

  return (
    <Wrapper>
      <Infor>
        <img src={user} alt="user" />
        <Link
          to={{
            pathname: `/addstudent/${id}`,
            state: { student: props.student },
          }}
        >
          <h4>{name}</h4>
          <p>{email}</p>
        </Link>
      </Infor>
      <Action>
        <i className="fas fa-trash-alt red" onClick={() => props.del(id)} />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 2rem 0;
  border-bottom: 3px solid black;

  @media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}

`;

const Infor = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 5rem;
    margin-right: 2rem;
  }

  p {
    text-transform: none;
  }
`;

const Action = styled.div`
  color: blue;
  i {
    margin: 0 1rem;
    font-size: 4rem;
    cursor: pointer;
    &.red {
      color: red;
    }
  }
`;

export default StudentCard;
