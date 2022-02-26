import React, { useState } from "react";
import UserList from "../Users/UserList";

const Users = ({ userData, deleteHandler }) => {
  console.log(userData);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchedData, setSearchedData] = useState(userData);

  const searchInputHandler = (event) => {
    setSearchKeyword(event.target.value);
    setSearchedData(
      userData.filter((user) => user.name.includes(searchKeyword.trim()))
    );
  };

  return (
    <React.Fragment>
      <section className="p-2 mb-4 rounded-md w-[90%] mx-auto bg-slate-300 max-w-2xl">
        <input
          type="search"
          className="w-full p-2 mr-0 bg-white"
          onChange={searchInputHandler}
          placeholder="Search By Name"
        />
      </section>
      <UserList
        users={searchKeyword ? searchedData : userData}
        deleteHandler={!searchKeyword ? deleteHandler : ""}
      />
    </React.Fragment>
  );
};

export default Users;
