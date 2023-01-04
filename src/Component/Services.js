import React from 'react'
import "./Services.css"
import la from "../Images/la.avif"
import {BsFillSuitHeartFill, BsHandThumbsUp } from 'react-icons/bs';
import {BsFlagFill } from 'react-icons/bs';
import {BsFillHandThumbsUpFill } from 'react-icons/bs';
import {BsFillCloudFill} from 'react-icons/bs';
import {GiCarWheel } from 'react-icons/gi';
import {CiBank } from 'react-icons/ci';

const Services = () => {
  return (
    <div className='sbg'>
    <div className='container'>
    <h1 className='text-center mt-5 o'>Our Services</h1>
      <p className='p-5 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae eum minus est dolores modi non! Dolorem beatae, velit ex voluptates architecto at debitis harum sit perferendis obcaecati nisi, alias labore?
      </p>

      {/* flex contaienr */}
      <div className="d-flex flex-md-row flex-column gap-5">
        <div className='d-flex cs gap-1'>
        <div>
        <BsFillSuitHeartFill className='pt-5' style={{fontSize:"100px"}}/>

        </div>
        <div>
            <h3>Concept Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio pariatur autem qui, mollitia illum culpa voluptate,
            </p>
        </div>

        </div>

        <div className='d-flex cs gap-1'>
        <div>
        <BsFlagFill className='pt-5' style={{fontSize:"100px"}}/>

        </div>
        <div>
            <h3>Luxerior Interior</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio pariatur autem qui, mollitia illum culpa voluptate,
            </p>
        </div>

        </div>

        <div className='d-flex cs gap-1'>
        <div>
        <BsFillHandThumbsUpFill  className='pt-5' style={{fontSize:"100px"}}/>

        </div>
        <div>
            <h3>Wow Living Room</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio pariatur autem qui, mollitia illum culpa voluptate,
            </p>
        </div>

        </div>
      </div>


       {/* 2nd flex contaienr */}
       <div className="d-flex flex-md-row flex-column gap-5 mt-5">
        <div className='d-flex cs gap-1'>
        <div>
        <GiCarWheel className='pt-5' style={{fontSize:"100px"}}/>

        </div>
        <div>
            <h3>Concept Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio pariatur autem qui, mollitia illum culpa voluptate,
            </p>
        </div>

        </div>

        <div className='d-flex cs gap-1'>
        <div>
        <BsFillCloudFill className='pt-5' style={{fontSize:"100px"}}/>

        </div>
        <div>
            <h3>Luxerior Interior</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio pariatur autem qui, mollitia illum culpa voluptate,
            </p>
        </div>

        </div>

        <div className='d-flex cs gap-1'>
        <div>
        <CiBank className='pt-5' style={{fontSize:"100px"}} />

        </div>
        <div>
            <h3>Wow Living Room</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio pariatur autem qui, mollitia illum culpa voluptate,
            </p>
        </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Services
