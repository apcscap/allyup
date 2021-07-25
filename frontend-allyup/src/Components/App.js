import React, {useState, useEffect} from 'react'
import LandingPage from './Landing/LandingPage'
import HomePage from './Home/HomePage'
import LoginPage from './Login/LoginPage'
import SignupPage from './Signup/SignupPage'
import RecordsPage from './Records/RecordsPage'
import ProfilePage from './Profile/ProfilePage'
import MissionPage from './Mission/MissionPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


 function App() {

    const [isShelter, setIsShelter] = useState(true);

   return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/"><LandingPage isShelter={isShelter} setIsShelter={setIsShelter}/></Route>
            <Route path="/login"><LoginPage isShelter={isShelter} setIsShelter={setIsShelter}/></Route>
            <Route path="/signup"><SignupPage isShelter={isShelter} setIsShelter={setIsShelter}/></Route>
            <Route path="/home"><HomePage /></Route>
            <Route path="/records"><RecordsPage /></Route>
            <Route path="/profile"><ProfilePage /></Route>
            <Route path="/mission"><MissionPage /></Route>
          </Switch>
        </div>
      </BrowserRouter>
     );
   }

export default App