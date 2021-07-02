import React, { useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

export const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9002/profiles").then((response) => {
      setProfiles(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="container">
        <div className="box">
          <p>MEU PERFIL</p>
          <br />
       
{profiles.map((profile) => (
  <div className="profile-info">
            <h4>Pessoal</h4>
            <h5>Nome Completo: {profile.nome}</h5>
            <h5>Idade: {profile.idade}</h5>
            <h4>Contato</h4>
            <h5>Telefone: {profile.telefone}</h5>
            <h5>E-mail: {profile.email}</h5>
            <h5>Endereço: {profile.end}</h5>
            <h5>CEP: {profile.cep}</h5>
            <h4>Outros</h4>
            <h5>Contato de Emergência: {profile.contatoEmergencia}</h5>
            <h5>Telefone: {profile.telefoneEmergencia}</h5>
            <h5>Tipo Sanguíneo: {profile.tipoSanguineo}</h5>
            <h5>Medicamentos: {profile.medicamentos}</h5>
          </div>
))}
          <br />
          <Link to="/editprofile">
                {" "}
                <button className="button">Editar Perfil</button>
              </Link>{" "}
         
        </div>
      </div>
    </>
  );
};
export default Profile;
