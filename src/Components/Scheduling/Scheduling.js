import React, { useEffect, useState } from "react";
import Sidebar from "../System/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Scheduling.css";

export const Scheduling = () => {
  const [schedules, setSchedules] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/reserved").then((response) => {
      setSchedules(response.data);
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
            <Link key={schedule.id} to={`/scheduling/scheduled/${schedule.id}`}>
              <button className="questionnaire-button">
                <div className="dateTime">{schedule.date}</div>
                <div className="type">{schedule.type}</div>
              </button>
            </Link>
          ))}
          <br />
          <br />
          <Link to="/scheduling/new">
            <button className="questionnaire-button">NOVO AGENDAMENTO</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Scheduling;
