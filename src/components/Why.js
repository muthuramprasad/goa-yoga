import React from 'react'
import './Why.css'

const Why = () => {
  return (
    <div className="container mb-5 px-4 px-lg-0">
      <div className="head-div">
        <div className="head-line"></div>
        <img
          src={require("../assets/fwr-head.png")}
          className="flower-head mx-1 rotate"
          alt=""
        />
        <div className="head-line"></div>
      </div>
      <div className="col-12 text-center d-flex justify-content-center">
        <h3 className="lg-heading c1 col-lg-7">
        Why a Yoga Retreat in Goa should be on your bucket list
        </h3>
      </div>
      <div className="row mt-4">

        <div className="col-lg-4 col-md-6 p-2">
          <div className="home-why p-3">
            <div className="hm-why-txt">
              <h5 className="fw-bold hm-w-head why-txt c2">Serene Beaches</h5>
              <p className="why-txt un-p c3">
                Famous for its picturesque coastline and pristine beaches.
              </p>
            </div>
            <div className="home-why-img p-2">
                <img src={require("../assets/beach.png")} className='hw-img' alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-2">
          <div className="home-why p-3">
            <div className="hm-why-txt">
              <h5 className="fw-bold hm-w-head why-txt c2">Nature's Playground</h5>
              <p className="why-txt un-p c3">
              Famous for its picturesque coastline and pristine beaches.
              </p>
            </div>
            <div className="home-why-img p-2">
                <img src={require("../assets/natuer-playground.png")} className='hw-img' alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-2">
          <div className="home-why p-3">
            <div className="hm-why-txt">
              <h5 className="fw-bold hm-w-head why-txt c2">Spiritual Haven</h5>
              <p className="why-txt un-p c3">
              Cultural heritage and is home to numerous temples, churches, and spiritual centers.
              </p>
            </div>
            <div className="home-why-img p-2">
                <img src={require("../assets/star.png")} className='hw-img' alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-2">
          <div className="home-why p-3">
            <div className="hm-why-txt">
              <h5 className="fw-bold hm-w-head why-txt c2">Vibrant Culture</h5>
              <p className="why-txt un-p c3">
              Goa is known for its vibrant festivals, delicious cuisine, and lively music scene.
              </p>
            </div>
            <div className="home-why-img p-2">
                <img src={require("../assets/hand.png")} className='hw-img' alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-2">
          <div className="home-why p-3">
            <div className="hm-why-txt">
              <h5 className="fw-bold hm-w-head why-txt c2">Adventure and Exploration</h5>
              <p className="why-txt un-p c3">
              Plethora of adventure activities, including water sports, trekking, and dolphin spotting.
              </p>
            </div>
            <div className="home-why-img p-2">
                <img src={require("../assets/adventure.png")} className='hw-img' alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-2">
          <div className="home-why p-3">
            <div className="hm-why-txt">
              <h5 className="fw-bold hm-w-head why-txt c2">Welcoming Community</h5>
              <p className="why-txt un-p c3">
              Warm and welcoming locals. Connect with like-minded individuals & make new friends
              </p>
            </div>
            <div className="home-why-img p-2">
                <img src={require("../assets/partners.png")} className='hw-img' alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Why