import React from "react";
import styled from "styled-components";
import { Heading } from "../../style/GlobalComponents/Heading";
import StudentCard from "../StudentCard/StudentCard";


const ListStudent = () => {

  const students = JSON.parse(localStorage.getItem('student'))

  console.log(students);

  const del = (id) => {
    const newStudents = students.filter(sv => sv.id !== id)
    console.log(id)
    localStorage.setItem("student", JSON.stringify(newStudents));

    console.log(newStudents)
    window.location.reload()
  }




  const renderStudentList = students.map((data) => {
    return <StudentCard del={del} student={data} key={data.id} />;
  });

  return (
    <Wrapper>
      <Heading >
        List
        <span>Class</span>
      </Heading>
      {renderStudentList.length > 0
						? renderStudentList
						: "No Student available"}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default ListStudent;
