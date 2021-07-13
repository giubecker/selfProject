import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../System/Sidebar";
import "./Exams.css";
import { Line } from "react-chartjs-2";

export const Exams = () => {
  const [exams, setExams] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9002/exams`).then((response) => {
      setExams(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>GRÁFICOS DE EVOLUÇÃO</p>
          <br />
          <div className="row">
            <div className="column">
              {exams.map((exam) => (
                <div key={exam.id} className="row exam-card">
                  <div className="column graphic-description">
                    Gráfico
                    <Line
                      data={{
                        labels: exam.labels,
                        datasets: [
                          {
                            label: exam.label,
                            data: exam.data,
                            backgroundColor: ["rgba(72, 192, 192,0.6)"],
                            borderWidth: 4,
                          },
                        ],
                      }}
                    />
                    <br />
                  </div>
                  <div >
                    <div className="description">
                    Descrição
                      {" "}
                      <h5> {exam.description}</h5> Situação:{" "}
                      <span className="status"> {exam.status}</span>
                    </div>
                    <a href={exam.link} target="_blank">
                      <button className="button">Exame Completo</button>
                      </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Exams;
