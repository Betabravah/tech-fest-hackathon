import React, { useState } from 'react';
import './style.css'
function LoginForm() {

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        
    }

    const handleSubmit  = () => {
        console.log(email,password);
    }


    return (
        <div className="login-form">
            <div className='login-header'>Login to your account</div>
            <div className="login-form-body">

                <div className="email label-input">
                    <label className="label" for="email">Email </label>
                    <input type="email" id="email" className="input" value={email} onChange={(e) => handleInputChange(e)} placeholder="email" />
                </div>
                <div className="password label-input">
                    <label className="label" for="password">Password </label>
                    <input className="input" type="password" id="password" value={password} onChange={(e) => handleInputChange(e)} placeholder="password" />
                </div>
            
            </div>
            <div class="login-button">
                <button type="submit" class="btn" onClick={(e) => handleSubmit(e)}>Login</button>
            </div>
            <div className='already'>
                <p>Don't have an account?</p>
                <a className='login'>Login</a>
            </div>
        </div>
    )
}
export default LoginForm;