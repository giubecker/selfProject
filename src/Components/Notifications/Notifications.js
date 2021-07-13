import Sidebar from "../System/Sidebar";
import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Notifications.css";

export const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9002/notifications").then((response) => {
      setNotifications(response.data);
      console.log(notifications);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>NOTIFICAÇÕES</p>
          <br />
          <div className="column notifications">
            {notifications.map((notification) => (
              <Link key={notification.id} to={`${notification.link}`}>
                <div className="notification-card">
                  <div className="row notification0">
                    <div className="column notification1">
                      {(() => {
                        switch (notification.icon) {
                          case 0:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaRegFileAlt
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 1:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaSignal
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 2:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaRegCopy
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 3:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaBook
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 4:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaRegCalendarAlt
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 5:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaTrophy
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 6:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaRegCommentDots
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          case 7:
                            return (
                              <div className="notification-icon">
                                {" "}
                                <FaIcons.FaTrophy
                                  size="4rem"
                                  color="#686868"
                                />{" "}
                              </div>
                            );
                          default:
                            return <div></div>;
                        }
                      })()}
                    </div>{" "}
                    <div className="column notification2">{notification.note}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Notifications;
