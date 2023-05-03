import { useEffect } from "react";
import { useState } from "react";
import {Bars3Icon, ComputerDesktopIcon, CubeIcon, DevicePhoneMobileIcon, GlobeAltIcon, PaintBrushIcon, PuzzlePieceIcon} from '@heroicons/react/24/outline'
import { Form } from "antd";
import { Input, Card, Select, Button, message, Upload, Modal, Space, Image, Empty } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ArrowRightOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { PlusIcon, AdjustmentsHorizontalIcon, PencilSquareIcon  } from '@heroicons/react/24/outline';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;
const { confirm } = Modal;
const { Search } = Input;

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
 const [projects, setProjects]=useState([]);
 const [form] = Form.useForm();
 const [fileData,setFileData]=useState(null)
 const [projectName,setProjectName]=useState("")
 const [projectDescription, setProjectDescription]=useState("")
 const [projectContent, setsetProjectCategory]=useState({category:"",link:""})
const [loading, setLoading] = useState(false);
const [isViewModalVisible, setIsViewModalVisible] = useState(false);
const [projectId,setProjectId]=useState("")
const handleCancel=()=>{
setIsViewModalVisible(false)
}
useEffect(()=>{

  const fetchProject=async()=>{
 try{ const response=await fetch('http://localhost:8000/project/')
  const data=await response.json();
  setProjects(data)
  console.log("projects",projects)}catch(err){console.log(err)}
  }
  fetchProject();
  const intervalId=setInterval(()=>{
fetchProject()
  },5000)
  return ()=> clearInterval(intervalId)
    },[])
const handleView = (project) => {
setIsViewModalVisible(true)
  console.log(project._id,"project id inside edit")
  setProjectName(project.projectName);
  setProjectDescription(project.projectDescription);
  setsetProjectCategory(project.content);
  console.log("projectContent",project.content)
  setFileData(project.coverImage);

  };

  const tabs = [
    {
      id: 1,
      label: "All categories",
      content: () => (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projects.slice(0, 6).map((project) => (
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
              <h3 className="mt-4 text-md font-bold text-gray-700 truncate w-4/5">
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
 <Image
  width={470}
  height={235}
  src={fileData}
  alt="Image was here."
  className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
/>
</Modal>
            </div></>
          ))}
          
        </div>
      ),
    },
    { id: 2, label: "UI/UX Design", content: () => <p>Content for Tab 2</p> },
    { id: 3, label: "Websites", content: () => (  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    {projects.slice(0, 6)
    .filter(projects=> projects.content.category=="web-dev")
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
        <h3 className="mt-4 text-md font-bold text-gray-700 truncate w-4/5">
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
<Image
width={470}
height={235}
src={fileData}
alt="Image was here."
className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
/>
</Modal>
      </div></>
    ))}
    
  </div>) },
    { id: 4, label: "Mobile apps", content: () => <p>Content for Tab 4</p> },
    { id: 5, label: "Blender 3D", content: () => <p>Content for Tab 5</p> },
    { id: 6, label: "Graphics design", content: () => <p>Content for Tab 6</p> },
    { id: 7, label: "Games", content: () => <p>Content for Tab 7</p> },
  ];
  const tabsMobile = [
    { id: 1, icon: Bars3Icon, content: () =>(
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {projects.slice(0, 6).map((project) => (
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
            <h3 className="mt-4 text-md font-bold text-gray-700 truncate w-4/5">
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
<Image
width={470}
height={235}
src={fileData}
alt="Image was here."
className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
/>
</Modal>
          </div></>
        ))}
        
      </div>
    ), },
    { id: 2, icon: ComputerDesktopIcon, content: () => <p>Content for Tab 2</p> },
    { id: 3, icon: GlobeAltIcon, content: () => <p>Content for Tab 3</p> },
    { id: 4, icon: DevicePhoneMobileIcon, content: () => <p>Content for Tab 4</p> },
    { id: 5, icon: CubeIcon, content: () => <p>Content for Tab 5</p> },
    { id: 6, icon: PaintBrushIcon, content: () => <p>Content for Tab 6</p> },
    { id: 7, icon: PuzzlePieceIcon, content: () => <p>Content for Tab 7</p> },
  ];
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);

  return (<div>
    <div className=' bg-white p-10 text-black'>
      <div className='relative group inline-block'>
        <h1 className='text-3xl py-4 font-bold hover:text-black hover:cursor-default mb-0'>Our projects</h1>
        <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-full'></div>
      </div>
      <p className="text-sm  brder-2 pt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
      <div className="lg:block hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <p
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-1/4 py-4 px-1 text-center text-sm border-b-2 ${
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
          {tabs.map((tab) => (
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
     {size < 1024 && ( <div className="mx-10 mb-10 overflow-y-scroll">

     <div className="">
        <div className=" w-full  border-b-[1px] border-gray-200">
          <nav className="-mb-px flex text-center items-center" aria-label="Tabs">
            {tabsMobile.map((tab) => (
              <tab.icon
              width={28} height={28}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-1/4 px-1 text-center text-sm border-b-[1px] ${
                  activeTab === tab.id
                    ? " text-center items-center border-black overscroll-contain text-black font-bold hover:cursor-pointer whitespace-nowrap pr-2"
                    : "truncate border-border-transparent text-gray-400 hover:text-gray-700 whitespace-nowrap hover:border-gray-300 hover:cursor-pointer focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
                }`}
              >
                {tab.label}
              </tab.icon>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {tabsMobile.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"} tab-content  flex flex-row justify-center items-center`}
            >
              {tab.content()}
            </div>
          ))}
        </div>
      </div>
 
</div>
 )}




    </div>

  );
}

export default Tabs;
