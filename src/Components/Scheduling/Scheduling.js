import React, { useEffect, useState } from "react";
import Toolbar from "../System/Toolbar";
import Sidebar from "../System/Sidebar";
import { Link } from "react-router-dom";
import Schedule from "./Schedule";
import axios from "axios";
import "./Scheduling.css";

export const Scheduling = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/reservados").then((response) => {
      setSchedules(response.data);
      //console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="questionnaires box">
          <p>AGENDAMENTOS</p>
          <br />
          <h1>Meus agendamentos</h1>
          {schedules.map((schedule, index) => (
            <Link key={schedule.id} to="/scheduling/scheduled/1">
              <button className="questionnaire-button">
                <div className="dateTime">{schedule.horário}</div>
                <div className="detalhes">{schedule.observações}</div>
              </button>
            </Link>
          ))}
          <br />
          <br />
          <Link to="/scheduling/schedule/3">
            <button className="questionnaire-button">NOVO AGENDAMENTO</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Scheduling;
