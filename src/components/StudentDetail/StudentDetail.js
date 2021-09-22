import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { Heading } from "../../style/GlobalComponents/Heading";

const StudentDetail = () => {
  const location = useLocation();

  const student = location.state.student


  console.log(location);

  return (
    <Wrapper>
      <Heading>StudentDetail</Heading>
      <div>
        <p>Tên</p>
        <h2>{student.name}</h2>
      </div>
      <div>
        <p>Tuổi</p>
        <h2>{student.age}</h2>
      </div>
      <div>
        <p>Tên</p>
        <h2>{student.name}</h2>
      </div>
      <div>
        <p>Email</p>
        <h2>{student.email}</h2>
      </div>
      <div>
        <p>Lớp</p>
        <h2>{student.classer}</h2>
      </div>
      <div>
        <p>Khóa</p>
        <h2>{student.year}</h2>
      </div>
      <div>
        <p>Địa chỉ</p>
        <h2>{student.address}</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  div {
    border-bottom: 2px solid black;
  }
`;

export default StudentDetail;
