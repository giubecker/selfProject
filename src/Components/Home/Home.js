import React, { useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import * as FaIcons from "react-icons/fa";
import "./Home.css";

export const Home = () => {
  const [notifications, setNotifications] = useState([]);
  const [schedule, setSchedule] = useState({});
  const [home, setHome] = useState({});
  const [achievements, setachievements] = useState({});
  useEffect(() => {
    axios.get("http://localhost:9002/reserved/10").then((response) => {
      setSchedule(response.data);
    });
    axios.get("http://localhost:9002/notifications").then((response) => {
      setNotifications(response.data);
      console.log(notifications);
    });
    axios.get("http://localhost:9002/home").then((response) => {
      setHome(response.data);
      console.log(notifications);
    });
    axios.get("http://localhost:9002/achievements/0").then((response) => {
      setachievements(response.data);
      console.log(notifications);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>INÍCIO</p>
          <div className="home">
            <div className="column home1">
              <span className="title">Progresso no protocolo</span>
              <br />
              <div className="row progress-home">
                <ProgressBar
                  animated
                  now={home.generalProgress}
                  label={`${home.generalProgress}%`}
                />
              </div>
              <span className="title">Perda de peso</span>
              <br />
              <div className=" row progress-home">
                <ProgressBar animated now={home.weightLoss} label={`50%`} />
              </div>
              <span className="title">Próxima consulta</span>
              <br />
              <Link to="/scheduling">
                <div className="home-card column">
                  <div className="schedule-card-title">{schedule.type}</div>
                  <div className="schedule-card-date"> {schedule.date}</div>
                </div>
              </Link>

              <span className="title">Objetivo:</span>
              <div className="home-card">
                <FaIcons.FaChild size="3rem" />
                <h5>{home.objective}</h5>
              </div>
            </div>
            <div className="column home2">
              <span className="title">Última conquista</span>
              <Link to="/achievements">
                <div className="home-card">
                  {home.AchievementTitle}
                  {(() => {
                    switch (home.AchievementStars) {
                      case 1:
                        return (
                          <div>
                            {" "}
                            <FaIcons.FaStar color="#3fbcb2" size="2.5rem" />
                            <FaIcons.FaRegStar color="#3fbcb2" size="2.5rem" />
                            <FaIcons.FaRegStar color="#3fbcb2" size="2.5rem" />
                          </div>
                        );
                      case 2:
                        return (
                          <div>
                            {" "}
                            <FaIcons.FaStar color="#3fbcb2" size="2.5rem" />
                            <FaIcons.FaStar color="#3fbcb2" size="2.5rem" />
                            <FaIcons.FaRegStar color="#3fbcb2" size="2.5rem" />
                          </div>
                        );
                      case 3:
                        return (
                          <div>
                            <FaIcons.FaStar color="#3fbcb2" size="2.5rem" />
                            <FaIcons.FaStar color="#3fbcb2" size="2.5rem" />
                            <FaIcons.FaStar color="#3fbcb2" size="2.5rem" />
                          </div>
                        );
                      default:
                        return <div></div>;
                    }
                  })()}
                </div>
              </Link>
              <br />
              <span className="title">Últimas notificações</span>

              {notifications.slice(0, 3).map((notification) => (
                <Link key={notification.id} to={`${notification.link}`}>
                  <div className="home-card">
                    <div className="row notification0">
                      <div className="column notification1">
                        {(() => {
                          switch (notification.icon) {
                            case 0:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaRegFileAlt
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 1:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaSignal
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 2:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaRegCopy
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 3:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaBook
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 4:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaRegCalendarAlt
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 5:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaTrophy
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 6:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaRegCommentDots
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            case 7:
                              return (
                                <div className="notification-icon-home">
                                  {" "}
                                  <FaIcons.FaTrophy
                                    size="3rem"
                                    color="#686868"
                                  />{" "}
                                </div>
                              );
                            default:
                              return null;
                          }
                        })()}
                      </div>{" "}
                      <div className="column notification2">
                        <h5>{notification.note}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
