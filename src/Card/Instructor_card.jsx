import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Img_1 from './Images/1.jpg';
import './Instructor_card.css';

const InstructorCard = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  useEffect(() => {
    adjustHeight(show1, contentRef1);
  }, [show1]);

  useEffect(() => {
    adjustHeight(show2, contentRef2);
  }, [show2]);

  useEffect(() => {
    adjustHeight(show3, contentRef3);
  }, [show3]);

  const adjustHeight = (show, ref) => {
    if (show) {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    } else {
      ref.current.style.height = '0px';
    }
  };

  const handleShow1 = () => {
    setShow1(!show1); // Toggles the show state for card 1
  };

  const handleShow2 = () => {
    setShow2(!show2); // Toggles the show state for card 2
  };

  const handleShow3 = () => {
    setShow3(!show3); // Toggles the show state for card 3
  };

  return (
    <div className='card-instructor-whole-container'>
      <Container>
        <Row>
          <center>
            <h1 className='our_instructors'>Our incredible instructors</h1>
          </center>
          <Col>
            <div className="card-container">
              <div className="card-container-two">
                <img src={Img_1} alt="" className='card-img' />
                <center>
                  <h3>Name</h3>
                  <h6>Instructor</h6>
                  <p className='card_para-tag'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                    voluptatem?{' '}
                  </p>
                  <div ref={contentRef1} className="content">
                    <p className='card_para-tag'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                      voluptatem?
                    </p>
                  </div>
                </center>
                <center>
                  <div onClick={handleShow1} style={{ cursor: 'pointer' }} className='btn-more'>
                    {show1 ? 'Show Less' : 'Read More'}
                  </div>
                </center>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card-container">
              <div className="card-container-two">
                <img src={Img_1} alt="" className='card-img' />
                <center>
                  <h3>Name</h3>
                  <h6>Instructor</h6>
                  <p className='card_para-tag'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                    voluptatem?{' '}
                  </p>
                  <div ref={contentRef2} className="content">
                    <p className='card_para-tag'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                      voluptatem?
                    </p>
                  </div>
                </center>
                <center>
                  <div onClick={handleShow2} style={{ cursor: 'pointer' }} className='btn-more'>
                    {show2 ? 'Show Less' : 'Read More'}
                  </div>
                </center>
              </div>
            </div>
          </Col>

          <Col>
            <div className="card-container">
              <div className="card-container-two">
                <img src={Img_1} alt="" className='card-img' />
                <center>
                  <h3>Name</h3>
                  <h6>Instructor</h6>
                  <p className='card_para-tag'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                    voluptatem?{' '}
                  </p>
                  <div ref={contentRef3} className="content">
                    <p className='card_para-tag'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                      voluptatem?
                    </p>
                  </div>
                </center>
                <center>
                  <div onClick={handleShow3} style={{ cursor: 'pointer' }} className='btn-more'>
                    {show3 ? 'Show Less' : 'Read More'}
                  </div>
                </center>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InstructorCard;
