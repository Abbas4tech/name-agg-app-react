import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    const dataFromForm = { name, age, id: Math.random().toString() };
    console.log(dataFromForm);
    props.getFormData(dataFromForm);
    setAge("");
    setName("");
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <label>Name :</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Age :</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
