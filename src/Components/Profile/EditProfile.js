import React from 'react';
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import './EditProfile.css';

export const EditProfile = () => {
    return (
        <>
            <Sidebar/>
                <div className='container'>
           
            <div className='box'>
            <p>MEU PERFIL</p>
            <a>Editar Perfil</a>
            <br/>
<div className="profile-info">
<h2>Pessoal</h2>
<br/>
            <h3>Nome:</h3> <input className="input" type="text"></input>
            <br/>
            <h3>Idade:</h3>
            <br/>
            <h2>Contato</h2>
            <h3>Telefone:</h3>
            <h3>E-mail:</h3>
            <h2>Outros</h2>
            <h3>Contato de Emergência:</h3>
            <h3>Telefone:</h3>
            <h3>Tipo Sanguíneo:</h3>
            <h3>Medicamentos:</h3>
    </div>
            <br/>
            <button className="button">Editar Perfil</button>
            </div>

        </div>
        </>
    )
}
export default EditProfile;
