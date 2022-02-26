import { useState } from "react";
import Form from "./components/Form/Form";
import Users from "./components/Search Bar/Users";

const usersData = [
  {
    name: "Abbas",
    age: 22,
    id: Math.random().toString(),
  },
  {
    name: "Anas",
    age: 5,
    id: Math.random().toString(),
  },
];

function App() {
  const [data, setData] = useState(usersData);
  const FormDataHandler = (userData) => {
    console.log(userData);
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
