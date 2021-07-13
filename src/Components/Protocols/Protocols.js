import React, { useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import axios from "axios";
import { Accordion, AccordionTab } from "primereact/accordion";

export const Protocols = () => {
  const [protocols, setProtocols] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/protocols").then((response) => {
      setProtocols(response.data);
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
          <br />
          <div className="meu-protocolo">
            <p>MEU PROTOCOLO</p>
            Reversão de Obesidade
            <ul>
              <li>
                {" "}
                Fase 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </li>
              <li>
                {" "}
                Fase 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </li>
              <li>
                {" "}
                Fase 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </li>
              <li>
                {" "}
                Fase 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </li>
              <li>
                {" "}
                Fase 5: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </li>
            </ul>
          </div>
          {/* <div className="row protocol-detail">
  <div className="column">
  <div className="row"> fase 1:<br/> <br/></div>
  <div className="row"> fase 2:<br/><br/> </div>
  <div className="row"> fase 3:<br/><br/> </div>
  <div className="row"> fase 4:<br/> <br/></div>
  <div className="row"> fase 5:<br/><br/> </div>
</div>              
  <div className="column">
  <div className="row"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
  <div className="row"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
  <div className="row"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
  <div className="row"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
  <div className="row"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</div>
</div>
</div> */}
        </div>
      </div>
    </>
  );
};

export default Protocols;
