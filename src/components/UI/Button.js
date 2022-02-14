import React from "react";

const Button = (props) => {
  return (
    <button
      className="p-2 mt-2 text-white rounded-md bg-slate-900 hover:bg-slate-600"
      type={props.type || "button"}
      onClick={props.onPress}
    >
      {props.children}
    </button>
  );
};

export default Button;
