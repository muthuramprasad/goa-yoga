import React from 'react';
import Img_1 from './Images/nature.jpg';
import Img_2 from './Images/1d6f0b5096674911b0cf145f41d8ff8d.jpeg';
import Img_3 from './Images/spirutual.jpg';
import Img_4 from './Images/adventure.jpg';
import Img_5 from './Images/Yoga-option-2-scaled-e1639044449909-min.jpg';
import Img_6 from './Images/welcome.jpeg';
import './AniRetreat.css'; // Import CSS file for styling
import { Col, Container, Row } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const AniRetreat = () => {
  return (
    <div className='mb-5 p-2'>
        <center className="mb-2">
        <div className="head-div">
        <div className="head-line"></div>
        <img
          src={require("../assets/fwr-head.png")}
          className="flower-head mx-1 rotate "
          id="flower_in_santuary"
          alt=""
        />
        <div className="head-line"></div>
      </div>
    
    </center>

    <center className="mb-5">
    <h1 className='mb-2 anime_Yoga_Retreat'>Why a Yoga Retreat in Goa should be on your bucket list</h1>
    </center>
     
    <Container  className="px-md-5 anime_container_reel justify-content-center" >
      <Row className="justify-content-center anime_row">
        <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={4} className='p-2  ' >
          <div className="anime_container justify-content-center">
            <img src={Img_1} alt="" className='anime_image' />
            <div className="anime_overlay">
              <FaArrowRight className='arrow_function' />
              <h6 className='anime_h1'>Serene Beaches</h6>
              <p className='anime_description'>
                Famous for its picturesque coastline and pristine beaches
              </p>
            </div>
          </div>
        </Col>

        <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={4} className='p-2'>
          <div className="anime_container">
            <img src={Img_2} alt="" className='anime_image' />
            <div className="anime_overlay">
              <FaArrowRight className='arrow_function' />
              <h6 className='anime_h1'>Nature's Playground</h6>
              <p className='anime_description'>
                From lush forests to stunning waterfalls, Goa is a nature lover's paradise.
              </p>
            </div>
          </div>
        </Col>

        <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={4} className='p-2'>
          <div className="anime_container">
            <img src={Img_3} alt="" className='anime_image' />
            <div className="anime_overlay">
              <FaArrowRight className='arrow_function' />
              <h6 className='anime_h1'>Spiritual Haven</h6>
              <p className='anime_description'>
                Cultural heritage and is home to numerous temples, churches, and spiritual centers.
              </p>
            </div>
          </div>
        </Col>

        <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={4} className='p-2'>
          <div className="anime_container">
            <img src={Img_5} alt="" className='anime_image' />
            <div className="anime_overlay">
              <FaArrowRight className='arrow_function' />
              <h6 className='anime_h1'>Vibrant Culture</h6>
              <p className='anime_description'>
              Goa is known for its vibrant festivals, delicious cuisine, and lively music scene.
              </p>
            </div>
          </div>
        </Col>

        <Col sm={12} xs={12} md={12} lg={6} xl={6} xxl={4} className='p-2'>
          <div className="anime_container">
            <img src={Img_4} alt="" className='anime_image' />
            <div className="anime_overlay">
              <FaArrowRight className='arrow_function' />
              <h6 className='anime_h1'>Adventure and Exploration</h6>
              <p className='anime_description'>
              Plethora of adventure activities, including water sports, trekking, and dolphin spotting. 
              </p>
            </div>
          </div>
        </Col>

        <Col sm={12} xs={12} md={12} lg={6}  xl={6} xxl={4} className='p-2'>
          <div className="anime_container">
            <img src={Img_6} alt="" className='anime_image' />
            <div className="anime_overlay">
              <FaArrowRight className='arrow_function' />
              <h6 className='anime_h1'>Welcoming Community</h6>
              <p className='anime_description'>
              Warm and welcoming locals. Connect with like-minded individuals & make new friends.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    


   
    </div>
  );
}

export default AniRetreat;
