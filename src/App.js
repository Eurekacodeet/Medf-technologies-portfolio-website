import React from "react";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import "./App.css";

import Mainapp from './Mainapp'
import Aboutus from "./Components/Aboutus/Aboutus";
import Contactus from "./Components/Contact us/Contactus";
import PageNotFound from "./Components/Home/NotFound";
import NavBar from "./Components/navbar/NavBar";
import AllPortfolioProjects from "./Components/Home/Portfolio/AllPortfolioProjects";
import AllBlogs from "./Components/Home/Blogs/AllBlogs";

// import ReactGA from 'react-ga';


export default function App() {
// ReactGA.initialize('UA-000000-01');
// const trackPageView = () => {
//   ReactGA.pageview(window.location.pathname + window.location.search);
// };
// useEffect(() => {
//   trackPageView();
// }, []);
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Mainapp />} />
          <Route path='/ourteam' element={<Aboutus />} />
          <Route path='/Contact' element={<Contactus />} />
          <Route path='/allprojects' element={<AllPortfolioProjects />} />
          <Route path='/allblogs' element={<AllBlogs />} />


          <Route path='*' element={<PageNotFound />} />
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
