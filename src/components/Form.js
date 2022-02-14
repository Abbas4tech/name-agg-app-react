import React, { useRef, useState } from "react";
import Button from "./UI/Button";

const Form = (props) => {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  const enteredName = useRef();
  const enteredAge = useRef();
  console.log(enteredName);
  console.log(enteredAge);

  const formHandler = (event) => {
    const name = enteredName.current.value;
    const age = enteredAge.current.value;
    console.log(name, age);
    event.preventDefault();
    const dataFromForm = {
      name,
      age,
      id: Math.random().toString(),
    };
    console.log(dataFromForm);
    props.getFormData(dataFromForm);
    // setAge("");
    // setName("");
    enteredName.current.value = "";
    enteredAge.current.value = "";
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <label>Name :</label>
        <input
          type="text"
          // value={name} //========== Two Way Binding
          // onChange={(event) => setName(event.target.value)}
          ref={enteredName}
        />
        <label>Age :</label>
        <input
          type="number"
          // value={age}
          // onChange={(event) => setAge(event.target.value)}
          ref={enteredAge}
        />
        {/* <button type="submit">Submit</button> */}
        <Button type="submit">submit</Button>
      </form>
    </>
  );
};

export default Form;
