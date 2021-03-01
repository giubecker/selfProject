import React, {useState} from 'react'
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import {Link} from 'react-router-dom';
import Schedule from './Schedule';
import './Scheduling.css';

export const Scheduling = () => {
    return (
        <>
            <Sidebar/>
                <div className='container'>

                <div className='questionnaires box'>
            <p>AGENDAMENTOS</p>
            <br/>
            <h1>Meus agendamentos</h1>            
            <Link to='/scheduling/schedule/1'><button className='questionnaire-button' ><div className="dateTime">23/10/2021<br/> 10:00</div><div className="detalhes">Descrição 1</div></button></Link>
            <Link to='/scheduling/schedule/2'><button className='questionnaire-button'><div className="dateTime">03/04/2021<br/> 13:00</div><div className="detalhes">Descrição 2</div></button></Link>
            <br/>
            <br/>
            <Link to='/scheduling/schedule/3'><button className='questionnaire-button'>NOVO AGENDAMENTO</button></Link>
            </div>
        </div>
        </>
    )
}
export default Scheduling;