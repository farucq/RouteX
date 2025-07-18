import React from 'react';
import './Banner2.css';

function Banner2() {
  return (
    <div id="about" className="about-us-section ">
      <div className="container mt-4 mb-5">
        <div className="row align-items-center">

          <div className="col-lg-6 position-relative ps-5 mb-4">
            <div className="about-image-grid">
              <div className="grid-top-left">
                <img
                  src="https://media.istockphoto.com/id/1134018566/photo/man-having-a-business-meeting-and-signing-a-contract-recruitment-or-agreement.jpg?s=612x612&w=0&k=20&c=qZGuRs2OZQ6ALC6eHNPmOEOZTV_TOXHLSmJhFJhAfug="
                  alt="Top Left"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="grid-top-right">
                <img
                  src="https://img.freepik.com/free-photo/business-man-owner-company-office_1303-16046.jpg?semt=ais_hybrid&w=740"
                  alt="Top Right"
                  className="img-fluid rounded shadow"
                />
              </div>
              <div className="grid-bottom-right">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682432982609-578969ff8b75?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwbWFufGVufDB8fDB8fHww"
                  alt="Bottom Right"
                  className="img-fluid rounded shadow"
                />
              </div>

              {/* Green Experience Box */}
              <div className="experience-box">
                <h3>10+</h3>
                <small>Years Of<br />Experience</small>
              </div>
            </div>
          </div>

          <div className="col-lg-6 ps-4">
            <br />
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
