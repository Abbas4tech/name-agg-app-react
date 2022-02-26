import React from "react";

const NoData = (props) => {
  return (
    <>
      <section className="flex items-center justify-center p-4 mx-0 my-2 bg-gray-50">
        <p className="font-bold bg-inherit">{props.errorMessage}</p>
      </section>
    </>
  );
};

export default NoData;
