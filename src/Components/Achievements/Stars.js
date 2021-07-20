import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Sidebar from "../System/Sidebar";
import * as FaIcons from "react-icons/fa";
import "./Prize.css";

export const Stars = (stars) => {


  return (
    <>
{(() => {
                switch (stars) {
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
    </>
  );
};
export default Stars;
