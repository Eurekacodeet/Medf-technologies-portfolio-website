import { useEffect } from "react";
import { useState } from "react";
import {Bars3Icon, ComputerDesktopIcon, CubeIcon, DevicePhoneMobileIcon, GlobeAltIcon, PaintBrushIcon, PuzzlePieceIcon} from '@heroicons/react/24/outline'
import { Form } from "antd";
import { Input, Card, Select, Button, message, Upload, Modal, Space, Image, Empty } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ArrowRightOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { PlusIcon, AdjustmentsHorizontalIcon, PencilSquareIcon  } from '@heroicons/react/24/outline';
import WebsitePortfolio from "./WebsitePortfolio";
import UiUxDesignPortfolio from "./UiUxDesignPortfolio";
import MobileAppPortfolio from "./MobileAppPortfolio";
import BlenderthreeDPortfolio from "./BlenderthreeDPortfolio";
import GraphicsDesignPortfolio from "./GraphicsDesignPortfolio";
import GamesPortfolio from "./GamesPortfolio";
import AllCategoriesPortfolio from "./AllCategoriesPortfolio";
import { Link } from "react-router-dom";

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
const [isViewModalMobileVisible, setIsViewModalMobileVisible] = useState(false);
const [projectId,setProjectId]=useState("")
const handleCancel=()=>{
setIsViewModalVisible(false)
setIsViewModalMobileVisible(false)
}
// useEffect(()=>{

//   const fetchProject=async()=>{
//  try{ const response=await fetch('https://efkomedia.onrender.com/project/')
//   const data=await response.json();
//   setProjects(data)
//   //console.log("projects",projects)}catch(err){//console.log(err)}
//   }
//   fetchProject();
//   const intervalId=setInterval(()=>{
// fetchProject()
//   },5000)
//   return ()=> clearInterval(intervalId)
//     },[])
useEffect(() => {
  const fetchProject = async () => {
    try {
      const response = await fetch('https://efkomedia.onrender.com/project/');
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      // //console.log(err);
    }
  };

  fetchProject();

  // const intervalId = setInterval(fetchProject, 5000);

  // return () => clearInterval(intervalId);
}, [projects]);
const handleView = (project) => {
setIsViewModalVisible(true)
  // //console.log(project._id,"project id inside edit")
  setProjectName(project.projectName);
  setProjectDescription(project.projectDescription);
  setsetProjectCategory(project.content);
  // //console.log("projectContent",project.content)
  setFileData(project.coverImage);

  };
  const handleViewMobile = (project) => {
    setIsViewModalMobileVisible(true)
      // //console.log(project._id,"project id inside edit")
      setProjectName(project.projectName);
      setProjectDescription(project.projectDescription);
      setsetProjectCategory(project.content);
      // //console.log("projectContent",project.content)
      setFileData(project.coverImage);
    
      };

  const tabs = [
    {id: 1,label: "All categories",content: () => (<AllCategoriesPortfolio projects={projects}/>),},
    { id: 2, label: "UI/UX Design", content: () => (<UiUxDesignPortfolio projects={projects}/>) },
    { id: 3, label: "Websites", content: () => ( <WebsitePortfolio projects={projects}/> ) },
    { id: 4, label: "Mobile apps", content: () => (<MobileAppPortfolio projects={projects}/>) },
    { id: 5, label: "Blender 3D", content: () => (<BlenderthreeDPortfolio projects={projects}/>) },
    { id: 6, label: "Graphics design", content: () => (<GraphicsDesignPortfolio projects={projects}/>)},
    { id: 7, label: "Games", content: () => (<GamesPortfolio projects={projects}/>) },
  ];
  const tabsMobile = [
    { id: 1, icon: Bars3Icon, label:"All categories", content: () =>(<AllCategoriesPortfolio projects={projects}/>), },
    { id: 2, icon: ComputerDesktopIcon, label:"UI/UX Design", content: () => (<UiUxDesignPortfolio projects={projects}/>) },
    { id: 3, icon: GlobeAltIcon,label:"Websites", content: () =>( <WebsitePortfolio projects={projects}/> ) },
    { id: 4, icon: DevicePhoneMobileIcon,label:"Mobile applications", content: () =>  (<MobileAppPortfolio projects={projects}/>)  },
    { id: 5, icon: CubeIcon,label:"Blender 3D", content: () =>  (<BlenderthreeDPortfolio projects={projects}/>) },
    { id: 6, icon: PaintBrushIcon,label:"Graphics Design", content: () => (<GraphicsDesignPortfolio projects={projects}/>) },
    { id: 7, icon: PuzzlePieceIcon,label:"Games", content: () => (<GamesPortfolio projects={projects}/>)},
  ];
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
      // //console.log(window.innerWidth)
    }

    window.addEventListener("resize", handleResize);
  }, [size]);

  return (<div>
    <div className=' bg-white p-10 text-black'>
    <div className='flex flex-row justify-between'>
      <div className='relative group inline-block'>
        <h1 className='text-3xl py-4 font-bold hover:text-black hover:cursor-default mb-0'>Our projects</h1>
        <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-full'></div>
      </div>
      <div>
  <Link to="/allprojects" className='text-blue-400 underline py-4'>View all</Link>
  </div>
      </div>   
      <p className="text-sm pt-4">
          
          At Tsinue, we provide a wide range of services to meet your technological needs.
          From web and mobile app development to computer maintenance, graphics design, 3D animation,
          game development, and UI/UX design, our skilled professionals deliver exceptional solutions.
          Whether you need a customized web app, innovative mobile app, reliable maintenance, captivating graphics,
          immersive games, or user-centric designs, we bring your ideas to life. Explore our projects below.

   </p>
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
              
              </tab.icon>
            ))}
          </nav>
        </div>

        <div className="mt-8">
          {tabsMobile.map((tab) => (
            <div
              key={tab.id}
              className={`${activeTab === tab.id ? "block" : "hidden"} tab-content mb-4 flex flex-row justify-center items-center`}
            >
                <div className=" justify-center items-center inline-block">
                  <p className="text-xl font-bold text-black pb-6">{tab.label}</p>
                   {tab.content()}
                  </div>
             
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
