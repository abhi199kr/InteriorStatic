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
            {/* <form action="" className='p-3 card'>
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
            </form> */}

            <section id="contact">
  
  <h1 class="section-header text-center text-white">Contact</h1>
  
  <div class="contact-wrapper text-center">
  
 
    
    <form id="contact-form" class="form-horizontal p-3" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div class="form-group my-3">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        {/* <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div> */}
        send
      
      </button>
      
    </form>
    
  
    
    
    
  </div>
  
</section>  
  
        </div>

        </div>
    </div>

      
    </div>
  )
}

export default Contact
