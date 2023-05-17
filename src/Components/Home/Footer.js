import { EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, SlackOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Button, Col, Form, Row } from 'antd'
import React, { useState } from 'react'
import { Input } from 'antd';
import { Bars3Icon,EnvelopeIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
const { TextArea } = Input;


const Footer = () => {
  const [form] = Form.useForm();
  const [service, setService] = useState([]);

  const onFinish = async (values) => {
    try {
      const { email, message, fullName} = values;
  
        const data = {
        from: email,
        subject: "",
        text: message,
        fullName,
        phoneNumber: ""
      };
  
      // //console.log('Request Data:', data);
  
      const response = await fetch('https://efkoauth.onrender.com/email/sendFromClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        // //console.log('Success', responseData);
        form.resetFields();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      // //console.log('Error', error);
      // Handle error here
    }
  };
  return (
    <div className='flex flex-col  bg-black text-white p-16'>
    <div className='flex flex-wrap justify-between'>
 

    <div>
    <div className="grid grid-rows-3 grid-flow-col gap-4 pb-4">
  <div className="row-span-3 bg-zinc-900 flex p-3 rounded items-center"><DevicePhoneMobileIcon width={40} height={40}/></div>
  <div className="col-span-2 "> <p>+251912345678 </p></div>
  <div className="row-span-2 col-span-2 ">  <p>Feel free to reach out to us directly for potential collaborations or answer any questions you may have.</p></div>
</div>
<div className="grid grid-rows-3 grid-flow-col gap-4 pb-4">
  <div className="row-span-3 bg-zinc-900 flex p-3 rounded items-center"><MapPinIcon width={40} height={40}/></div>
  <div className="col-span-2 "> <p>Addis Ababa, Ethiopia</p></div>
  <div className="row-span-2 col-span-2 ">  <p>Our studio is located in Addis Ababa, Ethiopia. Visit us at [Address] to discuss your project.</p></div>
</div>
<div className="grid grid-rows-3 grid-flow-col gap-4 pb-4">
  <div className="row-span-3 bg-zinc-900 flex p-3 rounded items-center"><EnvelopeIcon width={40} height={40}/></div>
  <div className="col-span-2 "> <p>support@tsinue.com</p></div>
  <div className="row-span-2 col-span-2 ">  <p>Get in touch via email. We're here to answer questions and provide information.</p></div>
</div>
    
    </div>
    <div className='flex flex-col w-full items-start xl:w-1/2 xl:pl-10'>
        <div className='relative group flex mb-4'>
  <h2 className='text-2xl font-bold hover:text-white mb-4 hover:cursor-default'>Contact us</h2>
  <div className='rounded-full bg-white w-10 h-[0.4rem]
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-white group-hover:w-[7.5rem]'></div>
</div>
<Form
                form={form}
                name="contact-form"
                onFinish={onFinish}
                layout="vertical"
                className='w-full'
                >
  <Form.Item
                  name="fullName"
                  label={<label style={{ color: "white" }}>Name</label>}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input className="bg-black text-white placeholder-white hover:border-white" placeholder="Name" /></Form.Item>
    <Form.Item
                  name="email"
                  label={<label style={{ color: "white" }}>Email</label>}

                style={{ color: "white" }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email address!',
                    },
                    {
                      type: 'email',
                      message: 'Please enter a valid email address!',
                    },
                  ]}
                ><Input className="bg-black text-white placeholder-white hover:border-white" placeholder="Email" /></Form.Item>
   <Form.Item
                  name="message"
                  label={<label style={{ color: "white" }}>Message</label>}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your message!',
                    },
                  ]}
                ><TextArea className="bg-black text-white
                 placeholder-white hover:border-white" placeholder="Message" rows={4} /></Form.Item>
  <Button htmlType="submit" className="bg-zinc-600 text-white hover:bg-zinc-800 hover:text-white rounded-full border-2 border-white px-4 py-1">Contact us</Button>
</Form>
    </div>
    </div>
    <div className='flex justify-center pt-10'><FacebookOutlined className='text-3xl pr-4'/> 
    <TwitterOutlined className='text-3xl pr-4'/> <YoutubeOutlined className='text-3xl pr-4'/> <LinkedinOutlined className='text-3xl pr-4'/>
    <SlackOutlined className='text-3xl pr-4'/><InstagramOutlined className='text-3xl pr-4'/>
    </div>
    </div>
  )
}

export default Footer
