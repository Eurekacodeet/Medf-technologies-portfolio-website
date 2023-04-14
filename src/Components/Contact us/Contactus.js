import React, { useState } from 'react';
import { Card, Form, Input, Select, Button } from 'antd';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';


const { Option } = Select;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [service, setService] = useState([]);


  const handleServiceChange = (value) => {
    setService(value);
  };

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

  };

  return (
    <div className="flex flex-col items-center h-full p-10 bg-white">
             <div >
      <h1 className='text-[1.6rem] font-bold break-words mr-4 text-black whitespace-pre '>C o n t a c t    u s </h1>

<div className='rounded-full w-10 h-[0.4rem] 
mt-4 hover:w-[16.7rem] transition-width bg-black duration-500 ease-in-out shadow shadow-black'></div>
      </div> 
      <Card className="w-full max-w-4xl mx-4 bg-black mt-10">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-1/2 md:mr-4 bg-black bg-fill p-8 text-white rounded ">
            <h1 className='text-2xl font-medium pb-4'>Contact information</h1>
     
            <p className='text-sm pb-8'>Fill up the form and our Team will get back to you within 24 hours</p>
            <div>
    <div class="flex flex-row items-center mb-4 ">
<PhoneOutlined className=' text-2xl pr-3 '/>
  <p>+251912345678</p>

</div>
<div class="flex flex-row  items-center mb-4 ">
<MailOutlined className=' text-2xl pr-3  '/>
  <p>example@gmail.com</p>

</div>
<div class="flex flex-row  items-center mb-4 ">
<EnvironmentOutlined className=' text-2xl pr-3  '/>
  <p>Addis Ababa, Ethiopia</p>

</div>



    
    </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0  bg-white p-10 ">
            <Form
              form={form}
              name="contact-form"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name!',
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name!',
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
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
              >
                <Input placeholder="Email Address" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
              <Form.Item
                name="service"
                label="Type of Service"
                rules={[
                  {
                    required: true,
                    message: 'Please select the service you are interested in!',
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Select a service"
                  onChange={handleServiceChange}
                >
                  <Option value="Service 1">Software development</Option>
                  <Option value="Service 2">UI/UX Design</Option>
                  <Option value="Service 3">Mobile application development</Option>
                </Select>
              </Form.Item>
              <Form.Item  name="message"
            label="Message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
              },
            ]}
          >
            <Input.TextArea placeholder="Message" />
          </Form.Item>
          <Form.Item>
            <Button className="bg-black" type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  </Card>
</div>
);
};

export default ContactUs;
