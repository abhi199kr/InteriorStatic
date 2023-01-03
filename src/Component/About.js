import React from 'react'
import la from "../Images/la.avif"
import lap from "../Images/lap.avif"
import "./About.css"

const About = () => {
  return (
    <div className='container '>
      <h1 className='text-center mt-5 o'>About Us</h1>
      <p className='pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repudiandae temporibus accusamus doloribus rem velit odio ipsum et dolores eum reprehenderit, possimus adipisci dolore libero placeat, in, asperiores exercitationem vero.
      </p>
      {/* Flex */}
      <div className="d-flex mt-5 flex-md-row flex-column gap-5">
        <div className='w-md-50 p-5 w-100'>
            
             {/* <img src={lap} alt="a" /> */}
             <img className='img-fluid' src="https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='w-md-50 w-100 p-5'>
            <h3 className='bb '>Our little Company</h3>
            <p className='p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id eveniet magnam repellendus fugit nemo facere, accusamus aut magni harum hic ab expedita soluta alias ut? Ut consequatur sequi quas?
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
