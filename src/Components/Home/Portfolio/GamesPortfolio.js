import React, { useState }  from 'react'
import {Bars3Icon, ComputerDesktopIcon, CubeIcon, DevicePhoneMobileIcon, GlobeAltIcon, PaintBrushIcon, PuzzlePieceIcon} from '@heroicons/react/24/outline'
import { Form } from "antd";
import { Input, Card, Select, Button, message, Upload, Modal, Space, Image, Empty } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ArrowRightOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { PlusIcon, AdjustmentsHorizontalIcon, PencilSquareIcon  } from '@heroicons/react/24/outline';
const GamesPortfolio = (props) => {
    const [form] = Form.useForm();
    const [fileData,setFileData]=useState(null)
    const [projectName,setProjectName]=useState("")
    const [projectDescription, setProjectDescription]=useState("")
    const [projectContent, setsetProjectCategory]=useState({category:"",link:""})
   const [isViewModalVisible, setIsViewModalVisible] = useState(false);
   const [isViewModalMobileVisible, setIsViewModalMobileVisible] = useState(false);
   
   const handleCancel=()=>{
   setIsViewModalVisible(false)
   setIsViewModalMobileVisible(false)}
   
       const handleView = (project) => {
           setIsViewModalVisible(true)
            //  console.log(project._id,"project id inside edit")
             setProjectName(project.projectName);
             setProjectDescription(project.projectDescription);
             setsetProjectCategory(project.content);
            //  console.log("projectContent",project.content)
             setFileData(project.coverImage);
           
             };
     return (
       <div>
         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
       {props.projects.slice(0, 4)
       .filter(projects=>{return projects.content.category=="game"})
       .map((project) => (
         <>
         <div key={project._id} className="group flex flex-col items-center">
           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
             <Image
               width={250}
               height={110}
               src={project.coverImage}
               alt="Image was here."
               className="object-cover object-center group-hover:opacity-75"
             />
           </div>
           <h3 className="mt-4 text-center text-md font-bold text-gray-700 truncate w-4/5">
             {project.projectName}
           </h3>
           <a href={projectContent.link} target="_blank">
             <button
               onClick={() => {
                 handleView(project);
               }}
               href="#"
               className="mt-10 block w-full rounded-md bg-white hover:shadow-lg px-3 py-2 text-center text-sm font-semibold text-black shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             >
               View
               <ArrowRightOutlined className="pl-12" width={24} height={24} />
             </button>
           </a>
           <Modal
   projectName="View project"
   open={isViewModalVisible}
   onCancel={handleCancel}
   footer={null}
   className='h-[80vh]'
   >
   <p>Project Name:</p>
   <h1 className='text-xl font-bold'>{projectName}</h1> 
   <p className='pb-1 pt-2'>Project Description:</p>
   <div className="max-h-[30vh] overflow-y-scroll">
   <p>
   {projectDescription}</p></div>
   <p className='pb-1 pt-2'>Project Link:</p>
   <a className=' underline' href={projectContent.link} target='_blank'>Click here to view project</a> 
   <p className='pb-4 pt-2'>Project Image:</p>
   <div className='overflow-clip'>
   <Image
   width={470}
   height={235}
   src={fileData}
   alt="Image was here."
   className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
   /></div>
   </Modal>
         </div></>
       ))}
       
     </div>
       </div>
     )
}

export default GamesPortfolio
