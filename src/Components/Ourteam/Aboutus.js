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
      A: 110,
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
      subject: '3D Artist',
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
      A: 110,
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
  const dataAbuki = [
    {
      subject: 'Data Analysis',
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
      subject: 'Web scrapping',
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
      subject: '',
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
  
  const dataSmAbuki = [
    {
      subject: 'DA',
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
      subject: 'WS',
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
      subject: '',
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
  const dataAbel = [
    {
      subject: 'Back-end Development',
      A: 110,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Development & Operations',
      A: 100,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Cyber Security',
      A: 80,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Networking',
      A: 80,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'UI/UX Design',
      A: 60,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'MachineL Operations',
      A: 60,
      B: 85,
      fullMark: 150,
    },
  ];
  
  const dataSmAbel = [
    {
      subject: 'BE',
      A: 110,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'DevOps',
      A: 100,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'CS',
      A: 80,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'NE',
      A: 80,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'UI/UX',
      A: 60,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Mlops',
      A: 60,
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
      name: 'Founder Academy',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602315/kzh6heqmawyk3rauq6bq.jpg",
      issuer: 'alx',
      credentialURL: 'https://www.virtualbadge.io/certificate-validator?credential=0c3b4713-1ea7-429e-9040-024ce770991b',
    },
   
    {
      id: 2,
      name: 'Introduction to Git and GitHub',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      issuer: 'Coursera',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/4W4N67YQ3R6N',
    },
    {
      id:3,
      name: 'Fundamentals of Graphics Design',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      issuer: 'Coursera',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/2275NUGDRHW9',
    },
    {
      id: 4,
      name: 'Meta Introduction to frontend development',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      issuer: 'Coursera',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/TACDKKXMPR5X',
    },
    {
      id: 5,
      name: 'Meta introduction to backend development',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      issuer: 'Coursera',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/MRW53PFBEKF6',
    },
    {
      id: 6,
      name: 'Python for everybody',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      issuer: 'Coursera',
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/8F5ZUS2NACXF',
    }, 
    {
      id: 7,
      name: 'React basics',
      issuer: 'Coursera',
      issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
      credentialURL: 'https://www.coursera.org/account/accomplishments/verify/ZWH4YS4PXAKR',
    },
 
    // Add more certificate objects as needed
  ];

  const certificatesAbuki = [
    {
      id: 1,
      name: 'Founder Academy',
      issuer: 'alx',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602315/kzh6heqmawyk3rauq6bq.jpg",
      credentialURL: 'https://www.virtualbadge.io/certificate-validator?credential=0c4e83b4-a5cd-4583-a171-06aa6e7eaef6',
    },
    {
      id: 2,
      name: 'Exam 480: Programming in HTML5 with JavaScript and CSS3',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602621/jjhecmbbaau565fnypog.jpg",
      issuer: 'Microsoft',
      credentialURL: 'https://www.credly.com/badges/474d8a86-b9f9-4da5-aab5-31dc60c1c096/linked_in_profile',
    },
    {
      id: 3,
      name: 'JavaScript: Functions',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602741/blofhl9qp4rcjcfogf9u.jpg",
      issuer: 'LinkedIn',
      credentialURL: 'https://www.linkedin.com/learning/certificates/1ed34551e9e7f3c444edbcb4f2cb6ff9239cb21014cdb1c8c20d3bd2ac97b4bd?trk=backfilled_certificate',
    },
    {
      id: 4,
      name: 'Microsoft Certified: Azure Fundamentals',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602621/jjhecmbbaau565fnypog.jpg",
      issuer: 'Microsoft',
      credentialURL: 'https://www.youracclaim.com/badges/22e9b845-4780-468e-aae0-a5742d0c696b?source=linked_in_profile',
    },
    {
      id: 5,
      name: 'JavaScript Essential Training',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602741/blofhl9qp4rcjcfogf9u.jpg",
      issuer: 'LinkedIn',
      credentialURL: 'https://www.linkedin.com/learning/certificates/82ffed8ce2ad541c154bfd61fe0ecf6bf227416a3cc64c1f3ed8ed39a21bd6f8?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B16oPA1LCTIGKoefkoRQtsQ%3D%3D',
    },
    {
      id: 6,
      name: 'JavaScript: Classes',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602741/blofhl9qp4rcjcfogf9u.jpg",
      issuer: 'LinkedIn',
      credentialURL: 'https://www.linkedin.com/learning/certificates/492ef0e3714b5ed69e0f394d9ee692e2239491ef6a1709cf54485fab091f8f54?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B16oPA1LCTIGKoefkoRQtsQ%3D%3D',
    },
    {
      id: 7,
      name: 'Penetration Testing Essential Training',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602741/blofhl9qp4rcjcfogf9u.jpg",
      issuer: 'LinkedIn',
      credentialURL: 'https://www.linkedin.com/learning/certificates/b9d901bd486626652ee852f2afef0895f34abd030912d0bedd94fe34fb767a90?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B16oPA1LCTIGKoefkoRQtsQ%3D%3D',
    },
    {
      id: 8,
      name: 'Learning Cloud Computing: Core Concepts',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602741/blofhl9qp4rcjcfogf9u.jpg",
      issuer: 'LinkedIn',
      credentialURL: 'https://www.linkedin.com/learning/certificates/2aaeb00eeea06eb4e9cceecbbab56b48543fe4922ee4888a13c8693162e241f8?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B16oPA1LCTIGKoefkoRQtsQ%3D%3D',
    },
    // Add more certificate objects as needed
  ];
  const certificatesAbel = [
    {
      id: 1,
      name: 'Founder Academy',
      issuer: 'alx',
      issuerPhoto:"https://res.cloudinary.com/dvqawl4nw/image/upload/v1685602315/kzh6heqmawyk3rauq6bq.jpg",
      credentialURL: 'https://www.virtualbadge.io/certificate-validator?credential=c40234dc-da11-456f-b588-53fcded6b45a',
    },
    // {
    //   id: 2,
    //   name: 'Introduction to Git and GitHub',
    //   issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
    //   issuer: 'alx',
    //   credentialURL: 'https://www.coursera.org/account/accomplishments/verify/4W4N67YQ3R6N',
    // },
    // {
    //   id: 3,
    //   name: 'Introduction to Git and GitHub',
    //   issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
    //   issuer: 'alx',
    //   credentialURL: 'https://www.coursera.org/account/accomplishments/verify/4W4N67YQ3R6N',
    // },
    // {
    //   id: 4,
    //   name: 'Introduction to Git and GitHub',
    //   issuerPhoto:"https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_200_200/0/1608039227697?e=1693440000&v=beta&t=xEUTGKICllvYjAR8uWtLy3kPQPmqJHHCqZDw5LM_1rA",
    //   issuer: 'alx',
    //   credentialURL: 'https://www.coursera.org/account/accomplishments/verify/4W4N67YQ3R6N',
    // },
    // Add more certificate objects as needed
  ];
  const [showAll, setShowAll] = useState(false);
  const [showAllAbuki, setShowAllAbuki] = useState(false);

  const [showAllAbel, setShowAllAbel] = useState(false);


  const visibleCount = showAll ? certificates.length : 3;
  const visibleCountAbuki = showAllAbuki ? certificatesAbuki.length : 3;
  const visibleCountAbel = showAllAbel ? certificatesAbel.length : 3;

  const visibleCertificates = certificates.slice(0, visibleCount);
  const visibleCertificatesAbuki = certificatesAbuki.slice(0, visibleCountAbuki);
  const visibleCertificatesAbel= certificatesAbel.slice(0, visibleCountAbel);



  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };
  const handleShowMoreAbuki = () => {
    setShowAllAbuki(true);
  };

  const handleShowLessAbuki = () => {
    setShowAllAbuki(false);
  };
  const handleShowMoreAbel = () => {
    setShowAllAbel(true);
  };

  const handleShowLessAbel = () => {
    setShowAllAbel(false);
  };
  const Skills = [
    { name: "FE - Front-end Dev", },
    { name: "UI/UX - User interface & experience design",},
    { name: "GD - Graphics design",},
    { name: "BE - Back-end Dev", },
    { name: "3DA - 3D artist", },
    { name: "AD - App Dev", },
  ];
  const SkillsAbuki = [
    { name: "DA - Data Analysis", },
    { name: "UI/UX - User interface & experience design",},
    { name: "WS - Web scrapping",},
    { name: "BE - Back-end Dev", },
    { name: " - ", },
    { name: "AD - App Dev", },
  ]; 
  const SkillsAbel = [
    { name: "BE - Back-end Dev", },
    { name: "DevOps - Development & Operations",},
    { name: "CS - Cyber Security",},
    { name: "NE - Networking", },
    { name: "UI/UX - UI/UX Design", },
    { name: "MLops - Machine Learning Operations", },
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
    { id: 3, label: "Certifications", content: () => (<div>
      <div>
        <ul className="text-base pt-2">
          {visibleCertificates.map((certificate) => (
            <li key={certificate.id}>
              <div className="flex flex-row">
                <div className="w-16 object-fill mr-4">
                  <img className="object-contain" src={certificate.issuerPhoto} />
                </div>
                <div className="flex flex-col">
                  <strong>{certificate.name}</strong>
                  {certificate.issuer}
                </div>
              </div>

              <br />
              <Button
                className="flex flex-row bg-black text-white justify-center items-center hover:bg-white hover:text-black"
                type="primary"
                shape="round"
                icon={<ArrowUpCircleIcon width={20} height={20} />}
                size={size}
                onClick={() => {
                  handleButtonClick(certificate.credentialURL);
                }}
              >
                Show credential
              </Button>
              <br />
            </li>
          ))}
        </ul>
      </div>

      {certificates.length > 3 && !showAll && (
        <button onClick={handleShowMore}>Show More</button>
      )}
      {showAll && (
        <button onClick={handleShowLess}>Show Less</button>
      )}
    </div>) },
    // { id: 4, label: "Selected works", content: () => (<div><div>          
    //   <ul className='text-base pt-2'>
    //     <li>Certifications</li>
    //     <li>Certifications 2</li>
    //   </ul></div></div>) },
  ];
  const tabsAboutusAbuki = [
    {id: 4,label: "About",content: () => (<div><div><p className='text-base max-w-md pt-4'>Hello, I'm</p>
    <h2 className='text-3xl font-bold pt-2'>Abubeker</h2>
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
                Experienced Mobile App Developer. Passionate about Data Analysis and Insights. Expertise in iOS and Android Applications
Development
              </Paragraph>
  
              {/* {ellipsis && (
                <button className='text-blue-600 underline' onClick={toggleExpand}>
                  {expanded ? 'Read less' : 'Read more'}
                </button>
              )} */}
              </div></div>),},
             
    { id: 5, label: "Skills", content: () => (
    <div className='flex flex-col brder brder-500 justify-center w-full h-full'>
    <div className={`object-contain flex items-center justify-center ${size<500?"w-[80vw] h-[80vw]":"w-[42vw] h-[22vw]"} mb-10`}>
      <ResponsiveContainer bounce="100%" width="100%" height="100%">
        <RadarChart className='brder brder-500' cx="50%" cy="50%" outerRadius={`${size < 500 ? "60%" : "80%"}`} data={size < 500 ? dataSmAbuki : dataAbuki}>
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
    {SkillsAbuki.map((skill, index) => (
        <div key={index} className="flex items-center mr-4 mb-4">
          <span
            className={`w-4 h-4 rounded-sm mr-2 bg-black`}
          ></span>
          <p className="font-bold">{`${skill.name}`}</p>
        </div>
      ))}
</ul>

</div>}
  </div>
  
  ) },
    { id: 6, label: "Certifications", content: () => (<div>
      <div>
        <ul className="text-base pt-2">
          {visibleCertificatesAbuki.map((certificate) => (
            <li key={certificate.id}>
              <div className="flex flex-row">
                <div className="w-16 object-fill mr-4">
                  <img className="object-contain" src={certificate.issuerPhoto} />
                </div>
                <div className="flex flex-col">
                  <strong>{certificate.name}</strong>
                  {certificate.issuer}
                </div>
              </div>

              <br />
              <Button
                className="flex flex-row bg-black text-white justify-center items-center hover:bg-white hover:text-black"
                type="primary"
                shape="round"
                icon={<ArrowUpCircleIcon width={20} height={20} />}
                size={size}
                onClick={() => {
                  handleButtonClick(certificate.credentialURL);
                }}
              >
                Show credential
              </Button>
              <br />
            </li>
          ))}
        </ul>
      </div>

      {certificatesAbuki.length > 3 && !showAllAbuki && (
        <button onClick={handleShowMoreAbuki}>Show More</button>
      )}
      {showAllAbuki && (
        <button onClick={handleShowLessAbuki}>Show Less</button>
      )}
    </div>) },
    // { id: 4, label: "Selected works", content: () => (<div><div>          
    //   <ul className='text-base pt-2'>
    //     <li>Certifications</li>
    //     <li>Certifications 2</li>
    //   </ul></div></div>) },
  ];
  const tabsAboutusAbel = [
    {id: 7,label: "About",content: () => (<div><div><p className='text-base max-w-md pt-4'>Hello, I'm</p>
    <h2 className='text-3xl font-bold pt-2'>Abel</h2>
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
                 As an experienced software developer, I have a proven track record of designing, developing, and
delivering high-quality software applications. My expertise in a range of programming languages
and technologies, combined with my strong problem-solving skills, attention to detail, and ability
to work collaboratively, makes me an asset to any software development team. Throughout my
career, I have demonstrated the ability to work in dynamic environments, adapting quickly to
changing priorities and deadlines. Whether working independently or as part of a team, I am
dedicated to delivering exceptional results that meet both technical and business requirements.
              </Paragraph>
  
              {/* {ellipsis && (
                <button className='text-blue-600 underline' onClick={toggleExpand}>
                  {expanded ? 'Read less' : 'Read more'}
                </button>
              )} */}
              </div></div>),},
             
    { id: 8, label: "Skills", content: () => (
    <div className='flex flex-col brder brder-500 justify-center w-full h-full'>
    <div className={`object-contain flex items-center justify-center ${size<500?"w-[80vw] h-[80vw]":"w-[42vw] h-[22vw]"} mb-10`}>
      <ResponsiveContainer bounce="100%" width="100%" height="100%">
        <RadarChart className='brder brder-500' cx="50%" cy="50%" outerRadius={`${size < 500 ? "60%" : "80%"}`} data={size < 500 ? dataSmAbel : dataAbel}>
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
    {SkillsAbel.map((skill, index) => (
        <div key={index} className="flex items-center mr-4 mb-4">
          <span
            className={`w-4 h-4 rounded-sm mr-2 bg-black`}
          ></span>
          <p className="font-bold">{`${skill.name}`}</p>
        </div>
      ))}
</ul>

</div>}
  </div>
  
  ) },
    { id: 9, label: "Certifications", content: () => (<div>
      <div>
        <ul className="text-base pt-2">
          {visibleCertificatesAbel.map((certificate) => (
            <li key={certificate.id}>
              <div className="flex flex-row">
                <div className="w-16 object-fill mr-4">
                  <img className="object-contain" src={certificate.issuerPhoto} />
                </div>
                <div className="flex flex-col">
                  <strong>{certificate.name}</strong>
                  {certificate.issuer}
                </div>
              </div>

              <br />
              <Button
                className="flex flex-row bg-black text-white justify-center items-center hover:bg-white hover:text-black"
                type="primary"
                shape="round"
                icon={<ArrowUpCircleIcon width={20} height={20} />}
                size={size}
                onClick={() => {
                  handleButtonClick(certificate.credentialURL);
                }}
              >
                Show credential
              </Button>
              <br />
            </li>
          ))}
        </ul>
      </div>

      {certificatesAbel.length > 3 && !showAllAbel && (
        <button onClick={handleShowMoreAbel}>Show More</button>
      )}
      {showAllAbel && (
        <button onClick={handleShowLessAbel}>Show Less</button>
      )}
    </div>) },
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
  const [activeTabAbuki, setActiveTabAbuki] = useState(4);

  const [activeTabAbel, setActiveTabAbel] = useState(7);

  return (
    <div className="">
     <div className='bg-black p-10 flex flex-col items-center h-full'>
      <div >
      <h1 className='text-[1.6rem] font-bold break-words mr-4 text-white whitespace-pre '>M e e t    t h e   c o r e   t e a m </h1>

<div className='rounded-full w-10 h-[0.4rem] 
mt-4 hover:w-[16.7rem] transition-width bg-white duration-500 ease-in-out shadow shadow-white'></div>
      </div> 


      <div className='flex flex-col lg:flex-row justify-evenly borer-4 borer-purple-900 bg-white mt-10 p-10 rounded'>

<div className=""><img className='lg:w-full w-full brder boder-yellow-500 sm:w-full' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1685455757/s5dec8kw6e0982jsywcv.png"/></div>
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





<div className='flex flex-col lg:flex-row justify-evenly bordr-4 brder-purple-900 bg-white mt-10 p-10 rounded'>

<div className="">
  <img className='lg:w-full w-full brder boder-yellow-500 sm:w-full' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1685464201/ry2mkj5e0pg7bnttq7yu.png"/></div>
<div className='flex lg:w-[80vw] sm:w-[100vw] w-[80vw] flex-col brder brder-500'>
<div className='flex flex-row'>
{/* <div><h1 onClick={handleAbout} className={`text-base select-none hover:cursor-pointer ${contentState=="About"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>About</h1></div>
<div><h1 onClick={handleSKill} className={`text-base select-none hover:cursor-pointer ${contentState=="Skills"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Skills</h1></div>
<div><h1 onClick={handleSelectedWork} className={`text-base select-none hover:cursor-pointer ${contentState=="Selected works"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Portfolio  </h1></div>
<div><h1 onClick={handleCertification} className={`text-base select-none hover:cursor-pointer ${contentState=="Certifications"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Certifications  </h1></div> */}
 <div className="">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabsAboutusAbuki.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTabAbuki(tab.id)}
                className={`py-2 px-6 text-center text-sm border-b-2 ${
                  activeTabAbuki === tab.id
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
          {tabsAboutusAbuki.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTabAbuki === tab.id ? "block" : "hidden"} tab-content flex flex-row items-start`}
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





<div className='flex flex-col lg:flex-row justify-evenly bordr-4 brder-purple-900 bg-white mt-10 p-10 rounded'>

<div className="">
  <img className='lg:w-full w-full brder boder-yellow-500 sm:w-full' src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1685455756/dpm5rxwymxxzjka7rwcv.png"/></div>
<div className='flex lg:w-[80vw] sm:w-[100vw] w-[80vw] flex-col brder brder-500'>
<div className='flex flex-row'>
{/* <div><h1 onClick={handleAbout} className={`text-base select-none hover:cursor-pointer ${contentState=="About"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>About</h1></div>
<div><h1 onClick={handleSKill} className={`text-base select-none hover:cursor-pointer ${contentState=="Skills"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Skills</h1></div>
<div><h1 onClick={handleSelectedWork} className={`text-base select-none hover:cursor-pointer ${contentState=="Selected works"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Portfolio  </h1></div>
<div><h1 onClick={handleCertification} className={`text-base select-none hover:cursor-pointer ${contentState=="Certifications"?"font-bold underline underline-offset-4":"font-normal"} pr-6`}>Certifications  </h1></div> */}
 <div className="">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabsAboutusAbel.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTabAbel(tab.id)}
                className={`py-2 px-6 text-center text-sm border-b-2 ${
                  activeTabAbel === tab.id
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
          {tabsAboutusAbel.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTabAbel === tab.id ? "block" : "hidden"} tab-content flex flex-row items-start`}
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





    </div>
      <Whychus />
      <Footer />
    </div>
  );
};

export default Aboutus;