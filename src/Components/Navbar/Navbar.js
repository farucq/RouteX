import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid my-2">

        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="fa fa-plane me-2 text-success fs-4 ms-2"></i>
          <span className="fs-4 fw-bold text-success">RouteX</span>
        </a>

        {/* Toggle button */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle= 'collapse'
          data-bs-target= '#navbarNav'
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          
          {/* Menu items */}
          <ul className="navbar-nav mx-auto text-center ">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">HOME▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">STORY▾</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link mx-2" href="#">VISA▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">BLOG▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">PAGE▾</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#">CONTACT</a>
            </li>
          </ul>

          {/* Help section */}
          <div className="helpSection d-flex me-2">
            <i className="fas fa-comments text-success mt-2 fs-3 me-2"></i>
            <div className="text-start text-success">
              <div className="small">Need help?</div>
              <div className='phn'>(907)202-649</div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
