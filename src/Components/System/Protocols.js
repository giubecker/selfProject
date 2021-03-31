import React, { useState, useEffect } from "react";
import Toolbar from "../System/Toolbar";
import Sidebar from "../System/Sidebar";
import axios from "axios";
import { Accordion, AccordionTab } from "primereact/accordion";

export const Protocols = () => {
  const [protocols, setProtocols] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/protocols").then((response) => {
      setProtocols(response.data);
      //console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>PROTOCOLOS</p>
          <br />
          <div>
            {protocols.map((protocol, index) => (
              <div key={protocol.id} className="doubts-container">
                <Accordion>
                  <AccordionTab header={protocol.title}>
                    <a>{protocol.description}</a>
                  </AccordionTab>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Protocols;
