import React from 'react'
import './companystats.css'
import Efko from '../../assets/efko.png'

import CountUp from 'react-countup';
import AddIcon  from '@mui/icons-material/Add';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
const Companystats = () => {
  return (
<div className='com_stat_all_con'>
<div className='table_aligner'>
<table className='table_com_stat' style={{ borderRadius: '100px' }}>
<tr>
    <td>
    <p className="">Why choose us</p>
 <h1>EFKO unfolds solutions to everything </h1>

 <h3></h3> 
    </td>
    <td><AccessTimeIcon id="icons"/><p id="font_size">Punctuality</p></td>
    <td><WorkspacePremiumIcon id="icons"/><p id="font_size">Quality</p></td>
    <td rowspan="2">
        <img src={Efko}/>
        </td>
  </tr>

 
  <tr className='stat_one_texts'>
    <td id='td_count_up'><CountUp className="count_up" delay={2} end={10} /><AddIcon className='plus_icon'/><p id="font_size">Clients</p></td>
    <td><CountUp className="count_up" delay={2} end={100} /><AddIcon className='plus_icon'/><p id="font_size">Members</p></td>
    <td><CountUp className="count_up" delay={2} end={97} /><AddIcon className='plus_icon'/><p id="font_size">Projects</p></td>
  </tr>
</table>

</div>
</div>
  )
}

export default Companystats