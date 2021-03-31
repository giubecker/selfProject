import React, { useState } from "react";
import Toolbar from "../System/Toolbar";
import Sidebar from "../System/Sidebar";
import "./Home.css";
import Modal from "./Modal";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          {/* <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>Hey Handsome</Modal> */}
          <p>INÍCIO</p>
          <br />
          AMOR
          <br />
          CONQUISTAS
          <br />
          AMOR
        </div>
      </div>
    </>
  );
};
export default Home;
