import React, { useState, useEffect, useRef, PureComponent } from 'react';
import Whychus from '../Home/Whychus';
import Footer from '../Home/Footer';
import { Button, Switch, Typography } from 'antd';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
// import { DownloadOutlined, ExportOutlined } from '@ant-design/icons';




const Aboutus = () => {
  const { Paragraph, Text } = Typography;
const [ellipsis, setEllipsis] = useState(true);
const [expanded, setExpanded] = useState(false);
const [expandedA, setExpandedA] = useState(false);
const [contentState,setContentState]=useState("About")
const chartRef = useRef(null);
  const memberData = {
    members: [
      {
        name: '',
        experience: '',
        skills: [{ skillone: '' }, { skilltwo: '' }, { skillthree: '' }],
        selectedWorks: [],
        certifications: [],
      },
    ],
  };
  const data = [
    {
      subject: 'Front-end Development',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'UI/UX Design',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Graphics Design',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Back-end Development',
      A: 40,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Blender 3D',
      A: 70,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'App Development',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  
  const dataSm = [
    {
      subject: 'FE',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'UI/UX',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'GD',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'BE',
      A: 40,
      B: 100,
      fullMark: 150,
    },
    {
      subject: '3DA',
      A: 70,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'AD',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const toggleExpandA = () => {
    setExpandedA(!expandedA);
  };
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };
  const certificates = [
    {
      id: 1,
      name: 'React basics',
      issuer: 'Issuer 1',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/ZWH4YS4PXAKR',
    },
    {
      id: 2,
      name: 'Introduction to Git and GitHub',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      issuer: 'Issuer 2',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/4W4N67YQ3R6N',
    },
    // Add more certificate objects as needed
  ];
  const Skills = [
    { name: "FE - Front-end Dev", },
    { name: "UI/UX - User interface & experience design",},
    { name: "GD - Graphics design",},
    { name: "BE - Back-end Dev", },
    { name: "3DA - 3D artist", },
    { name: "AD - App Dev", },
  ];
  
  const colors = [
    "bg-red-500",
  ];
  const tabsAboutus = [
    {id: 1,label: "About",content: () => (<div><div><p className='text-base max-w-md pt-4'>Hello, I'm</p>
    <h2 className='text-3xl font-bold pt-2'>Kirubel</h2>
    <Paragraph
                className='text-sm pt-2 max-w-md'
                // ellipsis={
                //   expanded
                //     ? false
                //     : {
                //         rows: 2,
                //         expandable: true,
                //         symbol: ' ',
                //       }
                // }
              >
                Experienced UI/UX Designer, Front-End Developer specializing in
                education, health, ERP, and social media industries. Proven track record of delivering captivating web and mobile products,
                enhancing user experiences. Skilled in Figma, HTML, CSS, ReactJS, and Flutter. Proficient in GitHub version control.
                Committed to visually appealing, user-centric designs that drive engagement and business impact.
              </Paragraph>
  
              {/* {ellipsis && (
                <button className='text-blue-600 underline' onClick={toggleExpand}>
                  {expanded ? 'Read less' : 'Read more'}
                </button>
              )} */}
              </div></div>),},
             
    { id: 2, label: "Skills", content: () => (
    <div className='flex flex-col brder brder-500 justify-center w-full h-full'>
    <div className={`object-contain flex items-center justify-center ${size<500?"w-[80vw] h-[80vw]":"w-[42vw] h-[22vw]"} mb-10`}>
      <ResponsiveContainer bounce="100%" width="100%" height="100%">
        <RadarChart className='brder brder-500' cx="50%" cy="50%" outerRadius={`${size < 500 ? "60%" : "80%"}`} data={size < 500 ? dataSm : data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#000000" fill="#000000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
   {size<500&& <div>
    <p className='font-bold pb-4'>Legend</p>
    <ul className="list-none">
    {Skills.map((certificate, index) => (
        <div key={index} className="flex items-center mr-4 mb-4">
          <span
            className={`w-4 h-4 rounded-sm mr-2 bg-black`}
          ></span>
          <p className="font-bold">{`${certificate.name}`}</p>
        </div>
      ))}
</ul>

</div>}
  </div>
  
  ) },
    { id: 3, label: "Certifications", content: () => (<div><div>          
      <ul className='text-base pt-2'>
      {certificates.map((certificate) => (
          <li key={certificate.id}>
           <div className='flex flex-row'>
            <div className='w-16 object-fill mr-4'><img  className='object-contain ' src={certificate.issuerPhoto}/></div>
            <div className='flex flex-col'>
           <strong>{certificate.name}</strong>

{certificate.issuer}
            </div> </div>
           
            <br />
            <Button
        className="flex flex-row bg-black text-white justify-center items-center hover:bg-white hover:text-black"
        type="primary"
        shape="round"
        icon={<ArrowUpCircleIcon width={20} height={20} />}
        size={size}
        onClick={()=>{handleButtonClick(certificate.credentialURL)}}
      >
        Show credential
      </Button>
            <br />
          </li>
        ))}
      </ul></div></div>) },
    // { id: 4, label: "Selected works", content: () => (<div><div>          
    //   <ul className='text-base pt-2'>
    //     <li>Certifications</li>
    //     <li>Certifications 2</li>
    //   </ul></div></div>) },
  ];
  
//   const handleAbout=() =>{
//     setContentState("About");
//   }
// const handleSKill=() =>{
//   setContentState("Skills");
// }
// const handleSelectedWork=() =>{
//   setContentState("Selected works");
// }
// const handleCertification=()=>{
//   setContentState("Certifications");
// }

const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      // //console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="">
     <div className='bg-black p-10 flex flex-col items-center h-full'>
      <div >
      <h1 className='text-[1.6rem] font-bold break-words mr-4 text-white whitespace-pre '>M e e t    t h e   t e a m </h1>

<div className='rounded-full w-10 h-[0.4rem] 
mt-4 hover:w-[16.7rem] transition-width bg-white duration-500 ease-in-out shadow shadow-white'></div>
      </div> 


      <div className='flex flex-col lg:flex-row justify-evenly border-4 border-purple-900 bg-white mt-10 p-10 rounded'>

<div className=""><img className='lg:w-full w-full brder border-yellow-500 sm:w-full' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681139440/hmgglatf5qjig2tqvjom.png"/></div>
<div className='flex lg:w-[80vw] sm:w-[100vw] w-[80vw] flex-col brder brder-500'>
<div className='flex flex-row'>
{/* <div><h1 onClick={handleAbout} className={`text-base select-none hover:cursor-pointer ${contentState=="About"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>About</h1></div>
<div><h1 onClick={handleSKill} className={`text-base select-none hover:cursor-pointer ${contentState=="Skills"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Skills</h1></div>
<div><h1 onClick={handleSelectedWork} className={`text-base select-none hover:cursor-pointer ${contentState=="Selected works"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Portfolio  </h1></div>
<div><h1 onClick={handleCertification} className={`text-base select-none hover:cursor-pointer ${contentState=="Certifications"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Certifications  </h1></div> */}
 <div className="">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabsAboutus.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-6 text-center text-sm border-b-2 ${
                  activeTab === tab.id
                    ? "border-black text-black font-bold hover:cursor-pointer"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:cursor-pointer focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                }`}
              >
                {tab.label}
              </p>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {tabsAboutus.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"} tab-content flex flex-row items-start`}
            >
              {tab.content()}
            </div>
          ))}
        </div>
      </div>
</div>
<div>
  {/* {contentState=="About"&&

  } */}
   {/* {contentState=="Skills"&&

  } */}
   {/* {contentState=="Selected works"&&
  
    } */}
    {/* {contentState=="Certifications"&&
  
    } */}
</div>
</div>
</div>





<div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded'>

<div className="lg:w-1/6 mr-4">
  <p className='text-base max-w-md'>Hello, I'm</p>
  <h2 className='text-3xl font-bold pt-2'>Abubeker</h2>
  <p className='text-base pt-2 max-w-md break-words'>Experienced Mobile App Developer. Passionate about Data Analysis and Insights. Expertise in iOS and Android Applications
Development
</p>
</div>

<div className="row-span-3 lg:w-2/6 mr-4">
    <img src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681145174/bmh2e4qmekkxaohdkfqh.png"/></div>

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
              <button className='text-blue-600 underline' onClick={toggleExpandA}>
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
      <Whychus />
      <Footer />
    </div>
  );
};

export default Aboutus;