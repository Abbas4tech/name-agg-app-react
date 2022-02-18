import React from "react";
import Backdrop from "./Backdrop";
import Button from "./Button";

const Modal = ({ title, message, errorHandler }) => {
  return (
    <>
      <Backdrop onHit={errorHandler} />
      <section className="fixed z-20 w-11/12 max-w-lg mx-auto my-2 bg-white top-60 rounded-xl">
        <header className="w-full p-4 h-15 bg-slate-800">
          <h1 className="text-white text-bold bg-inherit">{title}</h1>
        </header>
        <div className="p-4 mt-2 text-black bg-white">
          <p className=" bg-inherit">{message}</p>
        </div>
        <footer className="flex justify-end p-2 bg-inherit">
          <Button onPress={errorHandler}>Okay</Button>
        </footer>
      </section>
    </>
  );
};

export default Modal;
