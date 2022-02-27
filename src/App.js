import { useState } from "react";
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";

const usersData = [
  {
    name: "ABBAS",
    age: 22,
    id: Math.random().toString(),
  },
  {
    name: "ANAS",
    age: 5,
    id: Math.random().toString(),
  },
];

function App() {
  const [data, setData] = useState(usersData);
  const FormDataHandler = (userData) => {
    setData([...data, userData]);
  };

  const deleteHandler = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  return (
    <>
      <Form getFormData={FormDataHandler} />
      <Users userData={data} deleteHandler={deleteHandler} />
    </>
  );
}

export default App;
