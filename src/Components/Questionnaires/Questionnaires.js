import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import "./Questionnaires.css";
import axios from "axios";
import Modal from "../System/Modal";
import Questionnaire from "./Questionnaire";

export const Questionnaires = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [questionnaires, setQuestionnaires] = useState([]);
  const [answereds, setAnswereds] = useState([]);
  // const [modalQuestionnaire, setModalQuestionnaire] = React.useState();

  useEffect(() => {
    axios.get("http://localhost:9002/questionnaires").then((response) => {
      setQuestionnaires(response.data);
      console.log(response.data);
    });

    axios.get("http://localhost:9002/answereds").then((response) => {
      setAnswereds(response.data);
      console.log(response.data);
    });
  }, []);
  const title = [];

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="questionnaires box">
          <p>QUESTIONÁRIOS</p>
          <br />
          <h1>Questionários para responder:</h1>
{questionnaires.map((questionnaire)=> (
<div key={questionnaire.id}>
<Link to="/contacts">
            <button className="questionnaire-button">{questionnaire.title}</button>
          </Link>
</div>
))}
          <br />
          <br />
          <h1>Questionários respondidos:</h1>
          {answereds.map((answered)=> (
<div key={answered.id}>
<Link to='/answereds'>
            <button className="questionnaire-button">{answered.title}</button>
          </Link>
</div>
))}
        </div>
      </div>
    </>
  );
};
export default Questionnaires;
