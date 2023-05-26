import React, { useState } from 'react';
import Whychus from '../Home/Whychus';
import Footer from '../Home/Footer';
import { Switch, Typography } from 'antd';

const Aboutus = () => {
  const memberData = {
    members: [
      {
        name: 'Kirubel',
        experience: 'Experienced UI/UX Designer, Front-End Developer',
        skills: ['Figma', 'HTML', 'CSS', 'ReactJS', 'Flutter', 'GitHub'],
        selectedWorks: ['Link 1', 'Link 2'],
        certifications: [],
      },
      {
        name: 'Abubeker',
        experience: 'Experienced Mobile App Developer',
        skills: ['iOS', 'Android'],
        selectedWorks: ['Link 1', 'Link 2'],
        certifications: [],
      },
      {
        name: 'Abel',
        experience: 'Experienced Software Developer',
        skills: ['Programming Languages', 'Problem-solving', 'Adaptability'],
        selectedWorks: ['Link 1', 'Link 2'],
        certifications: [],
      },
    ],
  };

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
        <div>
          <h1 className='text-[1.6rem] font-bold break-words mr-4 text-white whitespace-pre '>
            M e e t    t h e   t e a m
          </h1>

          <div className='rounded-full w-10 h-[0.4rem] mt-4 hover:w-[16.7rem] transition-width bg-white duration-500 ease-in-out shadow shadow-white'></div>
        </div>

        {memberData.members.map((member, index) => (
          <div className='flex flex-col lg:flex-row justify-evenly bg-white mt-10 p-10 rounded' key={index}>
            <div className='lg:w-1/6 mr-4'>
              <p className='text-base max-w-md'>Hello, I'm</p>
              <h2 className='text-3xl font-bold pt-2'>{member.name}</h2>
              <p className='text-base pt-2 max-w-md break-words'>{member.experience}</p>
            </div>

            <div className='row-span-3 lg:w-2/6 mr-4'>
              <img src={`https://res.cloudinary.com/dvqawl4/image/upload/v1625874249/team/${member.name.toLowerCase()}.jpg`} alt={member.name} className='rounded-lg' />
            </div>

            <div className='lg:w-2/6'>
              <div>
                <h3 className='text-lg font-bold'>Skills:</h3>
                <ul className='list-disc pl-5 mt-2'>
                  {member.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className='mt-4'>
                <h3 className='text-lg font-bold'>Selected Works:</h3>
                <ul className='list-disc pl-5 mt-2'>
                {member.selectedWorks.map((work, index) => (
  <li key={index}>
    <a href={work} target="_blank" rel="noopener noreferrer">
      {work}
    </a>
  </li>
))}
</ul>
</div>
</div>
</div>
))}
{/* </div> */}

<Whychus />
<Footer />
</div></div>
);
};

export default Aboutus;