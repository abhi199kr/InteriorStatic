import React from 'react'
import "./Team.css"
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';

import { AiFillFacebook } from 'react-icons/ai';
const Team = () => {
  return (
    <div className='container'>
    <h1 className='text-center o'>Our Team</h1>
      <p className="text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab atque suscipit voluptatum quisquam nam aliquid obcaecati facilis, aspernatur illum odio rerum id temporibus 
      </p>

      {/* Flex */}
      <div className="d-flex flex-md-row flex-column gap-5">
        <div className="card">
            <img className='' src="https://media.istockphoto.com/id/1394017851/photo/multiracial-group-sits-in-circle-to-read-parts.jpg?b=1&s=170667a&w=0&k=20&c=aN9LQ29LxalK5RXwZSTdAO4WpOTmv_EHgAm_2CcQVig=" alt="" />
        <h4 className='text-center'>Abhishek</h4>
        <h6 className='text-center'>Founder</h6>       
        {/* icon flex */}
        <div className="d-flex gap-3 m-auto">
        <button><AiFillFacebook/></button>
        <button><BsTwitter/></button>
        <button><BsGoogle/></button>
        <button><BsLinkedin/></button>

        </div>
        
        </div>

        <div className="card">
            <img className='' src="https://media.istockphoto.com/id/1394017851/photo/multiracial-group-sits-in-circle-to-read-parts.jpg?b=1&s=170667a&w=0&k=20&c=aN9LQ29LxalK5RXwZSTdAO4WpOTmv_EHgAm_2CcQVig=" alt="" />
        <h4 className='text-center'>Abhishek</h4>
        <h6 className='text-center'>Founder</h6>       
        {/* icon flex */}
        <div className="d-flex gap-3 m-auto">
        <button><AiFillFacebook/></button>
        <button><BsTwitter/></button>
        <button><BsGoogle/></button>
        <button><BsLinkedin/></button>

        </div>
        
        </div>

        <div className="card">
            <img className='' src="https://media.istockphoto.com/id/1394017851/photo/multiracial-group-sits-in-circle-to-read-parts.jpg?b=1&s=170667a&w=0&k=20&c=aN9LQ29LxalK5RXwZSTdAO4WpOTmv_EHgAm_2CcQVig=" alt="" />
        <h4 className='text-center'>Abhishek</h4>
        <h6 className='text-center'>Founder</h6>       
        {/* icon flex */}
        <div className="d-flex gap-3 m-auto">
        <button><AiFillFacebook/></button>
        <button><BsTwitter/></button>
        <button><BsGoogle/></button>
        <button><BsLinkedin/></button>

        </div>
        
        </div>


        <div className="card">
            <img className='' src="https://media.istockphoto.com/id/1394017851/photo/multiracial-group-sits-in-circle-to-read-parts.jpg?b=1&s=170667a&w=0&k=20&c=aN9LQ29LxalK5RXwZSTdAO4WpOTmv_EHgAm_2CcQVig=" alt="" />
        <h4 className='text-center'>Abhishek</h4>
        <h6 className='text-center'>Founder</h6>       
        {/* icon flex */}
        <div className="d-flex gap-3 m-auto">
        <button><AiFillFacebook/></button>
        <button><BsTwitter/></button>
        <button><BsGoogle/></button>
        <button><BsLinkedin/></button>

        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Team
