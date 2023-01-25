import React from 'react'
import newspaper from './Newspaper.png'
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#FF7000' }}>
        <div className="container-fluid ">
          <div className="logo-image" style={{ marginRight: '1.2rem' }}>
            <img src={newspaper} style={{ width: '5rem', height: '5rem' }} className="img-fluid" />
          </div>

          <Link className="navbar-brand" style={{ fontSize: '50px', fontWeight: '1000', fontFamily: 'Permanent Marker', color: '#FFF' }} to="#" >News Feeds</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >


              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item" >
                <Link className="nav-link" to="/business">Business</Link>
              </li>

              <li className="nav-item" >
                <Link className="nav-link" to="/health">Health</Link>
              </li>


              <li className="nav-item" >
                <Link className="nav-link" to="/science">Science</Link>
              </li>

              <li className="nav-item" >
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

              <li className="nav-item" >
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>

              <li className="nav-item"  >
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}



// business entertainment general health science sports technology