import React from 'react';
import { Button, Radio, Space, Divider,  } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';


const Whychus = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center text-white bg-[url("https://res.cloudinary.com/dvqawl4nw/image/upload/v1681051049/szpzxf4cq38iwlaupqcm.png")] bg-cover bg-center'>
      <div className='flex flex-col justify-center items-center text-center p-10'>
        <h3 className='text-[1.6rem] font-bold break-words mr-4 pb-6 '>Why you should choose us?</h3>
      <p className="text-sm pb-4">When it comes to choosing a software development partner, 
      clients want a team that they can trust to deliver high-quality solutions on time and within budget.
       That's why our experienced team of developers works closely with clients to understand their unique 
       needs and develop custom solutions that meet those requirements. We use the latest technologies 
       and best practices to ensure that our applications are scalable, maintainable, and secure.
        Our team is committed to open communication and transparency throughout the development process, 
        and we pride ourselves on delivering exceptional results that exceed our clients' expectations. 
        When you work with us, you can trust that you're partnering with a reliable and 
      trustworthy team that will work tirelessly to ensure your project's success.</p>

      <button className="bg-white text-black hover:bg-black hover:text-white font-bold py-2 px-4 rounded flex items-center">
        About us  <ArrowRightOutlined className='pl-2' />
</button>
</div>
<div className='mt-10 w-full'>
  <img className="w-full h-[40vh] object-cover" src="https://res.cloudinary.com/dvqawl4nw/image/upload/v1681052038/cw6ujcirna0z2lvexj6y.webp" />
</div>



    </div>
  )
}

export default Whychus;
