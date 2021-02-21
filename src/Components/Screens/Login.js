import React from 'react'
import './Login.css';
import LoginForm from '../Login/LoginForm';
import {Navigate, Route, useHistory} from 'react-router-dom';
import UserContext from '../../UserContext';

export const Login = () => {
    const {login} = React.useContext(UserContext);
    let history = useHistory();

    if (login ===true) return  history.push("/home");
    return (
        <div className='container-login'>
            <div className='box-login'>
            LOGIN
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;
