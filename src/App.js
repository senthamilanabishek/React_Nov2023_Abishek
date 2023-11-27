import React from 'react';
import Home2 from './home2/home2.js';
import Brid from './component/grid.js';
import Registration from './registration/registration.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './admin/Admin.js';
function App() {
  return (
    <Router>
        <div className="App" style={{width:"100vw",height:"100vh"}}>
           <Routes>
            <Route path="/" element={<Home2/>}></Route>
            <Route path="/login" element={<Brid/>}></Route>
            <Route path="/Register" element={<Registration/>}/>
            <Route path="/Dash" element={<Admin/>}/>

           </Routes>
        </div>
    </Router>
  );
}

export default App;
