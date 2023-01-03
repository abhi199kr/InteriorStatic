import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='container'>
    <h1 className='text-center o'>Contact us</h1>
    {/* Flex */}
    <div className="d-flex flex-md-row flex-column mt-5">
        <div className='w-md-50 w-100 p-5 align-items-center justify-content-center my-auto'>
            <h1>Contact Info</h1>
            <h5>Rusulpur Salim <br />
            Muzaffarpur,Bihar ,842004
            <br />
            Bihar</h5>
        </div>
        <div className='w-md-50 w-100'>
        <div className="w-fit">
            <form action="" className='p-3 card'>
                <label className='h3' htmlFor="">Name
                <br />
                <input type="text" /></label>
                <br />
                <label className='h3' htmlFor="">Email
                <br />
                <input type="email" /></label>
                <br />
                <label className='h3' htmlFor="">Phone
                <br />
                <input type="text" /></label>
                <br />
                <label className='h3' htmlFor="">Address
                <br />
                <input type="text" /></label>
                <br />

                <label className='h3' htmlFor="">Message
                <br />
                <textarea name="" id="" cols="25" rows="5"></textarea>
                </label>
                <br />
                <button className='btn btn-success'>Send Message</button>
            </form>
        </div>

        </div>
    </div>

      
    </div>
  )
}

export default Contact
