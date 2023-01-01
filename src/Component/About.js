import React from 'react'
import la from "../Images/la.avif"
import "./About.css"

const About = () => {
  return (
    <div className='container'>
      <h1 className='text-center mt-5 o'>About Us</h1>
      <p className='pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure repudiandae temporibus accusamus doloribus rem velit odio ipsum et dolores eum reprehenderit, possimus adipisci dolore libero placeat, in, asperiores exercitationem vero.
      </p>
      {/* Flex */}
      <div className="d-flex flex-md-row flex-column gap-5">
        <div>
            
             <img src={la} alt="a" />
        </div>
        <div>
            <h3 className='bb'>Our little Company</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore id eveniet magnam repellendus fugit nemo facere, accusamus aut magni harum hic ab expedita soluta alias ut? Ut consequatur sequi quas?
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
