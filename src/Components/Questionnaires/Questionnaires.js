import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import "./Questionnaires.css";
import axios from "axios";

export const Questionnaires = () => {
  const [questionnaires, setQuestionnaires] = useState([]);
  const [answereds, setAnswereds] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9002/questionnaires").then((response) => {
      setQuestionnaires(response.data);
    });

    axios.get("http://localhost:9002/answereds").then((response) => {
      setAnswereds(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="questionnaires box">
          <p>QUESTIONÁRIOS</p>
          <br />
          <h1>Questionários para responder:</h1>
          {questionnaires.map((questionnaire) => (
            <div key={questionnaire.id}>
              <Link to={`/questionnaires/instructions/${questionnaire.id}`}>
                <button className="questionnaire-button">
                  {questionnaire.title}{" "}
                  {`( ${questionnaire.questionsQuantity} questões )`}
                </button>
              </Link>
            </div>
          ))}
          <br />
          <br />
          <h1>Questionários corrigidos:</h1>
          {answereds.map((answered) => (
            <div key={answered.id}>
              <Link to={`/questionnaires/answered/${answered.id}`}>
                <button className="questionnaire-button">
                  {answered.title}{" "}
                  <div className="questionnaire-status">{answered.status}</div>
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Questionnaires;
