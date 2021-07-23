import React from 'react';
import LandingPage from './Landing/LandingPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

 function App() {
   return (
     <div className="App">         
         <LandingPage />
     </div>
     );
   }

export default App