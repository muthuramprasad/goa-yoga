import React from "react";
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Img_1 from "./Images/The best hotels in Goa, from the finest in luxury to old world charm.jpg";
import Img_2 from "./Images/3 (2).jpg";
import Img_3 from "./Images/3 Best Day Trips From Bangkok.jpg";
import Img_4 from "./Images/3 (1).jpg";
import { FaArrowRight } from "react-icons/fa";

import './Food.css'

const Food = () => {
  return (
    <div className=" food-container  p-3">
 
      <Container  className="food-accum-container">
        <div>
          <br />
        </div>
        <Row className="align-items-center">
          <Col xs={12} md={6} xxl={7} className="all_text_left_side_container">
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1 
              initial={{ x: -300 }} 
              whileInView={{ x: 0 }} 
              
            transition={{ duration: 1 }}
              
              className="book_yout_spot_h1">Book your spot today and let the magic unfold</motion.h1>
            </motion.div>
            
            <p className="finest_p">Finest accommodation and Mouthwatering food</p>
            <p className="at_our_yoga_p">
              At our Yoga Retreat in Goa, we hold the conviction that lodging
              and nourishment encompass more than mere essentials; they form an
              inherent aspect of forging an indelible encounter. Entrust us with
              the privilege of lavishing you with unmatched opulence and
              epicurean delights, guaranteeing that your sojourn in our midst is
              nothing less than extraordinary.
            </p>
            <p className="prepare_to_be_p">
              “Prepare to be enchanted by a harmonious fusion of tranquility and
              self-discovery. Our esteemed instructors will lead you through
              revitalizing yoga sessions, allowing you to cultivate inner peace
              and balance.”
            </p>

            <button className="food_btn">Learn More  <FaArrowRight/></button>
          </Col>
          <Col xs={12} md={6} xxl={5}>
            <div className="row  p-2">
              <div  className="col-6 p-2">
              <motion.img src={Img_1} alt="" className="image_  w-100  rounded-3" 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5,delay:.1 }}
              />
              
              </div>

              <div  className="col-6 p-2">
              <motion.img src={Img_2} alt="" className="image_  w-100  rounded-3 "  
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5,delay:.1 }}
             
              />
              
              </div>
              <div  className="col-6 p-2">
              <motion.img src={Img_3} alt="" className="image_ w-100 rounded-3 " 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5,delay:.1 }}
              />
              
              </div>
              <div  className="col-6 p-2">
              <motion.img src={Img_4} alt="" className="image_  w-100 rounded-3" 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .5,delay:.1 }}
              />
              
              </div>
            </div>
            {/* <motion.div className="four p-2" >
             
              <motion.img src={Img_2} alt="" className="image_ p-2"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .3,delay:.3 }}
              />
              <motion.img src={Img_3} alt="" className="image_ p-2" id='image_3' 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .3,delay:.5 }}
              />
              <motion.img src={Img_4} alt="" className="image_ p-2" id='image_4' 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: .6 }}
              />
            </motion.div> */}
          </Col>
        </Row>
      </Container>
    
    </div>
  );
};

export default Food;
