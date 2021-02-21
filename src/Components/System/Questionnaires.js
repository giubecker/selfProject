import React from 'react'
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import './Questionnaires.css';
import Questionnaire from '../Questionnaires/Questionnaire';

export const Questionnaires = () => {
    const [modalQuestionnaire, setModalQuestionnaire] = React.useState();
    

    return (
        <>
        <Sidebar/>
        <div className='container'>
           
            <div className='questionnaires box'>
            <p>QUESTIONÁRIOS</p>
            <br/>
            <h1>Questionários para responder:</h1>            
            <button className='questionnaire-button' >Questionário 01</button>
            <button className='questionnaire-button'>Questionário 02</button>
            <br/>
            <br/>
            <h1>Questionários respondidos:</h1> 
            <button className='questionnaire-button'>Questionário 01</button>
            <button className='questionnaire-button'>Questionário 02</button>
            </div>
            <Questionnaire/>
        </div>
        </>
    )
}
export default Questionnaires;
