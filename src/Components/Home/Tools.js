import React from 'react'
import Hadoop from '../../assets/hadoop.png' 
import Amazon from '../../assets/amazon_mc_learning.png'
import Apache from '../../assets/apache_spark.png'
import Azure from '../../assets/azure_mc_learning.png'
import Java from '../../assets/java.png'
import Jupyter from '../../assets/jupyter.png'
import Python from '../../assets/python.png'
import Marquee from "react-fast-marquee";
const Tools = () => {
  return (
    <div className="bg-white text-black p-10 flex flex-wrap overflow-hidden" >
      <div className="flex flex-col md:flex md:flex-row">
     
<div className=' w-1/7 ' >


<div className='relative group'>
  <h1 className='text-3xl py-4 font-bold hover:text-black mb-8 mr-4 hover:cursor-default'>Tools and Technology</h1>
  <div className='rounded-full bg-black w-10 h-[0.4rem] mt-2 
               absolute left-0 bottom-0 transition-all duration-500 ease-in-out shadow
                shadow-black group-hover:w-[19rem]'></div>
</div>

   

    </div>
<div className='pr-4 w-3/5'>
<Marquee speed={70} pauseOnHover={true} reverse={true} background="#f5f5f5" height="150px" className="marque_container"axis="X" width="1100px">
<img src={Hadoop} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Amazon} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Apache} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Azure} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Java} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
<img src={Jupyter} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
{/* <img src={Kibana} className="img-fluid-2"/> */}
{/* <img src={Parquet} className="img-fluid"/> */}
<img src={Python} className=" px-20 grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"/>
{/* <img src={Qlik} className="img-fluid"/> */}
{/* <img src={R} className="img-fluid"/> */}
</Marquee>
</div>

      </div>
    </div>
  )
}

export default Tools
