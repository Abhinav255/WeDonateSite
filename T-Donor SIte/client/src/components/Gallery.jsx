import React from 'react'
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export default function Gallery() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="page-heading text-center">
  <div className="container zoomIn animated">
    <h1 className="page-title">
      GALLERY <span className="title-under"></span>
    </h1>
    <p className="page-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit Necessitatibus.
    </p>
  </div>
</div>

<div className="main-container">
  <div className="container gallery fadeIn animated">
    <div className="row">
      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/7610291856_931fb9f461_k.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/children-82272_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/human-rights.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/old-books-436498_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/hunger-682834_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/africa-education.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/afghani-60798_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/boy-60729_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/child-207573_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/children-60654_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/doll-87407_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>

      <div className="col-md-3 col-sm-4 gallery-item lightbox">
        <img src="assets/images/gallery/thumb/girl-62328_1280.jpg" alt="" />
        <span className="on-hover">
          <span className="hover-caption">Image Caption</span>
        </span>
      </div>
    </div>
  </div>
</div>
  



 
    <Footer/>
    </>
  )
}
