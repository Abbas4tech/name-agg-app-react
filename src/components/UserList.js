import React from "react";
import NoData from "./UI/NoData";
import UserListItem from "./UserListItem";

const UserList = (props) => {
  console.log(props);
  console.log(props.deleteHandler);

  const listItemDeleteHandler = (id) => {
    //=========== Lifting the stateUp
    props.deleteHandler(id);
  };

  return (
    <ul className="w-11/12 h-full max-w-2xl p-4 mx-auto my-2 rounded-lg bg-slate-300">
      {props.users.length === 0 ? ( //============= Conditional Statement
        <NoData />
      ) : (
        props.users.map((user) => (
          <UserListItem
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            listItemDeleteHandler={listItemDeleteHandler}
          />
        ))
      )}
    </ul>
  );
};

export default UserList;
