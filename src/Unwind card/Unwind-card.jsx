import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon_1 from './Images/1.png'
import Icon_2 from './Images/1 (2).png'
import Icon_3 from './Images/1 (3).png'
import Icon_4 from './Images/1 (4).png'
import './Unwind-card.css';
import j from './Images/j.png'
const Unwind_card = () => {
  return (
    <div className="service">
     <center className='mb-4'>
    <img src={j} alt="" width={70} />
    </center>
      <Container>
     
        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <h1 className='Unwind-recharge-h1' id='Unwind-recharge-h1'>Unwind & recharge</h1>
          <p className='Let-us-p'>Let us guide you on an incredible journey of rejuvenation.</p>
        </div>
        <Row>
          <Col lg={4} md={6} xl={3}  xxl={3}  className="wow fadeInUp" data-wow-delay="0.0s">
            <div className="service-item">
              <div className="service-icon">
               <img src={Icon_1} alt="" style={{zIndex:'999'}} />
              
              </div>
              <h3 id='Retreat-h1'>Yoga Detox Retreat</h3>
              <p className="Detox-Retreat-p"  id='Retreat-p' >
                Cleanse your body and rejuvenate your spirit with a focused program that combines yoga, healthy meals, and detoxifying practices. Let go of toxins and embrace a fresh start.
              </p>
              <div>
                <br />
                <br />
           
               
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p className="strong"> <strong>3D/3N | 6D/6N</strong> </p>
                <p><strong>Starts from $299</strong> </p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6}  xxl={3} xl={3}  className="wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-icon">
              <img src={Icon_2} alt="" style={{zIndex:'999'}} />
              </div>
              <h3 id='Retreat-h1'>Yoga Healing Retreat</h3>
              <p className="Yoga-Healing-Retreat-p" id='Retreat-p'>
                Heal from within and uncover your true potential with our healing retreat. Through a combination of yoga, meditation, and holistic therapies, you'll find balance and restore your inner harmony.
              </p>
              <div>
                <br />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p> <strong>3D/3N | 6D/6N</strong> </p>
                <p><strong>Starts from $299</strong> </p>
              </div>
            </div>
          </Col>

          <Col lg={4} md={6} xl={3}  xxl={3}  className="wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-icon">
              <img src={Icon_3} alt="" style={{zIndex:'999'}} />
              </div>
              <h3 id='Retreat-h1'>Yoga Silent Retreat</h3>
              <p className="Yoga-Healing-Retreat-p" id='Retreat-p'>
                Dive deep into the realm of inner stillness and tranquility. Disconnect from the noise of the world and reconnect with yourself through silent meditation, gentle yoga, and mindful practices.
              </p>
              <div>
                <br />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p> <strong>3D/3N | 6D/6N</strong> </p>
                <p><strong>Starts from $299</strong> </p>
              </div>
            </div>
          </Col>

          {/* Add more Col components for additional items */}
          
          <Col lg={4} md={6} xl={3} xxl={3} className="wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item">
              <div className="service-icon">
              <img src={Icon_4} alt="" style={{zIndex:'999'}} />
              </div>
              <h3 className='Yoga-Adventure-Retreat' id='Retreat-h1'>Yoga Adventure Retreat</h3>
              <p className="Adventure-Retreat-p" id='Retreat-p'>
              Experience the beauty of scenic landscapes, pristine beaches, engage in outdoor activities, 
              and challenge yourself physically and mentally while enhancing your yoga practice..
              </p>
              <div>
                <br />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p> <strong>3D/3N | 6D/6N</strong> </p>
                <p><strong>Starts from $399</strong> </p>
              </div>
            </div>
          </Col>

       

        </Row>
      </Container>
    </div>
  )
}

export default Unwind_card;
