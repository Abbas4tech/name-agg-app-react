import React from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onHit}
      className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"
    ></div>
  );
};

export default Backdrop;
