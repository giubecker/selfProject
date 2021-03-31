import React from "react";
import Toolbar from "../System/Toolbar";
import Sidebar from "../System/Sidebar";
import "./Library.css";
import { ScrollPanel } from "primereact/scrollpanel";
import { Card } from "primereact/card";
import Capa from "../../assets/capa.png";

export const LibraryVideo = () => {
  const header = (
    <img alt="Card" src={Capa} style={{ width: "200px", height: "200px" }} />
  );
  const title = <span>Título do video</span>;
  const footer = <span>Descrição do video</span>;

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>AGENDAMENTOS</p>
          <br />
          <div className="row">
            <div className="library-container">
              <br />
              Videos
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LibraryVideo;
