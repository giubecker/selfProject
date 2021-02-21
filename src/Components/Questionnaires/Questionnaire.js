import React, {useState, useEffect} from 'react'
import './Questionnaire.css';
import Error from '../Helper/Error';
import axios from 'axios';

export const Questionnaire = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3000/questions')
    .then((response) => {
        setQuestions(response.data);
        //console.log(response.data);
   
    });
}, [])
console.log(questions);
    const [radio, setRadio] = React.useState('');
    const [radiotwo, setRadiotwo] = React.useState('');

    function handleChange({target}) {
        setRadio(target.value);
    }

    function handleChangetwo({target}) {
        setRadiotwo(target.value);
    }


    return (
        <div className='modal'>
        <div className='single-questionnaire'>
         <h1>Questionário 01</h1>
            <div className='form'>
            <div>

{users.map((user) => (
        <div key={user.name}>{user.name}</div>
    ))}
    {radio}
    <label htmlFor=''>
        <input type='radio' value="notebook" checked={radio ==='notebook'} onChange={handleChange} ></input>
        Notebook
    </label>
    <label htmlFor=''>
        <input type='radio' value="smartphone" checked={radio ==='smartphone'} onChange={handleChange} ></input>
        SmartPhone
    </label>
<br/>
    {radiotwo}
    <label htmlFor=''>
        <input type='radio' value="azul" checked={radiotwo ==='azul'} onChange={handleChangetwo} ></input>
        Azul
    </label>
    <label htmlFor=''>
        <input type='radio' value="rosa" checked={radiotwo ==='rosa'} onChange={handleChangetwo} ></input>
        Rosa
    </label>
    
</div>
            </div>
        </div>

        </div>
    )
}
export default Questionnaire;