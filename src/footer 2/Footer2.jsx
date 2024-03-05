import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaDharmachakra } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './Footer2.css';

const Footer2 = () => {
  return (
    <div className='footer_2_container '>
      <Container  className='p-5'>
        <Row>
          <Col >
            {/* <div className="sponcer_container">
              <li> <img src={Img_1} alt="" /> </li>
              <li> <img src={Img_2} alt="" /> </li>
              <li> <img src={Img_3} alt="" /> </li>
              <li> <img src={Img_4} alt="" /> </li>
              <li> <img src={Img_5} alt="" /> </li>
              <li> <img src={Img_6} alt="" /> </li>
              <li> <img src={Img_7} alt="" /> </li>
            </div> */}
          </Col>
        </Row>
        <Row >
          <Col xs={12} md={12} lg={2}  xxl={3} sm={12}  xl={2} className='sub_content_col p-2'   >
            <h5>Who We are ?</h5>
            <p className='sub_content'>
              Escape to The Goa Retreat for a transformative journey of rejuvenation.
              Experience serenity through our immersive yoga retreats amidst the picturesque
              landscapes of Goa. Choose from a variety of options tailored to your needs,
              from detox to adventure. Indulge in opulent accommodations and mouthwatering
              cuisine, enhancing your stay. Join us in Goa for an unforgettable experience of inner peace and holistic wellness.
            </p>

            <h5>Connect with us</h5>
            <div className="icon_for_footer">
              <li className='icon_for_footer_icons'><FaInstagram /> </li>
              <li className='icon_for_footer_icons'><FaFacebookSquare /></li>
              <li className='icon_for_footer_icons'><FaSquareXTwitter /></li>
            </div>
          </Col>
     

          <Col xs={12} md={12} lg={2}  xxl={3} sm={12}  xl={2} className='Tripaneer p-2'  >
            <h5>Tripaneer</h5>
            <ul className="sub_content-list">
              <li><IoHomeOutline /> Home</li>
              <div>
                <br />
              </div>
              <li><MdOutlineRoundaboutRight /> About</li><div>
                <br />
              </div>
              <li><FaDharmachakra /> Yoga Detox Retreat</li><div>
                <br />
              </div>
              <li><FaDharmachakra /> Yoga Healing Retreat</li><div>
                <br />
              </div>
              <li><FaDharmachakra /> Yoga Silent Retreat</li><div>
                <br />
              </div>
              <li><FaDharmachakra /> Yoga Adventure Retreat</li><div>
                <br />
              </div>
            </ul>
          </Col>

          <Col xs={12} md={12} lg={2} xxl={3} sm={12}  xl={2} className='Contact_Us p-2' >
            <h5>Contact Us</h5>
            <ul className="sub_content-list">
              <li><FaPhoneAlt /> Phone: +91 880008800 </li><div>
                <br />
              </div>
              <li><HiOutlineMailOpen /> Email: admin@mail.com</li><div>
                <br />
              </div>
              <li><FaRegAddressBook /> Address: Goa</li>
            </ul>
          </Col>

          <Col xs={12} md={12} lg={2} xxl={3} sm={12} xl={2} className='Recent_Blog_Articles p-2'>
            <h5>Recent Blog Articles</h5>
            <ul className="sub_content-list">
              <li>Yoga Retreats & Yoga Holidays: What’s the Difference?</li>
              <li>Guide to Greece’s Best Yoga Destinations</li>
              <li>The Ultimate Guide to Costa Rica’s Best Yoga Destinations</li>
              <li>10 Adventure Yoga Retreats</li>
              <li>Yoga Teacher Training Courses in India</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <center>
              <p>The copyright &copy;IqTechWay 2024</p>
            </center>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer2;
