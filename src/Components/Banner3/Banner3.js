
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner3.css'

function Banner3() {
  return (
    <div className='Banner3'>
            <div className='bannerSub container'>
            
            <div className='subTitle text-start pt-5'>
                <span>OUR SERVICES <i className='bi bi-cursor-fill'></i></span>
            </div>
            <div className='subsubTitle row align-items-center justify-content-between '>
                <div className='title text-start col-md-8 col-lg-10'>
                    <span>Adventure Unleashed <br/>Discover Your Next</span>
                </div>
                <div className='arrow col-md-4 col-lg-2 justify-content-lg-end justify-content-md-end'>
                        <button className='btn'><i className="fas fa-arrow-left"></i></button>
                        <button className='btn'><i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
            
            <div className='cards row justify-content-center'>
                <div className='col-12 col-sm-6 col-lg-4 mb-4'>
                <div className='card pb-4'>
                    <div className='icon-circle mt-4 mx-auto'>
                    <i className='fa-solid fa-earth text-white fs-3'></i>
                    </div>
                    <div className='cardTitle '>
                        <h2>Food And Wine Tours</h2>
                    </div>
                    <div className='overview'>
                        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been scrambled it to make a type specimen book.</h4>
                    </div>
                </div>
                </div>

                <div className='col-12 col-sm-6 col-lg-4 mb-4'> 
                <div className='card pb-4'>
                   <div className='icon-circle mt-4 mx-auto'>
                    <i className='fa-solid fa-plane text-white fs-3'></i>
                    </div>
                    <div className='cardTitle'>
                        <h2>Travel Opportunities</h2>
                    </div>
                    <div className='overview'>
                        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
                    </div>
                </div>
                </div>

                <div className='col-12 col-sm-6 col-lg-4 mb-4'> 
                <div className='card pb-4'>
                    <div className='icon-circle mt-4 mx-auto'>
                    <i className='fa-solid fa-suitcase text-white fs-3'></i>
                    </div>
                    <div className='cardTitle'>
                        <h2>Solo Travel Planning</h2>
                    </div>
                    <div className='overview'>
                        <h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</h4>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner3
