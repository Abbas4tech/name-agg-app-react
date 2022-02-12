import React from "react";

const UserListItem = ({ id, name, age, listItemDeleteHandler }) => {
  console.log({ id, name, age });
  return (
    <li onClick={() => listItemDeleteHandler(id)}>
      <p>
        {name} ({age} years Old!)
      </p>
    </li>
  );
};

export default UserListItem;
