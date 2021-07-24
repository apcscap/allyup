import React, {useState} from 'react'
import logo from '../imgs/logo.png'
import { BiUser } from 'react-icons/bi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai'
import {RiHomeHeartFill} from 'react-icons/ri'
import { SiGooglestreetview } from 'react-icons/si'
import {AiFillPicture } from 'react-icons/ai'
import axios from 'axios'

export default function SignupPage({isShelter, setIsShelter}) {

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shelterType, setShelterType] = useState('')
    const [address, setAddress] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const user = {
        userName: userName,
        email: email,
        password: password, 
        shelterType: shelterType,
        isShelter: isShelter,
        address: address,
        imgUrl: imgUrl
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/signup', user)
          .then((response) => {
            console.log(response);
          }, (error) => {
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
                        placeholder='Username' 
                        className="user-input"
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        >
                        
                    </input>
                </div>

                <div className="input-container">
                    <AiOutlineMail id="lock"></AiOutlineMail>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="user-input"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        >
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
                        >

                    </input>
                </div>

                {isShelter && <div className="input-container">
                    <RiHomeHeartFill id="lock"></RiHomeHeartFill>
                    <input 
                        type="text" 
                        placeholder="Shelter Type" 
                        className="user-input"
                        onChange={e => setShelterType(e.target.value)}
                        value={shelterType}
                        >

                    </input>
                </div>}

                {isShelter && <div className="input-container">
                    <SiGooglestreetview id="lock"></SiGooglestreetview>
                    <input 
                        type="text" 
                        placeholder="Address" 
                        className="user-input"
                        onChange={e => setAddress(e.target.value)}
                        value={address}>

                    </input>
                </div>}

                <div className="input-container">
                    <AiFillPicture id="lock"></AiFillPicture>
                    <input 
                        type="text" 
                        placeholder="Img Url" 
                        className="user-input"
                        onChange={e => setImgUrl(e.target.value)}
                        value={imgUrl}>

                    </input>
                </div>

                
                <input 
                    type="submit" 
                    className="submit-button" 
                    value="Register">
                </input>

                <span id="footer">
                    Already have an account?&nbsp;
                    <Link to='/login'><p className="highlight">Sign in</p></Link>
                </span>
            </form>

        </div>
    )
}
