import React, { useState } from "react";
import styled from "styled-components";
import { Heading } from "../../style/GlobalComponents/Heading";
import { v4 as uuidv4 } from 'uuid'

const Addstudent = () => {
  const [newStudent, setNewStudent] = useState({
      id: uuidv4(),
    name: "",
    age: "",
    email: "",
    year: "",
    address: "",
    classer: "",
  });

//   React.useEffect(()=>{
//     setNewStudent({ ...newStudent, id: uuidv4()})
//   }, [newStudent.name])

  const Add = () => {
    // e.preventDefault();
    console.log(newStudent)
    if (newStudent.name === "" || newStudent.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    if (newStudent.age === "" || newStudent.address === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    if (newStudent.classer === "" || newStudent.year === "") {
      alert("ALl the fields are mandatory!");
      return;
    }

    const students = JSON.parse(localStorage.getItem("student"));

    students.push(newStudent);

    localStorage.setItem("student", JSON.stringify(students));

    setNewStudent({
      id: uuidv4(),
      name: "",
      age: "",
      email: "",
      year: "",
      address: "",
      classer: "",
      
    });
    console.log(newStudent)
  };

  return (
    <Wrapper>
      <Heading>Thêm sinh viên</Heading>
      <Form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newStudent.age}
          onChange={(e) => {
            setNewStudent({ ...newStudent, age: e.target.value });
          }}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => {
            setNewStudent({ ...newStudent, email: e.target.value });
          }}
        />
        <label>Khóa học</label>
        <input
          type="number"
          name="year"
          placeholder="Liên khóa"
          value={newStudent.year}
          onChange={(e) => {
            setNewStudent({ ...newStudent, year: e.target.value });
          }}
        />
        <label>Address</label>
        <input
          type="text"
          name="Địachỉ"
          placeholder="Địa chỉ"
          value={newStudent.address}
          onChange={(e) => {
            setNewStudent({ ...newStudent, address: e.target.value });
          }}
        />
        <label>Class</label>
        <input
          type="text"
          name="class"
          placeholder="Lớp"
          value={newStudent.classer}
          onChange={(e) => {
            setNewStudent({ ...newStudent, classer: e.target.value });
          }}
        />
        <MainButton
          onClick={() => Add()
          }
        >
          Add
        </MainButton>
      </Form>
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}

  input,
  textarea {
    width: 100%;
    padding: 1rem 1.2rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    background: none;
    text-transform: none;
    color: var(--color-main);
    border: var(--border);
    margin: 0.7rem 0;
    :focus {
      border: var(--border-hover);
    }

    &.submit {
      width: fit-content;
      display: inline-block;
      padding: 0.9rem 1.5rem;
      border-radius: var(--border-radius);
      color: var(--color-main);
      background: none;
      border: var(--border);
      cursor: pointer;
      margin-top: 1rem;
      font-size: 1.7rem;

      :hover {
        border-radius: var(--border-radius-hover);
        border: var(--border-hover);
      }
    }
  }
`;

const MainButton = styled.div`
  width: fit-content;
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 0.9rem 1.5rem;
  cursor: pointer;
  /* transition: all .2s linear; */

  p {
    font-size: 2rem;
    font-weight: 500;
  }

  :hover {
    border: var(--border-hover);
    border-radius: var(--border-radius-hover);
    /* transition: all .2s linear; */
  }
`;

export default Addstudent;
