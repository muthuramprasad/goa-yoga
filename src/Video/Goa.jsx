import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Video from './Video/1.mp4';
import {motion} from 'framer-motion'
import './Goa.css';

const Goa = () => {
  const [showText, setShowText] = useState(true);

  const handleVideoPlay = () => {
    setShowText(true); // Set showText to true each time the video starts playing
    setTimeout(() => {
      setShowText(true);
    },[]); // Adjust this value to change the duration of text display (in milliseconds)
  };

  return (
    <div className='goa_container mb-5  ' >
<center >
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

      <center>
        <motion.h1 
         initial={{ x: -300 }} 
         whileInView={{ x: 0 }} 
         
       transition={{ duration: 1 }}
        className='Goa_a_reality'>Make your Retreat in Goa a reality</motion.h1>
      </center>
      <Container fluid>
        <Row>
          <Col className='d-flex justify-content-center order-md-1'>
            <div className="video-container">
              <video 
                src={Video} 
                autoPlay 
                muted
                loop
                className='video'
                onPlay={handleVideoPlay} 
              ></video>
              {showText && (
                <div className="overlay-text">
                  Beautiful beaches and the vibrant culture of Goa
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Goa;
