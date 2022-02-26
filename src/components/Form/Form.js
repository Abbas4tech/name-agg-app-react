import React, { useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Form = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [error, setError] = useState("");

  // const enteredName = useRef();
  // const enteredAge = useRef();
  // console.log(enteredName);
  // console.log(enteredAge);

  const formHandler = (event) => {
    // const name = enteredName.current.value;
    // const age = enteredAge.current.value;
    // console.log(name, age);
    event.preventDefault();
    const dataFromForm = {
      name,
      age,
      id: Math.random().toString(),
    };
    if (!name || !age) {
      setError({
        title: "An error occured!",
        message: "please enter valid inputs (non-empty-values).",
      });
      return;
    }
    if (!isNaN(+name)) {
      setError({
        title: "Invalid Name!",
        message: "Name of user must contain alphabatical characters.",
      });
      // enteredName.current.value = "";
      setName("");
      return;
    }
    if (age < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please provide valid age.",
      });
      // enteredAge.current.value = "";
      setAge("");
      return;
    }
    console.log(dataFromForm);
    props.getFormData(dataFromForm);
    setAge("");
    setName("");
    // enteredName.current.value = "";
    // enteredAge.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}
      <form
        onSubmit={formHandler}
        className="max-w-2xl p-4 mx-auto mb-4 mt-8 bg-gray-200 rounded-md w-[90%]"
      >
        <label className="block mb-2 font-bold bg-inherit">Name :</label>
        <input
          type="text"
          value={name} //========== Two Way Binding
          onChange={(event) => setName(event.target.value.toUpperCase())}
          // ref={enteredName}
          className="block w-full p-0.5 mb-2 border-2 border-black bg-inherit"
        />
        <label className="block mb-2 font-bold bg-inherit">Age :</label>
        <input
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          // ref={enteredAge}
          className="block w-full p-0.5 mb-2 border-2 border-black bg-inherit"
        />
        {/* <button type="submit">Submit</button> */}
        <Button type="submit">submit</Button>
      </form>
    </>
  );
};

export default Form;
