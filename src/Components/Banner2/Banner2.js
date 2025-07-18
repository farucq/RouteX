import React from 'react';
import './Banner2.css';
import posterImage from '../../assets/poster.png'

function Banner2() {
  return (
    <div id="about" className="about-us-section ">
      <div className="container mt-5 mb-5">
        <div className="row align-items-center">

          <div className="col-lg-6 position-relative d-flex ps-5 justify-content-start mb-4">
            <div className='imgBanner2'>
              <img src={posterImage} alt=''></img>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <p
              className="about text-uppercase small text-start text-success fw-semibold mb-2">
              About Us <i className="bi bi-cursor-fill ms-1"></i>
            </p>
            <h1 className="fw-bold mb-4 mt-2 text-start">
              Unknown Wanderlust<br />Your Journey into
            </h1>
            <p className="text-muted mb-4 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
            </p>
            <div className="row">
              <div className="col-md-6 mb-3 d-flex justify-content-center text-start">
                <i className="bi bi-check-square-fill green-icon me-2"></i>
                <div>
                  <strong>Safety Guides</strong><br />
                  <small className="text-muted">Consectetur adipiscing elit text-start text-start  adipiscing elit</small>
                </div>
              </div>
              <div className="col-md-6 mb-3 d-flex justify-content-center text-start">
                <i className="bi bi-check-square-fill green-icon me-2 "></i>
                <div>
                  <strong>Passport Assistance</strong><br />
                  <small className="text-muted">Consectetur adipiscing elit text-start text-start  adipiscing elit</small>
                </div>
              </div>
            </div>
            <a
              href=""
              className="aboutbtn btn float-start rounded-pill mt-4"
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
