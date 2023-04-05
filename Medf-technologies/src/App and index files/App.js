import React from "react";
import Dh from './3D'
import "./styles.css";
import NavBar from "./components/navbar/Navbar";
import styled from 'styled-components'
import "./App.css";
import Companystats from "./components/Home/Companystats";
import CardContainer from "./components/Home/Ourservices";
import Tools from "./components/Home/Tools";
import About from "./components/Home/About";
import Testimonies from "./components/Home/Testimonies";
import Industries from "./components/Home/Industries";




export default function App() {
 
  return (
    <AppStyle>
         <NavBar/>
    <Dh/>
<Companystats/>
<CardContainer/>
        <Tools/>
        <About/>
        <Testimonies/>
        <Industries/>
    </AppStyle>
  );
}
const AppStyle= styled.div`

display:flex;
flex-direction:column;



`
