import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
import "./Answered.css";
import Sidebar from "../System/Sidebar";

export const AnsweredQyestionnaire = () => {
  const { id } = useParams();
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:9002/answereds/${id}`).then((response) => {
      setAnswers(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />

      <div className="container">
        <div className="box">
<div className="column answer-column">
<p>QUESTIONÁRIOS</p>
        <br/>
<h4>{answers.title}</h4>
<br/>
<div>
<p>Resultado:</p>
<div className="column answer-content">
<div className="row points">Pontos: {answers.points}</div>
<div className="observations"><span>Observações: </span><br/><div className="obs-box">{answers.observation}</div></div>
</div>

</div>
</div>
<Link to="/questionnaires">
                  <button className="button"> Ok </button>
                </Link>
        </div>
      </div>
    </>
  );
};
export default AnsweredQyestionnaire;
