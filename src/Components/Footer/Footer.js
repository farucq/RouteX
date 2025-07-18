import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

function Footer() {
  return (
    <div className='footerMain'>
    <div className='footer container'>
        <div className='row '>
        
        <div className='routeX col-12 col-md-6 col-lg-3 ps-lg-2 '>
            <div className='routexMain justify-content-center  justify-content-md-start'>
            <i className="fa fa-plane me-2 d-flex align-items-center text-success fs-4 ms-2"></i>
            <div className='title'>    
                <h3>RouteX</h3>
            </div>
            </div>
            <div className='overview text-center text-md-start'>
                <p>Lorem Ipsum is simply dummy text of the printing and the text ever since the 1500s.</p>
                
            </div>
            <div className='icons justify-content-center  justify-content-md-start'>
                <i className='socialIcon bi bi-facebook'></i>
                <i className='socialIcon bi bi-instagram'></i>
                <i className='socialIcon bi bi-pinterest'></i>
                <i className='socialIcon bi bi-linkedin'></i>
            </div>

        </div>
        <div className='serviceMenu col-12 col-md-6 col-lg-3  ps-lg-5  text-center text-md-start'>
            <div className='title'>
                <span>Service Menu</span>
            </div>
            <div className='subTitle d-inline-block text-start' >
                <p><i className='fa fa-check text-success me-1'></i> Mistakes To Avoid<br/>
                <i className='fa fa-check text-success me-1'></i> Your Startup<br/>
                <i className='fa fa-check text-success me-1'></i> Knew About Fonts<br/>
                <i className='fa fa-check text-success me-1'></i> Knew About Fonts</p>

            </div>
        </div>
        <div className='usefulLink col-12 col-md-6 col-lg-3 ps-lg-5 text-center text-md-start'>
            <div className='title'>
                <span>Useful Link</span>
            </div>
            <div className='subTitle d-inline-block text-start'>
                <p><i className="fas fa-chevron-right text-success me-1"></i> Latest News<br/>
                <i className="fas fa-chevron-right text-success me-1"></i> Careers<br/>
                <i className="fas fa-chevron-right text-success me-1"></i> General Inquiries<br/>
                <i className="fas fa-chevron-right text-success me-1"></i> Case Studies</p>

            </div>
            
        </div>
        <div className='gallery col-12 col-md-6 col-lg-3 text-center text-md-start'>
            <div className='title'>
                <span>Gallery</span>
            </div>
            <div className='imageRow1 justify-content-center justify-content-md-start'>
                <img src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="" />
                <img src="https://plus.unsplash.com/premium_photo-1664474834472-6c7d1e3198e2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <img src="https://www.openaccessgovernment.org/wp-content/uploads/2019/03/dreamstime_s_115214614.jpg" alt="" />
            </div>
            <div className='imageRow2 justify-content-center justify-content-md-start'>
                <img src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149831305.jpg?semt=ais_hybrid&w=740" alt="" />
                <img src="https://thumbs.dreamstime.com/b/confused-customer-calling-support-service-smart-phone-office-116041961.jpg" alt="" />
                <img src="https://www.flexjobs.com/blog/wp-content/uploads/2020/09/30064933/successful-remote-workers.png" alt="" />
            </div>
        </div>
        </div>
        </div>
        <div className='Line'>
        </div>
        <div className='footerBottom container text-white mt-3 pb-4'>
            <div className='row d-flex'>
            <div className='left col-12 col-md-6 text-center text-md-start'>
            <span>©RRDevs2025 | All Rights Reserved</span>
            </div>
            <div className='right d-flex justify-content-center justify-content-md-end col-12 col-md-6 text-center text-md-end'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
            <span>Contact Us</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
