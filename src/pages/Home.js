import React from 'react'
import { Link } from 'react-router-dom'
import HomeLogo from '../images/home/logo.png'
import Vector0 from '../images/home/Vector Smart Object.png'
import Vector1 from '../images/home/Vector Smart Object copy.png'
import Vector2 from '../images/home/Vector Smart Object-3.png'
import Vector3 from '../images/home/Vector Smart Object-4.png'
import Vector4 from '../images/home/Vector Smart Object-2.png'
import Vector5 from '../images/home/Vector Smart Object-5.png'
import Vector6  from '../images/home/Vector Smart Object.png'
import Contact from '../images/home/contact.png'
import Mocha from '../images/home/Mocha.png'
const Home = () => {
    return (
<div>
      <section className="introduction">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="par1">
                <span>cfin</span> will unleash your business's potential
                and drive everlasting impact by providing insights about all
                your business financials in a simple dashboard.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="3s" data-wow-offset="300">
              <img className="img1" src={Vector1} alt="Vector Smart"/>
            </div>
          </div>
          <div className="text-center mt-3 mb-5">
            <h6>A Simplistic, Informative, and Leading Tool</h6>
            <Link to="/signup">
            <button className="btn1">
             Start your free trial now
            </button>
            </Link>
          </div>
          <div className="row before">
            <div className="col-md-6 col-sm-12 wow bounceInLeft" data-wow-duration="2s" data-wow-offset="200">
              <img className="img2" src={Vector2} alt="Vector Smart"/>
            </div>
            <div className="col-md-6 col-sm-12 before-info wow bounceInRight" data-wow-duration="2s" data-wow-offset="200">
              <h4>Before</h4>
              <p>
                Multiple files with multiple versions related to different financial subjects
              </p>
            </div>
          </div>
          <hr/>
          <div className="row after">
            <div className="col-md-6 col-sm-12 after-info wow bounceInLeft" data-wow-duration="2s" data-wow-offset="200">
              <h4>After</h4>
              <p>
                All in one live and unified dashboard that presents the most critical insights of your firm
              </p>
            </div>
            <div className="col-md-6 col-sm-12 wow bounceInRight" data-wow-duration="2s" data-wow-offset="200">
              <img className="img3" src={Vector3} alt="Vector Smart"/>
            </div>
          </div>
          <div className="text-center">
            <Link to="/about">
            <button className="btn2">
              Know More About Us
            </button>
            </Link>
          </div>
          <div className="card-deck wow fadeIn" data-wow-duration="2s" data-wow-offset="200">
            <div className="card text-center">
              <div className="text-center">
                <img className="card-img1" src={Vector4} alt="Card image cap"/>
              </div>
              <div className="card-body">
                <h2 className="card-title">Simplistic</h2>
                <p className="card-text">Intuitive user interface that is customized to present the most important
                  insights.</p>
              </div>
            </div>
            <div className="card">
              <div className="text-center">
                <img className="card-img2" src={Vector0} alt="Card image cap"/>
              </div>
              <div className="card-body text-center">
                <h2 className="card-title">Informative</h2>
                <p className="card-text">Interactive dashboard with ability to drill down. It can be customized by
                  the owner to fulfil his
                  needs.</p>
              </div>
            </div>
            <div className="card">
              <div className="text-center">
                <img className="card-img3 ml-2" src={Vector6} alt="Card image cap"/>
              </div>
              <div className="card-body text-center">
                <h2 className="card-title">Leading</h2>
                <p className="card-text">Provide recommendations to direct the business based on multiple factors
                  and holistic approach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <section className="business">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 concepts">
          <h4>Business Concepts That Feed CFIN's Brain</h4>
          <ul>
            <li>
              <p className="feat">Holistic business View</p>
            </li>
            <li>
              <p className="feat">Blue Ocean Strategy</p>
            </li>
            <li>
              <p className="feat">Financial Management Principals<br/>
                <span>"Cashflow, Cost optimization"</span></p>
            </li>
            <li>
              <p className="feat">Engineering Solution<br/>
                <span>"Pareto, Root Cause Analysis, Demand planning"</span></p>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 wow fadeIn" data-wow-duration="2s" data-wow-offset="200">
          <img src={Vector5} alt="Vector Smart Object"/>
        </div>
      </div>
    </div>
  </section>
  </div>

    )        

}

export default Home;
