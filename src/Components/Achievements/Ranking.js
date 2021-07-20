import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";
import * as FaIcons from "react-icons/fa";
import "./Ranking.css";

export const Ranking = () => {
  const history = useHistory();
  const [ranking, setRanking] = useState([]);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:9002/profiles").then((response) => {
      setRanking(response.data);
      console.log(response.data);
    });
  }, [visible]);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box-ranking">
          <p>RANKING</p>
          <br />

          {ranking
            .sort((a, b) => (a.points > b.points ? -1 : 1))
            .map((position, index) =>
              position.showPoints ? (
                <div className="column-ranking column">
                  <div className="ranking-card row">
                    <div className="ranking-column1">{index + 1}º</div>
                    <div className="ranking-column2">
                      {position.name} <br /> {position.points} pontos
                    </div>
                  </div>
                  <br />
                </div>
              ) : null
            )}

          <div className="position">
            <button
              className="show-button"
              onClick={() => {
                setVisible(!visible);
                axios
                  .patch("http://localhost:9002/profiles/1", {
                    showPoints: visible,
                  })
                  .then((response) => {
                    console.log(response);
                  });
              }}
            >
              {" "}
              {visible ? (
                <FaIcons.FaEyeSlash color="#888a8a" size="2rem" />
              ) : (
                <FaIcons.FaEye color="#3fbcb2" size="2rem" />
              )}{" "}
            </button>{" "}
            Minha pontuação
          </div>

          <button className="button" onClick={() => history.goBack()}>
            {" "}
            Ok
          </button>
        </div>
      </div>
    </>
  );
};
export default Ranking;
