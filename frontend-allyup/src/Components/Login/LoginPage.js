import React, { useState } from 'react'
import logo from '../imgs/logo.png'
import './LoginPage.css'
import { BiUser } from 'react-icons/bi'
import { RiLockPasswordFill } from 'react-icons/ri'
import axios from 'axios'
import { Link, useHistory } from "react-router-dom";

export default function LoginPage({isShelter, setIsShelter}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const user = {        
        email: email,
        password: password
    }

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/signin', user)
          .then((response) => {
            console.log(response);               
            history.push('/home')         
          },           
          (error) => {
            console.log(error);
          });
    }

    return (
        <div className="login-container">
            <img src={logo} alt="AllyUp logo" id="login-logo"></img>

            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <BiUser id="user"></BiUser>
                    <input 
                        type="text" 
                        placeholder='Email' 
                        className="user-input" 
                        onChange={e => setEmail(e.target.value)} 
                        value={email}
                        required>

                    </input>
                </div>

                <div className="input-container">
                    <RiLockPasswordFill id="lock"></RiLockPasswordFill>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="user-input"
                        onChange={e => setPassword(e.target.value)} 
                        value={password}
                        required>                            
                    </input>
                </div>

                <input type="submit" className="submit-button" value="Sign In"></input>

                <span id="footer">
                    Don't have an account?&nbsp;
                    <Link to='/signup'><p className="highlight">Register Now</p></Link>
                </span>
            </form>

        </div>
    )
}
