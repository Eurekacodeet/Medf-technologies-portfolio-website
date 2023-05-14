import React, { useState } from 'react'
import Whychus from '../Home/Whychus'
import Footer from '../Home/Footer'
import { Switch, Typography } from 'antd';

const Aboutus = () => {
const { Paragraph, Text } = Typography;
const [ellipsis, setEllipsis] = useState(true);
const [expanded, setExpanded] = useState(false);
const [ellipsisA, setEllipsisA] = useState(true);
const [expandedA, setExpandedA] = useState(false);
const toggleExpand = () => {
  setExpanded(!expanded);
};
const toggleExpandA = () => {
  setExpandedA(!expandedA);
};
  return (
    <div className=''>
    <div className='bg-black p-10 flex flex-col items-center h-full '>
      <div >
      <h1 className='text-[1.6rem] font-bold break-words mr-4 text-white whitespace-pre '>M e e t    t h e   t e a m </h1>

<div className='rounded-full w-10 h-[0.4rem] 
mt-4 hover:w-[16.7rem] transition-width bg-white duration-500 ease-in-out shadow shadow-white'></div>
      </div> 


      <div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

<div className="lg:w-1/6 mr-4">
  <p className='text-base max-w-md'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Kirubel</h2>
  <Paragraph
              className='text-sm pt-2 max-w-md'
              ellipsis={
                expanded
                  ? false
                  : {
                      rows: 2,
                      expandable: true,
                      symbol: ' ',
                    }
              }
            >
              Experienced UI/UX Designer, Front-End Developer specializing in
              education, health, ERP, and social media industries. Proven track record of delivering captivating web and mobile products,
              enhancing user experiences. Skilled in Figma, HTML, CSS, ReactJS, and Flutter. Proficient in GitHub version control.
              Committed to visually appealing, user-centric designs that drive engagement and business impact.
            </Paragraph>

            {ellipsis && (
              <button className='text-blue-600 underline' onClick={toggleExpand}>
                {expanded ? 'Read less' : 'Read more'}
              </button>
            )}

  {/* <p ></p><button className='text-blue-300 underline'>Read more</button> */}
</div>

<div className="row-span-3 lg:w-2/6 mr-4"><img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681139440/hmgglatf5qjig2tqvjom.png"/></div>

<div className='flex flex-col lg:w-2/5'>
  <div className='flex justify-center items-center'>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 w-[18vw] h-[18vw] bg-white lg:w-[9vw] lg:h-[9vw] m-auto flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1684079777/etevadkkl30yftlnctxr.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-white lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1684080844/sjpecmsghfevvv3ffamp.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-white lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1684081720/ahcxuul8k9rwzmoyincc.png" />
      </div>
    </div>
  </div>
  <div className=''>
    <h1 className='text-3xl font-bold pt-2'>Selected works</h1>
    <ul className='text-base pt-2'>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </div>
</div>
</div>





<div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

<div className="lg:w-1/6 mr-4">
  <p className='text-base max-w-md'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Abubeker</h2>
  <p className='text-base pt-2 max-w-md break-words'>Web developer with 2 years of experience akwjdhkawdilawdojaidhakfAHBFahfiafafawfa</p>
</div>

<div className="row-span-3 lg:w-2/6 mr-4"><img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681145174/bmh2e4qmekkxaohdkfqh.png"/></div>

<div className='flex flex-col lg:w-2/5'>
  <div className='flex justify-center items-center'>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] m-auto flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
    </div>
  </div>
  <div className=''>
    <h1 className='text-3xl font-bold pt-2'>Selected works</h1>
    <ul className='text-base pt-2'>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </div>
</div>
</div>





<div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

<div className="lg:w-1/6 mr-4">
  <p className='text-base max-w-md'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Abel</h2>
  <Paragraph
              className='text-sm pt-2 max-w-md'
              ellipsis={
                expandedA
                  ? false
                  : {
                      rows: 2,
                      expandable: true,
                      symbol: ' ',
                    }
              }
            >
              As an experienced software developer, I have a proven track record of designing, developing, and
delivering high-quality software applications. My expertise in a range of programming languages
and technologies, combined with my strong problem-solving skills, attention to detail, and ability
to work collaboratively, makes me an asset to any software development team. Throughout my
career, I have demonstrated the ability to work in dynamic environments, adapting quickly to
changing priorities and deadlines. Whether working independently or as part of a team, I am
dedicated to delivering exceptional results that meet both technical and business requirements.

            </Paragraph>

            {ellipsis && (
              <button className='text-blue-300 underline' onClick={toggleExpandA}>
                {expandedA ? 'Read less' : 'Read more'}
              </button>
            )}
</div>

<div className="row-span-3 lg:w-2/6 mr-4"><img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681059700/qqaoi6ju1nwaaglmi9vv.png"/></div>

<div className='flex flex-col lg:w-2/5'>
  <div className='flex justify-center items-center'>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] m-auto flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-1 w-[18vw] h-[18vw]  bg-zinc-500 lg:w-[9vw] lg:h-[9vw] flex justify-center items-center rounded">
        <img className="w-full h-full object-contain rounded" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681141804/e0i9e4rmkdwekwzh0yr7.png" />
      </div>
    </div>
  </div>
  <div className=''>
    <h1 className='text-3xl font-bold pt-2'>Selected works</h1>
    <ul className='text-base pt-2'>
      <li>Link 1</li>
      <li>Link 2</li>
    </ul>
  </div>
</div>
</div>
    
    
   
    </div>
     <Whychus/>
     <Footer/>
     </div>
  )
}

export default Aboutus
