import React from 'react'
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import V2 from './V2.js'
import V3 from './V5.js'
import {OrbitControls} from "@react-three/drei"
import styled from 'styled-components'


    
 const Dh = () => {
      return (
        <ContStyle>
            <PStyle>
        <p>Obtain High Quality Webapps</p>
        <h1>Full Stack Web Development</h1>
        <LineStyle></LineStyle>
        <p>We help you to grow you business by developing awesome and interactive web apps </p>
        </PStyle>
       <DhStyle>
      
            <Canvas className="flex flex-col bg-black">
        <OrbitControls/>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.2}/>
        <V3 />
      </Canvas>
      </DhStyle>
      </ContStyle>
      )
    }
    
    export default Dh
    const DhStyle= styled.div`

width:50vw;
height:65vh;
float:right;
margin:4vh 5vw 0vh 0;


`
const PStyle=styled.div`
color:white;
padding-left:6vw;
padding-right:6vw;
word-wrap: break-word; 
h1{
word-wrap: break-word; 
/* width:20vw; */
}
`
const ContStyle= styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-around;

    padding-bottom: 10vh;

`
const LineStyle=styled.div`
border-top:1vh solid #67FBF3;
width:12vw;
border-radius:3vw;
// border-width:3vw;
// background-color:#67FBF3;

`