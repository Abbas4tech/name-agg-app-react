import React from "react";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  console.log(props);
  return (
    <ul>
      {props.users.map((user) => (
        <UserListItem key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
};

export default UserList;
