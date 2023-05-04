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

  const onFinish = async (values) => {
    try {
      const { email, service, message, firstName, lastName, phone } = values;
  
      const fullName = `${firstName} ${lastName}`;
  
      const data = {
        from: email,
        subject: service.toString(),
        text: message,
        fullName,
        phoneNumber: phone
      };
  
      console.log('Request Data:', data);
  
      const response = await fetch('https://efkobend.onrender.com/email/sendFromClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Success', responseData);
        form.resetFields();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.log('Error', error);
      // Handle error here
    }
  };

  return (
    <div className="flex flex-col items-center h-full p-10 bg-white mt-100">
      <div>
        <h1 className='text-[1.6rem] font-bold break-words mr-4 text-black whitespace-pre'>C o n t a c t    u s </h1>
        <div className='rounded-full w-10 h-[0.4rem] mt-4 hover:w-[16.7rem] transition-width bg-black duration-500 ease-in-out shadow shadow-black'></div>
      </div> 
      <Card className="w-full max-w-4xl mx-4 bg-black mt-10">
        <div className="md:flex md:flex-row md:justify-between">
          <div className="md:w-1/2 md:mr-4 bg-black bg-fill p-8 text-white rounded ">
            <h1 className='text-2xl font-medium pb-4'>Contact information</h1>
            <p className='text-sm pb-8'>Fill up the form and our Team will get back to you within 24 hours</p>
            <div>
              <div className="flex flex-row items-center mb-4">
                <PhoneOutlined className='text-2xl pr-3' />
                <p>+251912345678</p>
              </div>
              <div className="flex flex-row items-center mb-4">
                <MailOutlined className='text-2xl pr-3' />
                <p>example@gmail.com</p>
              </div>
              <div className="flex flex-row items-center mb-4">
                <EnvironmentOutlined className='text-2xl pr-3' />
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 bg-white p-10 ">
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
                    <Option value="Software development">Software development</Option>
                    <Option value="UI/UX Design">UI/UX Design</Option>
                    <Option value="Mobile application development">Mobile application development</Option>
                    <Option value="Web application development">Web application development</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="message"
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