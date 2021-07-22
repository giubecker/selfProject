import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";
import * as FaIcons from "react-icons/fa";
import "./Prize.css";
import Stars from "./Stars"
import "./Achievements.css";

export default function MedalModal({toggleModal, modal, id}) {
  
    const history = useHistory();
    //const { id } = useParams();
    const [medal, setMedal] = useState([]);
    useEffect(() => {
      axios.get(`http://localhost:9002/medals/${id}`).then((response) => {
        setMedal(response.data);
      });
    }, []);


  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="box-prize modal-content">
          <br />

          <div className="column-prize column">
            <h4>Medalha</h4>
            <br />
            {(() => {
              switch (medal.icon) {
                case "read":
                  return (
                    <div className="medal-icon">
                      {" "}
                      <FaIcons.FaBookReader size="5rem" />{" "}
                    </div>
                  );
                case "cook":
                  return (
                    <div className="medal-icon">
                      {" "}
                      <FaIcons.FaCoffee size="5rem" />{" "}
                    </div>
                  );
                case "schedule":
                  return (
                    <div className="medal-icon">
                      {" "}
                      <FaIcons.FaBook size="5rem" />{" "}
                    </div>
                  );
                default:
                  return <div></div>;
              }
            })()}
            <h5 className="prize-title">{medal.title}</h5>
            <div className="row stars">
            {/* <Stars stars={medal.stars} /> */}
              {(() => {
                switch (medal.stars) {
                  case 1:
                    return (
                      <div>
                        {" "}
                        <FaIcons.FaStar size="2.5rem" />
                        <FaIcons.FaRegStar size="2.5rem" />
                        <FaIcons.FaRegStar size="2.5rem" />
                      </div>
                    );
                  case 2:
                    return (
                      <div>
                        {" "}
                        <FaIcons.FaStar size="2.5rem" />
                        <FaIcons.FaStar size="2.5rem" />
                        <FaIcons.FaRegStar size="2.5rem" />
                      </div>
                    );
                  case 3:
                    return (
                      <div>
                        <FaIcons.FaStar size="2.5rem" />
                        <FaIcons.FaStar size="2.5rem" />
                        <FaIcons.FaStar size="2.5rem" />
                      </div>
                    );
                  default:
                    return <div></div>;
                }
              })()}
            </div>
            <h5>{medal.description}</h5>
            <br />
            <h5>*consiga 3 estrelas para desbloquear o troféu</h5>

            <button className="button" onClick={toggleModal}>
              {" "}
              Ok
            </button>
          </div>
        </div>
        </div>
      )}

    </>
  );
}