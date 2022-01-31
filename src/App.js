import React from "react";

/// React router dom
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
import Landing from "./screens/Landing";
 
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import Profile from "./screens/Profile";

 
 

const App = () => {
   
  return (

    <Router>
           
      
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/recover" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/transaction" element={<Dashboard/>}/>
        <Route exact path="/deposit" element={<Dashboard/>}/>
        <Route exact path="/withdraw" element={<Dashboard/>}/>
        <Route exact path="/mtcfund" element={<Dashboard/>}/>
        <Route exact path="/mtcforecast" element={<Dashboard/>}/>
        <Route exact path="/mtcreview" element={<Dashboard/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Landing/>}/>
      </Routes>
            
          
    </Router>

    
  );
};

export default App;
