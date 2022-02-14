import React from "react";

const UserListItem = ({ id, name, age, listItemDeleteHandler }) => {
  console.log({ id, name, age });
  return (
    <li
      onClick={() => listItemDeleteHandler(id)}
      className="p-2 mx-0 my-2 border-2 border-black rounded-sm cursor-pointer bg-inherit bg-gray-50"
    >
      <p className="font-bold bg-inherit">
        {name} ({age} years Old!)
      </p>
    </li>
  );
};

export default UserListItem;
