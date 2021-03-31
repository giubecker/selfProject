import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import "./Questionnaires.css";
import Modal from "../System/Modal";
import Questionnaire from "./Questionnaire";

export const Questionnaires = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [modalQuestionnaire, setModalQuestionnaire] = React.useState();

  const title = [];

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="questionnaires box">
          <p>QUESTIONÁRIOS</p>
          <br />
          <h1>Questionários para responder:</h1>
          <Link to="/contacts">
            <button className="questionnaire-button">Questionário 01</button>
          </Link>
          <Link to="/questionnaire/1">
            <button className="questionnaire-button">Questionário 02</button>
          </Link>
          <br />
          <br />
          <h1>Questionários respondidos:</h1>
          <button className="questionnaire-button">Questionário 01</button>
          <button className="questionnaire-button">Questionário 02</button>
        </div>
      </div>
    </>
  );
};
export default Questionnaires;
