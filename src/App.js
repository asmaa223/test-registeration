import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";
import checkStatus from "./checkStatus.js"

export default function App() {
  let status; 
  const [optionValue, setOptionValue, firstName, setFirstName, lastName, setLasttName, emailAddress, setemailaddress, textArea,setTextArea, semester, setSemester] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.Dropdown.value);
    setFirstName(e.target.firstname.value)
    setLasttName(e.target.lastname.value)
    setemailaddress(e.target.emailaddress.value)
    setTextArea(e.target.textValue.value)
    setSemester(e.target.semester.value)

    //check if user exists and active
    status = checkStatus(firstName, lastName)

    //check if user is registered for course 
    
  };


  return (
    <div>
      <h1>User Registration Form</h1>
      <p>Please enter the following information: </p>
      <p>
      <label>
              First Name:{' '}
              <input type="text" name="firstname"  onChange={handleSelect}     />
            </label>
            </p>
            <p></p>
            <p>
            <label>
              Last Name:{' '}
              <input type="text" name="lastnamename" onChange={handleSelect}    />
            </label>
            <p></p>
            </p>
            <p>
            <label>
              Email Address:{' '}
              <input type="text" name="emailaddress" onChange={handleSelect}    />
            </label>
            
            </p>
            <p></p>
            <p>
            <label>
              Semester:{' '}
              <input type="text" name="semester" onChange={handleSelect}    />
            </label>
            </p>
            <p></p>

    <label>Enter comments/message for instructor : {' '} </label>
        <input type="textarea" 
          name="textValue"
          height="30px"
        />
        <p></p>
      <Dropdown
        name="dropDown"
        formLabel="Choose a course"
        buttonText="Send form"
        onChange={handleSelect}          

        
      >
        <Option selected value="Click to see options" />
        <Option value="Data Structures and Algorithms" />
        <Option value="Computer Architecture" />
        <Option value="Modeling and Simulation" />
        <Option value="Robotics" />
        <Option value="Networking" />
        <Option value="Cyber Phyiscal Systems" />
        <Option value="Operations Research" />
      </Dropdown>

     
      <p>User: {firstName}  &nbsp; {lastName} </p>
      <p> Status: {status} </p>
      <p>Course selected {optionValue} </p>
      <p> Semester {semester} </p>

    </div>
  );
}