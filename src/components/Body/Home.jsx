import React from 'react'
import './Home.css'
import { FaChartLine, FaCogs, FaWrench } from 'react-icons/fa';
import {MdOutlineSecurity} from 'react-icons/md'
import {BsDatabaseDash,BsUniversalAccess} from 'react-icons/bs'
import {LuDatabaseBackup} from 'react-icons/lu';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiShield } from 'react-icons/bi';
import {  FaRegLightbulb, FaExchangeAlt, FaLaptop } from 'react-icons/fa';
import {GiStopwatch} from 'react-icons/gi'
import {RiLightbulbLine}from 'react-icons/ri'


function Home() {
  return (
    <div>
    
        <h1 className='heading__title'>Leading Big DataAnalytic Company </h1>
        <p className='first__paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt 
          dolorem quo sequi. Ut nesciunt dolorem<br/> quas 
          facilis velit a? Ex, culpa earum necessitatibus quo natus nihil 
          quasi consequuntur nesciunt similique?</p>
          <button className='first__btn'>Get Started</button>
          
          
            <div className='service__container'>
            <div className='service1'>
  <h3 className='service_title'><FaChartLine /> Analyze Your Data</h3>
  <p className='service__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cupiditate eius omnis recusandae natus repudiandae, blanditiis soluta corporis</p>
</div> 

<div className='service2'>
  <h3 className='service_title'><FaCogs /> Customized Plan</h3>
  <p className='service__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cupiditate eius omnis recusandae natus repudiandae, blanditiis soluta corporis</p>
</div> 

<div className='service3'>
  <h3 className='service_title'><FaWrench /> Implement Solution</h3>
  <p className='service__description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cupiditate eius omnis recusandae natus repudiandae, blanditiis soluta corporis</p>
</div>

  </div>
  <div className='service__list_container'>
  <div className='service__list1'>
    <MdOutlineSecurity className='service__icons'/>
      <h2 className='service__list_title'>Data Security</h2>
     <p className='service__list_paragraph'>Lorem ipsum dolor sit amet consectetur
      <br/>adipisicing elit. Suscipit!</p>
      <ul className='service__list_ul'>
        <li className='service__lists'><BsDatabaseDash/>Data Loss Prevention</li>
        <li className='service__lists'> <BsUniversalAccess/> Access Controls</li>
        <li className='service__lists'><LuDatabaseBackup/> Backup and Disaster Recovery</li>
        <li className='service__lists'><AiOutlineCheckCircle /> Security Audits </li>
        <li className='service__lists'><BiShield /> Security Awareness Training</li>
        
      </ul>
  </div>
  <div className='service__list2'>
    <GiStopwatch className='service__icons'/>
      <h2 className='service__list_title'>Real-time Analytics</h2>
     <p className='service__list_paragraph'>Lorem ipsum dolor sit amet consectetur
      <br/>adipisicing elit. Suscipit!</p>
      <ul className='service__list_ul'>
        <li className='service__lists'><BsDatabaseDash/>Real-time Data Processing</li>
        <li className='service__lists'> <BsUniversalAccess/> Streaming Analytics</li>
        <li className='service__lists'><LuDatabaseBackup/> Event-driven Analytics</li>
        <li className='service__lists'><AiOutlineCheckCircle /> Real-time Dashboards and Visualization</li>
        <li className='service__lists'><BiShield /> Predictive Analytics in Real-time</li>
        
      </ul>
  </div>
 
  <div className='service__list3'>
    <RiLightbulbLine className='service__icons'/>
      <h2 className='service__list_title'>Consulting and Strategy</h2>
     <p className='service__list_paragraph'>Lorem ipsum dolor sit amet consectetur
      <br/>adipisicing elit. Suscipit!</p>
      <ul className='service__list_ul'>
  <li className='service__lists'><FaCogs /> Business Process Optimization</li>
  <li className='service__lists'><FaChartLine /> Market Research </li>
  <li className='service__lists'><FaRegLightbulb /> Strategic Planning and Execution</li>
 
  <li className='service__lists'><FaLaptop /> Digital Transformation Consulting</li>
</ul>
  </div>
  </div>
  <div className='super__ai'>
  <p className='super__ai_title'>Super AI Machine You <br/> need to use!</p>
 
  </div>
  <footer>
  <p className='copyright'>&copy; 2023 Your Company. All rights reserved. <i class="fas fa-copyright"></i></p>
</footer>

</div>
    
   
  )
}

export default Home
