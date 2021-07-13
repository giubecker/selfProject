import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";
import * as FaIcons from "react-icons/fa";
import "./Prize.css";

export const Trophy = () => {
  const history = useHistory();
  const { id } = useParams();
  const [trophy, setTrophy] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:9002/trophies/${id}`).then((response) => {
      setTrophy(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box-prize">
          <br />

    <div className="column-prize column">
    <h4>Troféu</h4>
 <br/>
 <div className="trophy-icon">
                                    {" "}
                                    <FaIcons.FaTrophy size="8rem" />{" "}
                                  </div>
 <h5>{trophy.description} </h5>


 <button onClick={() => history.goBack()} className="button"> Ok</button>

  </div>


        </div>
      </div>
    </>
  );
};
export default Trophy;
