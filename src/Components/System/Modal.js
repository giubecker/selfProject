import React from "react";
import * as FaIcons from "react-icons/fa";
import "./Modal.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <button onClick={onClose}> Close Modal</button>
        {children}
        <FaIcons.FaHome />
      </div>
    </>
  );
};
export default Modal;
