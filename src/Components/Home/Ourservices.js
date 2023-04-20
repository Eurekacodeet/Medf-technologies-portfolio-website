import React from 'react'
import { Card } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons'
const { Meta } = Card;

const Ourservices = () => {
  return (
    <div className='bg-black text-white p-10'>
      <div className='' >


        <div className='relative group'>
          <h1 className='text-3xl py-4 font-bold hover:text-white mb-8 hover:cursor-default'>Our services</h1>
          <div className='rounded-full bg-white w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-white group-hover:w-[11rem]'></div>
        </div>



      </div>
      <div className='flex flex-wrap pt-10 justify-evenly'>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%] mt-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%] mt-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%] mt-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%] mt-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%] mt-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>
        <Card className='flex justify-center flex-col w-[28%] text-center h-[50vh] mr-[5%] mt-[5%]'
          hoverable
          style={{ height: '50vh', }}
          cover={< AntDesignOutlined className='text-7xl' />}
        >
          <Meta title="UI/UX Design" description="Analyse datasets in order to draw conclusions about information with specific system" />
        </Card>

      </div>
    </div>
  )
}

export default Ourservices
