import React from 'react'
import logo from '../imgs/logo.png'
import './LoginPage.css'
import { BiUser } from 'react-icons/bi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from "react-router-dom";

export default function LoginPage({isShelter, setIsShelter}) {

    return (
        <div className="login-container">
            <img src={logo} alt="AllyUp logo" id="login-logo"></img>

            <form>
                <div className="input-container">
                    <BiUser id="user"></BiUser>
                    <input type="text" placeholder='Email' className="user-input"></input>
                </div>

                <div className="input-container">
                    <RiLockPasswordFill id="lock"></RiLockPasswordFill>
                    <input type="password" placeholder="Password" className="user-input"></input>
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
