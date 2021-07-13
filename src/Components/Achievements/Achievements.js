import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
import * as FaIcons from "react-icons/fa";
import Sidebar from "../System/Sidebar";
import "./Achievements.css";

export const Achievements = () => {
  const [achievements, setAchievements] = useState({});
  useEffect(() => {
    axios.get("http://localhost:9002/achievements/0").then((response) => {
      setAchievements(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>CONQUISTAS</p>
          <br />
          <div className="row">
            <div className="column-prizes-1">
              <h4> Medalhas</h4>
              <div className="row">
                {achievements.medals &&
                  achievements.medals.map((medal) => (
                    <Link to={`/achievements/medals/${medal.id}`}>
                      <div key={medal.id} className="medal-card ">
                        <div className="column">
                          {(() => {
                            switch (medal.icon) {
                              case "read":
                                return (
                                  <div className="medal-icon">
                                    {" "}
                                    <FaIcons.FaBookReader size="4rem" />{" "}
                                  </div>
                                );
                              case "cook":
                                return (
                                  <div className="medal-icon">
                                    {" "}
                                    <FaIcons.FaCoffee size="4rem" />{" "}
                                  </div>
                                );
                              case "schedule":
                                return (
                                  <div className="medal-icon">
                                    {" "}
                                    <FaIcons.FaBook size="4rem" />{" "}
                                  </div>
                                );
                              default:
                                return <div></div>;
                            }
                          })()}
                          <h5 className="medal-title">{medal.title}</h5>
                          <div className="row stars">
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
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <h4> Troféus</h4>
              <div className="row">
              {achievements.trophies &&
                  achievements.trophies.map((trophy) => (
                    <Link to={`/achievements/trophies/${trophy.id}`}>
                      <div key={trophy.id} className="trophy-card ">
                        <div className="column">

                                  <div className="trophy-icon">
                                    {" "}
                                    <FaIcons.FaTrophy size="6rem" />{" "}
                                  </div>

                          <h5 className="trophy-title">{trophy.title}</h5>
                        </div>
                      </div>
                    </Link>
                  ))}
      
              </div>
            </div>
            <div className="column-prizes-2">
              <div>
                <img
                  className="photo"
                  width="110"
                  src="https://i.ibb.co/VvHM4L2/contacts-00.jpg"
                ></img>
              </div>
              <div className="name">Giuliano Bohn</div>
              <div className="div-progress">
                <ProgressBar color="#000000" variant="custom" now={85} label={`250/300`} />
              </div>
             <div className="row level-line">Nível: <div className="level">{achievements.level}</div></div>
              <Link to="/achievements/ranking">
                <button className="button">Ranking</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Achievements;
