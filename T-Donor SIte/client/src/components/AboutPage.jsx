import React from 'react'
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="page-heading text-center">
  <div className="container zoomIn animated">
    <h1 className="page-title">ABOUT US <span className="title-under"></span></h1>
    <p className="page-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
    </p>
  </div>
</div>

<div className="main-container">
  <div className="container">
    <div className="row  animated">
      <div className="col-md-6">
        <img src="assets/images/about-us.jpg" alt="" className="img-responsive" />
      </div>
      <div className="col-md-6">
        <h2 className="title-style-2">ABOUT WE DONATE <span className="title-under"></span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi pariatur...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatem...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi pariatur...</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptatem...</p>
      </div>
    </div>

    <div className="section-home about-us">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/our-mission-icon.png" alt="" />
            </div>
            <h3 className="col-title">Our Mission</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus...</p>
            </div>
            <button className="btn btn-primary">Read more</button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/make-donation-icon.png" alt="" />
            </div>
            <h3 className="col-title">Make Donations</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus...</p>
            </div>
            <button className="btn btn-primary">Read more</button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/help-icon.png" alt="" />
            </div>
            <h3 className="col-title">Help & Support</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus...</p>
            </div>
            <button className="btn btn-primary">Read more</button>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-us-col">
            <div className="col-icon-wrapper">
              <img src="assets/images/icons/programs-icon.png" alt="" />
            </div>
            <h3 className="col-title">Our Programs</h3>
            <div className="col-details">
              <p>Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus...</p>
            </div>
            <button className="btn btn-primary">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="our-team ">
    <div className="container">
      <h2 className="title-style-1">Our Team <span className="title-under"></span></h2>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="team-member">
            <div className="thumbnail">
              <img src="assets/images/team/member-1.jpg" alt="" className="cause-img" />
            </div>
            <h4 className="member-name">Robert C. Numbers</h4>
            <div className="member-position">CO-FOUNDER</div>
            {/* <div className="btn-holder">
              <button className="btn"><i className="fa fa-envelope"></i></button>
              <button className="btn"><i className="fa fa-facebook"></i></button>
              <button className="btn"><i className="fa fa-google"></i></button>
              <button className="btn"><i className="fa fa-twitter"></i></button>
              <button className="btn"><i className="fa fa-linkedin"></i></button>
            </div> */}
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="team-member">
            <div className="thumbnail">
              <img src="assets/images/team/member-3.jpg" alt="" className="cause-img" />
            </div>
            <h4 className="member-name">Marjorie R. Echevarria</h4>
            <div className="member-position">CO-FOUNDER</div>
            {/* <div className="btn-holder">
              <button className="btn"><i className="fa fa-envelope"></i></button>
              <button className="btn"><i className="fa fa-facebook"></i></button>
              <button className="btn"><i className="fa fa-google"></i></button>
              <button className="btn"><i className="fa fa-twitter"></i></button>
              <button className="btn"><i className="fa fa-linkedin"></i></button>
            </div> */}
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="team-member">
            <div className="thumbnail">
              <img src="assets/images/team/member-4.jpg" alt="" className="cause-img" />
            </div>
            <h4 className="member-name">Allison J. Falls</h4>
            <div className="member-position">CO-FOUNDER</div>
            {/* <div className="btn-holder">
              <button className="btn"><i className="fa fa-envelope"></i></button>
              <button className="btn"><i className="fa fa-facebook"></i></button>
              <button className="btn"><i className="fa fa-google"></i></button>
              <button className="btn"><i className="fa fa-twitter"></i></button>
              <button className="btn"><i className="fa fa-linkedin"></i></button>
            </div> */}
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="team-member">
            <div className="thumbnail">
              <img src="assets/images/team/member-2.jpg" alt="" className="cause-img" />
            </div>
            <h4 className="member-name">Bryan B. Stevens</h4>
            <div className="member-position">CO-FOUNDER</div>
            {/* <div className="btn-holder">
              <button className="btn"><i className="fa fa-envelope"></i></button>
              <button className="btn"><i className="fa fa-facebook"></i></button>
              <button className="btn"><i className="fa fa-google"></i></button>
              <button className="btn"><i className="fa fa-twitter"></i></button>
              <button className="btn"><i className="fa fa-linkedin"></i></button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




 
    <Footer/>
    </>
  )
}
