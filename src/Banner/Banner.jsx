import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center mb-5 p-3 ">
    <Container fluid >
      <Row className="justify-content-center py-5 mt-5 "> 
<div>
    <br />
</div>
        <Col xs={12} md={8} className="text-center ">
        <div>
    <br />
</div>
          <h5 className='welcome '>Welcome To Yoga Retreat</h5>
          <div>
    <br />
</div>
          <h1 className='four-content'>Escape, Rejuvenate, Transform. Experience The Goa Retreat</h1>
          <div>
    <br />
</div>
<div>
<button className='banner-btn-1' style={{ marginRight: '20px' }}>Learn More</button>
            <button className='banner-btn-2'>Contact Us</button>
</div>
           
        
        </Col>
      </Row>
    </Container>
    <div>
    <br />
    <br />
</div>
  </div>
  );
}

export default Banner;
