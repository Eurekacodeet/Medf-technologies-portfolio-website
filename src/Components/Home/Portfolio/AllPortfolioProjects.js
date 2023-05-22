import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Input, Card, Form, Select, Button, message, Upload, Modal, DatePicker, Checkbox , Space, Image, Empty } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { ArrowRightOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { PlusIcon, AdjustmentsHorizontalIcon, PencilSquareIcon, XMarkIcon  } from '@heroicons/react/24/outline';

const { Search } = Input;
const { RangePicker } = DatePicker;
const AllPortfolioProjects = () => {
  const [form] = Form.useForm();
  const [fileData,setFileData]=useState(null)
  const [projectName,setProjectName]=useState("")
  const [projectDescription, setProjectDescription]=useState("")
  const [projectContent, setsetProjectCategory]=useState({category:"",link:""})
 const [projects,setProjects]=useState([])
 const [loading, setLoading] = useState(false);
 const [visible, setVisible] = useState(false);
 const [projectId,setProjectId]=useState("")
 const [coverImagePreview,setCoverImagePreview]=useState("")
 const [filteredProjects, setFilteredProjects] = useState(projects);
 const [searchText, setSearchText] = useState("");
 const [filterText, setFilterText] = useState("");

 const [filteredProjectsVisibility, setFilteredProjectsVisibility]=useState(false)
 const [projectContentListAdd, setsetProjectCategoryListAdd]=useState({
  projectContent:"",
})
const [projectContentList,setsetProjectCategoryList]=useState()
const [isViewFilterModalVisible, setIsViewFilterModalVisible]=useState(false)

 const handleSearch = (value) => {
  // setSearchText(value);
  const filtered = projects.filter((project) =>
    project.projectName.toLowerCase().includes(value.toLowerCase())
  );
  setFilteredProjects(filtered);
  setFilteredProjectsVisibility(true);
};


useEffect(()=>{
  const fetchData=async()=>{

  try{  const response=await fetch('https://efkomedia.onrender.com/project')
    const result=await response.json()
      // //console.log(result)
    setProjects(result)
  //console.log("length of projects",projects.length)
}catch(error){
  //console.log(error)
}
  }
  fetchData();    
                                                                                                                                                                                                                                                    
},[projects])
const handleView = (project) => {
  setIsModalVisible(false);
 
  setIsViewFilterModalVisible(false);
  setVisible(false)
  setIsModalViewVisible(true);
  //console.log(project._id,"project id inside edit")
  setProjectName(project.projectName);
  setProjectDescription(project.projectDescription);
  setsetProjectCategory(project.content);
  //console.log("projectContent",project.content)
  setFileData(project.coverImage);

  };
const containerRef=useRef()
const [isModalVisible, setIsModalVisible] = useState(false);
const [isViewModalVisible, setIsModalViewVisible]=useState(false)
const [filterVisible, setFilterVisible] = useState(false);
const [uiUx,setUiUx] = useState(false);
const [web,setWeb] = useState(false);
const [mobile,setMobile] = useState(false);
const [blenderThreeD,setBlenderThreeD] = useState(false);
const [graphicsDesign,setGraphicsDesign] = useState(false);
const [games,setGames] = useState(false);

const handleAddProject = () => {
  setIsModalVisible(true);
};

const handleModalCancel = () => {
  setIsModalVisible(false);
  setIsModalViewVisible(false);
  setIsViewFilterModalVisible(false);
  setVisible(false)
};
const handleModalCancelFiltered = () => {
  setIsViewFilterModalVisible(false);
};
const handleFilterVisibility = (event) => {
  event.stopPropagation();
  setFilterVisible(true);
};

const handleFilterSubmit = (values) => {
  // Handle filter submission here
  //console.log(values);
};

const cardRef = useRef(null);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setFilterVisible(false);
    }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);

const onChange = (date, dateString) => {
  console.log("datestring",dateString);
};
const onSelect=(e)=>{
  //console.log(`checked = ${e.target.checked}`);
}
const handleUiUx = () => {
  setUiUx(!uiUx);
};
const handleWeb = () => {
  setWeb(!web);
};
const handleMobile = () => {
  setMobile(!mobile);
};
const handleBlenderThreeD = () => {
  setBlenderThreeD(!blenderThreeD);
};
const handleGraphicsDesign = () => {
  setGraphicsDesign(!graphicsDesign);
};
const handleGames = () => {
  setGames(!games);
};
const handleFilterClear=()=>{
  setUiUx(false);
  setWeb(false);
  setMobile(false);
  setBlenderThreeD(false);
  setGraphicsDesign(false);
  setGames(false);
}
const handleFilter = (value) => {
  let filteredProjects = [];

  if (uiUx) {
    filteredProjects = [...filteredProjects, ...projects.filter((project) => project.content.category === "ui-ux-design")];
  }
  if (web) {
    filteredProjects = [...filteredProjects, ...projects.filter((project) => project.content.category === "web-dev")];
  }
  if (mobile) {
    filteredProjects = [...filteredProjects, ...projects.filter((project) => project.content.category === "mobile-app-dev")];
  }
  if (blenderThreeD) {
    filteredProjects = [...filteredProjects, ...projects.filter((project) => project.content.category === "blender-3d")];
  }
  if (graphicsDesign) {
    filteredProjects = [...filteredProjects, ...projects.filter((project) => project.content.category === "graphics-design")];
  }
  if (games) {
    filteredProjects = [...filteredProjects, ...projects.filter((project) => project.content.category === "game")];
  } if (filteredProjects.length == 0) {
    filteredProjects = [...projects];
  }

  const sorted = filteredProjects.sort((a, b) => a.projectName.localeCompare(b.projectName));
  console.log("Sorted",sorted);
  console.log(filteredProjects);

  setFilteredProjects(sorted);
  setFilteredProjectsVisibility(true);
};


  return (
    <div className='flex flex-col pt-4 w-screen'>
       <div    style={{ position: 'fixed', top: 80, zIndex: 999 }} className='w-full flex flex-row items-center pt-8 pl-8'>
       
        <Search
      placeholder="Search projects"
      allowClear
      onChange={(e)=>{setSearchText(e.target.value);handleSearch(e.target.value);}}
      className='w-4/5 bg-white rounded'
   
      // onClick={}
      // style={{
      //   width: 200,
      // }}
    />
      {!filterVisible?<Button className='bg-white' onClick={handleFilterVisibility}><AdjustmentsHorizontalIcon className='text-black' width={18} height={18}/>
</Button>:<Button className='bg-white' onClick={()=>{setFilterVisible(false)}}><XMarkIcon className='text-black' width={18} height={18}/>
</Button>}
      
      </div>
      <div className='relative'>
      {filterVisible && (
        <div ref={cardRef}>
        <Card className='ml-8 mt-[9.5rem] w-[82%] mr-10' style={{ position: 'fixed', top: 0, zIndex: 999 }}>
        <Form onFinish={handleFilterSubmit}>
        <Form.Item>
          <div className='flex flex-col md:flex md:flex-row items-start'>
          <Checkbox checked={uiUx} className='ml-2' onChange={(e) => handleUiUx()}>UI/UX design</Checkbox>
          <Checkbox checked={web} onChange={(e) => handleWeb()}>Websites</Checkbox>
          <Checkbox checked={mobile} onChange={(e) => handleMobile()}>Mobile apps</Checkbox>
          <Checkbox checked={blenderThreeD} onChange={(e) => handleBlenderThreeD()}>Blender 3D</Checkbox>
          <Checkbox checked={graphicsDesign} onChange={(e) => handleGraphicsDesign()}>Graphics design</Checkbox>
          <Checkbox checked={games} onChange={(e) => handleGames()}>Games</Checkbox>
</div>
          </Form.Item>
          {/* <Form.Item>
            <Input
              placeholder="Filter by category"
              allowClear
              size="medium"
              onPressEnter={(e) => { handleFilter(e.target.value); setFilterText(e.target.value); }}
              onChange={(e) => { setFilterText(e.target.value); }}
            />
          </Form.Item> */}

          {/* <Form.Item className='flex flex-col'>
            <p className='pb-2'>Filter by date:</p><DatePicker size="middle" onChange={onChange} />
            </Form.Item> */}
          <div className='flex flex-row pt-4'>
            <Button onClick={() => handleFilter(filterText)} className='bg-black text-white mr-2' type="primary" htmlType="submit">
              Apply Filter
            </Button>
            <Button onClick={() => {setFilteredProjectsVisibility(false);handleFilterClear();}} className='bg-black text-white' type="primary" htmlType="submit">
              Clear Filter
            </Button>
          </div>
        </Form>
      </Card></div>
      )}</div>
       
        <div className="bg-white flex flex-col px-10 pb-10 pt-20">
      <div className='flex flex-col items-start relative group'> 
        <p className="text-sm pb-4">Projects</p>
  <h1 className='text-3xl pb-4 font-bold hover:text-black hover:cursor-default'>Our Projects</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[10.6rem]'></div>
</div>
      <div className="mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
   
     
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
       

       
       {/* filtered project listing */}
       
        {filteredProjectsVisibility ?(  ( filteredProjects?.length>0?
         ( filteredProjects?.map((project) => (
            <>
            <div key={project._id} className="group flex flex-col items-center ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
             <div className='overflow-clip'>
             <Image
    width={250}
    height={110}
    src={project.coverImage}
    alt="Image was here."
    className="object-cover object-center group-hover:opacity-75"
  /></div>
              </div>
              <h3 className="mt-4 text-md font-bold text-center text-gray-700 truncate w-4/5">{project.projectName}</h3>
              <div className='flex flex-row mt-4'></div>
             
              <a href={projectContent.link}><button
            
                className=" mt-10 block w-full rounded-md bg-white hover:shadow-lg px-3 py-2 
                text-center text-sm font-semibold text-black shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]
                 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 
                 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <div className='flex flex-row justify-center items-center'>View
                  <ArrowRightOutlined className='pl-12' width={24} height={24}/></div>
              </button></a>
           
            </div>
               <Modal
               projectName="View project"
               open={isViewFilterModalVisible}
               onCancel={()=>{handleModalCancelFiltered();setIsViewFilterModalVisible(false);}}
               afterClose={()=>{setIsViewFilterModalVisible(false)}}
               footer={null}
               className='h-[80vh] mb-10 pb-4'
               >
                 <p>Project Name:</p>
                <h1 className='text-xl font-bold'>{projectName}</h1> 
               <p className='pb-1 pt-2'>Project Description:</p>
               <div className="max-h-[30vh] overflow-y-scroll">
                <p>
                   {projectDescription}</p></div>
                   <p>Project Link:</p>
                <h1 className='text-xl font-bold'>{projectContent.link}</h1> 
               <p className='pb-4 pt-2'>Project image:</p>
               <div className='overflow-clip'>
   <Image
   width={470}
   height={235}
   src={fileData}
   alt="Image was here."
   className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
   /></div>
               </Modal>
               </>
          ))):
       <Empty
 image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
 imageStyle={{
   height: 60,
 }}
 projectDescription={
   <span>
     No Projects found
   </span>
 }
 className=''
>
 
</Empty>
          )):
          
          
          //Normal project listing
          
          ( projects?.length>0&&(projects?.map((project) => (
            
            <div key={project._id} className="group flex flex-col items-center ">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
              
            <div className='overflow-clip'>
            <Image
    width={350}
    height={110}
    src={project.coverImage}
    alt="Image was here."
    className="object-cover object-center group-hover:opacity-75"
  /></div>
              
              </div>
            <h3 className="mt-4 text-md font-bold text-gray-700 truncate w-4/5">{project.projectName}</h3>
     
           
      <a href={projectContent.link} target="_blank"><button
               onClick={()=>{handleView(project);setProjectId(project._id)}}
              href="#"
              className=" mt-10 block w-full rounded-md bg-white hover:shadow-lg px-3 py-2 text-center text-sm font-semibold text-black shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)] hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View
                <ArrowRightOutlined className='pl-12' width={24} height={24}/>
            </button></a>
            <Modal
projectName="View project"
open={isViewModalVisible}
onCancel={handleModalCancel}
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
<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-cover rounded-lg xl:aspect-h-8 xl:aspect-w-7">
<div className='overflow-clip object-cover'>
<Image
                  width={550}
                  height={210}
                  src={fileData}
                  alt="Image was here."
                  className="object-cover object-center group-hover:opacity-75"
                /></div>
                
              </div>
</Modal>
          </div>
          )
          ))
          )
          
          }



{projects.length==0  && !filteredProjectsVisibility ?(<Empty
 image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
 imageStyle={{
   height: 60,
 }}
 projectDescription={
   <span>
     No Projects Posted
   </span>
 }
>
 
</Empty>):<></>}
  
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllPortfolioProjects