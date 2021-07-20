import React, { useState, useEffect } from "react";
import Sidebar from "../System/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios.get("http://localhost:9002/profiles/1").then((response) => {
      setProfile(response.data);
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
          <div className="profile-info">
            <h4>Pessoal</h4>

            <div className="row profile-row">
              <label>Nome Completo:&nbsp;</label>
              {profile.name}
            </div>
            <div className="row profile-row">
              <label>Idade:&nbsp;</label>
              {profile.age}
            </div>
            <br />
            <h4>Contato:&nbsp; </h4>
            <div className="row profile-row">
              <label>Telefone:&nbsp;</label>
              {profile.phone}
            </div>
            <div className="row profile-row">
              <label>Email:&nbsp;</label>
              {profile.email}
            </div>
            <div className="row profile-row">
              <label>Endereço:&nbsp;</label>
              {profile.address}
            </div>
            <div className="row profile-row">
              <label>CEP:&nbsp;</label>
              {profile.zipCode}
            </div>
            <br />
            <h4>Outros</h4>
            <div className="row profile-row">
              <label>Contato de Emergência:&nbsp;</label>
              {profile.contatoEmergencia}
            </div>
            <div className="row profile-row">
              <label>Telefone:&nbsp;</label>
              {profile.emergencyPhone}
            </div>
            <div className="row profile-row">
              <label>Tipo sanguíneo:&nbsp;</label>
              {profile.bloodType}
            </div>
            <div className="row profile-row">
              <label>Medicamentos:&nbsp;</label>
              {profile.drugs}
            </div>
            <div className="row profile-row">
              <label>Observações:&nbsp;</label>
              {profile.notes}
            </div>
          </div>
          <br />
          <Link to="/editprofile/1">
            {" "}
            <button className="button">Editar Perfil</button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};
export default Profile;
