import React from "react";

/// React router dom
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Landing from "./screens/Landing";
import Recover from "./screens/Recover";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";
import Splash from "./screens/Splash";
import Transactions from "./screens/Transactions";
import Deposit from "./screens/Deposit"; 
import Withdraw from "./screens/Withdraw";
import ThankYou from "./screens/ThankYou";
import VerifyEmail from "./screens/VerifyEmail";
import Settings from "./screens/Settings";
 

const App = () => {
   
  return (

    <Router>
           
      
      <Routes>
        <Route exact path="/" element={<Splash/>}/>
        <Route exact path="/start" element={<Landing/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/recover" element={<Recover/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/transaction" element={<Transactions/>}/>
        <Route exact path="/deposit" element={<Deposit/>}/>
        <Route exact path="/withdraw" element={<Withdraw/>}/>
        <Route exact path="/mtcfund" element={<Dashboard/>}/>
        <Route exact path="/mtcforecast" element={<Dashboard/>}/>
        <Route exact path="/mtcreview" element={<Dashboard/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/thankyou" element={<ThankYou/>} />
        <Route exact path="/settings" element={<Settings/>} />
        <Route path="*" element={<Landing/>}/>
      </Routes>
            
          
    </Router>

    
  );
};

export default App;
