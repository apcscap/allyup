import React, {useState, useEffect} from 'react'
import LandingPage from './Landing/LandingPage'
import HomePage from './Home/HomePage'
import LoginPage from './Login/LoginPage'
import SignupPage from './Signup/SignupPage'
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
          </Switch>                 
        </div>
      </BrowserRouter>
     );
   }

export default App