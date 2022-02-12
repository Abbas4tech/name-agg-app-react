import { useState } from "react";
import Form from "./components/Form";
import UserList from "./components/UserList";

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

  return (
    <>
      <Form getFormData={FormDataHandler} />
      <UserList users={data} />
    </>
  );
}

export default App;
