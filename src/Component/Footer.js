import React from 'react'
import "./Footer.css"
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';
const Footer = () => {
  return (
    <div>
    <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About the company</span>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id voluptas velit distinctio eos quas reiciendis error voluptatem magnam deserunt! Fugit optio illo delectus odio autem? In esse corporis quis quaerat?

    </p>
    <div className="icons">
      <a href="#"><BsTwitter/></a>
      <a href="#"><BsFacebook/></a>
      <a href="#"><BsLinkedin/></a>
      <a href="#"><BsGoogle/></a>
      <a href="#"><i className="fa fa-phone"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span> Street name and number</span> City, Country</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+00) 0000 000 000</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#">Interior@company.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2>Interior<span>.com</span></h2>
    <p className="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p className="name"> Company Name &copy; 2016</p>
  </div>

</footer>
  <p className='text-center h5 text-light p-3 fb'>&copy; Copyright 2023 Interior.com</p>
      
    </div>
  )
}

export default Footer
