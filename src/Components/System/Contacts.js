import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Toolbar from '../System/Toolbar';
import Sidebar from '../System/Sidebar';
import './Contacts.css';
import Students from "./Contacts";

export const Contacts = () => {
    const initialValue  = {
        name: '',
        ocupation: '',
        phone: '',
        email: '',
    }
    const history = useHistory();
    const [valores , setValores] = useState({});
    const [values , setValues] = useState({});
console.log(values);
    function onChange (event){
        const {name, value, id} = event.target;
        //const {id, valor} = event.target;
        // console.log ({name, value});   
        // values[name] = value;
        setValues({...values, [name]: value});
       // setValores({...valores, [id]: valor });
    }

    function onSubmit(event) {
        event.preventDefault();
        axios.post( 'http://localhost:9002/answer' , values).then((response) => {history.push('/questionnaires')});
    }
    // const ideas = [
    //     {"title": "First idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
    //     {"title": "Second idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"},
    //     {"title": "Third idea", "premises": ["Premise one", "Premise two"], "conclusion": "Example conclusion"}
    //   ]

      const [contacts, setContacts] = useState([]);
      useEffect(() => {
        axios.get('http://localhost:9002/contacts')
        .then((response) => {
            setContacts(response.data);
            console.log(response.data);

       
        });
    }, [])



    return (
        <>
            <Sidebar/>
                <div className='container'>
           
            <div className='box'>
            <p>EQUIPE & MÉDICOS</p>

<form onSubmit={onSubmit}>
    <div>
    {contacts.map((question, index) => (
<div key={index}>        <label key={question.id} htmlFor="title">{question.title}</label>) <br/>
        <input key={question.title} id={question.id} name={question.title} type='text' onChange={onChange}/></div>))}
    </div>
    <div>
        <button type="submit">Salvar</button>
    </div>
</form>

            </div>

        </div>
        </>
    )
}
export default Contacts;