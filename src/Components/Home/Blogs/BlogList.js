import { ArrowRightOutlined } from '@ant-design/icons';
import { Image, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs,setBlogs]=useState([])
  const [fileData,setFileData]=useState(null)
  const [title,setTitle]=useState("")
  const [description, setDescription]=useState("")
  const [category, setCategory]=useState("")
  const [isModalVisible, setIsModalVisible]=useState(false)
  useEffect(()=>{
    const fetchBlog=async()=>{
try{const response=await fetch('https://efkomedia.onrender.com/blog')
const result=await response.json()
setBlogs(result)}catch(err){
  
}
    }
    fetchBlog()  
  },[blogs])
  const handleViewBlog = (blog) => {
    setIsModalVisible(true);
  // console.log(blog._id,"blog id inside edit")
  setTitle(blog.title);
  setDescription(blog.description);
  setCategory(blog.category);
  // console.log("category",blog.category)
  setFileData(blog.imageSrc);

  };
  const handleCancel=()=>{
setIsModalVisible(false)
  }
  return (
    <div className="bg-white flex flex-col p-10">
      <div className='flex flex-row justify-between'>
      <div className='relative group'> 
        <p className="text-sm pb-4">Blogs</p>
  <h1 className='text-3xl pb-4 font-bold hover:text-black hover:cursor-default'>Latest Blogs</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[10.6rem]'></div>
</div>
<div>
  <Link className='py-4 text-blue-400 underline' to="/allblogs">View all</Link>
  </div></div>
      <div className="mx-auto max-w-2xl px-8 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
   
     
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {blogs?.slice(0,4).map((blog) => (
            
            <div key={blog._id} className="group flex flex-col items-center ">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
            <div className='overflow-clip'>
            <Image
  width={290}
  height={160}
  src={blog.imageSrc}
  alt="Image was here."
  className="object-cover object-center group-hover:opacity-75"
/></div>
            </div>
            <h3 className="mt-4 text-md font-bold text-center text-gray-700 truncate w-4/5">{blog.title}</h3>
        
           
            <button
           onClick={()=>{handleViewBlog(blog);}}
              className=" mt-10 block w-full rounded-md bg-white hover:shadow-lg px-3 py-2 
              text-center text-sm font-semibold text-black shadow-[2px_2px_10px_0px_rgba(0,0,0,0.1)]
               hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 
               focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <div className='flex flex-row justify-center items-center'>Read More
                <ArrowRightOutlined className='pl-12' width={24} height={24}/></div>
            </button>
         
          </div>
          ))}
        </div>
         <Modal
               title="View blog"
               open={isModalVisible}
               onCancel={()=>{handleCancel();setIsModalVisible(false);}}
               afterClose={()=>{setIsModalVisible(false)}}
               footer={null}
               className='h-[80vh] mb-10 pb-4'
               >
                 <p>Blog title:</p>
                <h1 className='text-xl font-bold'>{title}</h1> 
               <p className='pb-1 pt-2'>Blog description:</p>
               <div className="max-h-[30vh] overflow-y-scroll">
                <p>
                   {description}</p></div>
               <p className='pb-4 pt-2'>Blog image:</p>
               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden object-fill rounded-lg xl:aspect-h-8 xl:aspect-w-7">
               <div className='overflow-clip'>
                <Image
                 width={470}
                 height={235}
                 src={fileData}
                 alt="Image was here."
                 className="h-[30vh] w-[50vw] object-cover object-center group-hover:opacity-75"
               /></div>
               </div>
               </Modal>
      </div>
    </div>
  )
}