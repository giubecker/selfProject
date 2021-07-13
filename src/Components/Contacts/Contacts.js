import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import Sidebar from "../System/Sidebar";
import "./Contacts.css";

export const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/contacts").then((response) => {
      setContacts(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>EQUIPE & MÉDICOS</p>
          <br />
          <div className="row contacts-row">
            <div className="column contacts">
              {" "}
              {contacts.map((contact) => (
                <Link to={`/contacts/contact/${contact.id}`}>
                  <div key={contact.id} className="row card">
                    <div className="card-column1">
                      <img className="image" src={contact.image}></img>
                    </div>
                    <div className="card-column2">
                      {contact.name}
                      <br /> <FaIcons.FaGraduationCap />  {contact.ocupation} <br /> <FaIcons.FaPhone />{contact.phone}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="column contacts">
              {" "}
              {contacts.map((contact) => (
                <Link to={`/contacts/contact/${contact.id}`}>
                  <div key={contact.id} className="row card">
                    <div className="card-column1">
                      <img className="image" src={contact.image}></img>
                    </div>
                    <div className="card-column2">
                      {contact.name}
                      <br /> <FaIcons.FaGraduationCap />  {contact.ocupation} <br /> <FaIcons.FaPhone />{contact.phone}
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
export default Contacts;
