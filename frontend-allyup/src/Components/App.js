import React from 'react';
import LandingPage from './Landing/LandingPage'
import HomePage from './Home/HomePage'
import LoginPage from './Login/LoginPage'
import SignupPage from './Signup/SignupPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

 function App() {
   return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/"><LandingPage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/signup"><SignupPage /></Route>
            <Route path="/home"><HomePage /></Route>
          </Switch>                 
        </div>
      </BrowserRouter>
     );
   }

export default App