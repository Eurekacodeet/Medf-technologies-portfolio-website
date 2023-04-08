import React from "react";


import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import "./App.css";

import Mainapp from './Mainapp'

export default function App() {
 
  return (
<div>  
  {/* <NavBar/> */}
     <Router>
     <Routes>
     
     
               <Route path='/' element={<Mainapp/>}/>
               {/* <Route path='/aboutus' element={user ?<Aboutroute/>: <Login/>} />
               <Route path='/services' element={user ?<Servicesroute/>: <Login/>} />
               <Route path='/register' element={<Register/>} />
               <Route path='/contact' element={user ?<Contactroute/>: <Login/>} />
     
     
               <Route path='/login' element={user ?<Home/>: <Login/>} /> */}
     
               {/* <Route path='/registeruser' element={''} />
               <Route path='/main' element={'<Layout><Posts/></Layout>'} />
               <Route path='/videos' element={'<Layout><VideoPage/></Layout>'} />
               <Route path='/jobs' element={'<Layout><JobPage/></Layout>'} /> */}
     </Routes>
     </Router>     
     </div>
  );
}

