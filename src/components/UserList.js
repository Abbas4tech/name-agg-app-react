import React from "react";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  console.log(props);
  console.log(props.deleteHandler);

  const listItemDeleteHandler = (id) => {
    props.deleteHandler(id);
  };

  return (
    <ul>
      {props.users.map((user) => (
        <UserListItem
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
          listItemDeleteHandler={listItemDeleteHandler}
        />
      ))}
    </ul>
  );
};

export default UserList;
