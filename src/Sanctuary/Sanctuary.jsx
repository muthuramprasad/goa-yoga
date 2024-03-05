import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img_1 from "./Images/like-minded-community-vinyasa-yoga-ttc.jpg";
import Img_2 from "./Images/40419112544_f97ced03cb_b (1).jpg";
import "./Sanctuary.css";
import {motion} from 'framer-motion'
const Sanctuary = () => {
  return (
    <div className="sanctuary-total-div-container ">
        
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
      <div  className="sanctuary-total-div-container-2">

    
      <Container>
        <div className="content_div">
        <motion.h1 
        initial={{ x: -300 }} 
          whileInView={{ x: 0 }} 
          
        transition={{ duration: 1 }}
        
        className="sanctuary_awaits text-center">
          Our sanctuary awaits for you</motion.h1>


        <p className="sanctuary_awaits-p text-center">
          Surround yourself with a supportive community of individuals who
          share your passion for yoga and wellness during your Yoga Retreat in
          Goa!{" "}
        </p>
        </div>

        <Row className="justify-content-center">
          <Col xs={12} sm={6} md={4} lg={5} xl={5} >
            <div className="image_container_1">
              <img src={Img_1} alt="" className="image_container_1_img_1" />
              <br />
              <p className="sanctuary-col-p-1">
                {" "}
                Let go of all your worries, and allow yourself to be captivated
                by the magic that unfolds. Open the fortunes that look for you.
                Your journey begins now.
              </p>
            </div>
          </Col>

          <Col xs={12} sm={6} md={4} lg={5} xl={5} className="mb-4">
            <div className="image_container_1">
              <img src={Img_2} alt="" className="image_container_1_img_1" />
              <br />
              <p className="sanctuary-col-p-1">
                {" "}
                A blissful journey that will awaken your senses and leave a
                lasting imprint on your soul. Come home to a place where you can
                create memories that will stay with you forever.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
};

export default Sanctuary;
