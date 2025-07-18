import React from 'react';
import './Banner2.css';
import posterImage from '../../assets/poster.png'

function Banner2() {
  return (
    <div id="about" className="about-us-section ">
      <div className="container mt-5 mb-4">
        <div className="row align-items-center">

          <div className="col-lg-6 position-relative d-flex justify-content-center justify-content-lg-start  mb-5">
            <div className='imgBanner2'>
              <img src={posterImage} alt=''></img>
            </div>
          </div>

          <div className="col-lg-6 mb-4 ">
            <p
              className="about text-uppercase small text-center text-lg-start text-success fw-semibold mb-2">
              About Us <i className="bi bi-cursor-fill ms-1"></i>
            </p>
            <h1 className="fw-bold mb-4 mt-2 text-center text-lg-start">
              Unknown Wanderlust<br />Your Journey into
            </h1>
            <p className="text-muted mb-4 text-center text-lg-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <div className="row">
              <div className="col-md-6 mb-3 d-flex justify-content-center text-center text-lg-start">
                
                <div>
                  <strong><i className="bi bi-check-square-fill green-icon me-2"></i>Safety Guides</strong><br />
                  <div className='ps-lg-4'>
                  <small className="text-muted">Consectetur adipiscing elit text-start text-start  adipiscing elit</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3 d-flex justify-content-center text-center text-lg-start">
                <div>
                  <strong><i className="bi bi-check-square-fill green-icon me-2"></i>Passport Assistance</strong><br />
                  <div className='ps-lg-4'>
                  <small className="text-muted">Consectetur adipiscing elit text-start text-start  adipiscing elit</small>
                  </div>
                </div>
              </div>
            </div>
            <a
              href=""
              className="aboutbtn btn float-center float-lg-start rounded-pill mt-4"
            >
              Read More <i className="fa fa-arrow-right ms-1"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Banner2;
