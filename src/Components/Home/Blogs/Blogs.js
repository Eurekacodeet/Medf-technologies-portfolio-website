import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

const Blogs = () => {
  return (
    <div className='bg-white p-10'>
  <p className="text-sm pb-4">Blogs</p>


    <div className='relative group'>
  <h1 className='text-3xl pb-4 font-bold hover:text-black mb-8 hover:cursor-default'>Latest Blogs</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[10.6rem]'></div>
</div>


    <div className='flex flex-wrap pt-10 justify-evenly'>
    <Card
    hoverable
    className='h-1/3 mr-10 mb-10'
    style={{
      width: 300,
     
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    className='h-1/3  mr-10 mb-10'
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
  className='h-1/3  mr-10  mb-10'
    style={{
      width: 300,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
    </div>
    </div>
  )
}

export default Blogs
