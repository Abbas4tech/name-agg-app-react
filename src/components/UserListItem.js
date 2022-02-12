import React from "react";

const UserListItem = ({ name, age }) => {
  console.log({ name, age });
  return (
    <li>
      <p>
        {name} ({age} years Old!)
      </p>
    </li>
  );
};

export default UserListItem;
