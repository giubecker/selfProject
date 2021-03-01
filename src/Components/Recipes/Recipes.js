import React from 'react';
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import {Link} from 'react-router-dom'

export const Recipes = () => {
    return (
        <>
            <Sidebar/>
                <div className='container'>
           
            <div className='box'>
            <p>RECEITAS</p>
            <h1>Receituários aprovados:</h1>            
            <Link to='/contacts'><button className='questionnaire-button' >Questionário 01</button></Link>
            <Link to='/questionnaire/1'><button className='questionnaire-button'>Questionário 02</button></Link>
            <br/>
            <br/>
            <h1>Receituários pendentes:</h1> 
            <button className='questionnaire-button'>Questionário 01</button>
            <button className='questionnaire-button'>Questionário 02</button>
            <br/>
            <br/>
            <button className='button'>Solicitar nova receita</button>
            </div>

        </div>
        </>
    )
} 
export default Recipes;
