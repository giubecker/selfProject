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
    axios.get("http://localhost:9002/ranking").then((response) => {
      setRanking(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box-ranking">
          <p>RANKING</p>
          <br />
         
{
  ranking.map(position => (
    <div className="column-ranking column">
 <div className="ranking-card row">
 <div className="ranking-column1">{position.position}</div>
 <div className="ranking-column2">{position.name} <br/> {position.points} pontos</div>
 </div>
 <br/>

  </div>
  ))
} 


  <div className="position">{visible ?<button className="show-button" onClick={()=> {setVisible(!visible)}}>  <FaIcons.FaEye color="#888a8a" size="2rem" /></button> : <button className="show-button" onClick={()=> {setVisible(!visible)}}>  <FaIcons.FaEye color="#3fbcb2" size="2rem" /></button> } Minha pontuação</div>

 <button className="button" onClick={() => history.goBack()}> Ok</button>

        </div>
      </div>
    </>
  );
};
export default Ranking;
