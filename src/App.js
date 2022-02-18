import { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/UI/Modal";
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

  const deleteHandler = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  return (
    <>
      <section className="flex flex-col items-center justify-between w-11/12 max-w-2xl mx-auto">
        <Form getFormData={FormDataHandler} />
        <UserList users={data} deleteHandler={deleteHandler} />
      </section>
    </>
  );
}

export default App;
