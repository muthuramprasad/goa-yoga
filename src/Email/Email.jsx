import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import './Email.css'
const Email = () => {
  return (
    <div className='p-5'>
    <Container className='Email_full mt-5 mb-5 '>
      <Row >
<div className="all_content_container justify-content-center mt-4 p-4">
        <Col xs={12} md={6}  xl={5} className='mt-2 '>

        <h1 className='come_join'> Come join us at our Exquisite Yoga Healing in Goa! </h1>
        <p className='together'>Let's RETREAT together </p>
       
        </Col>
        <Col xs={12} md={6} xl={7} className='Email_cen gy-1'>
            <div className='Email_cen2'>
            <input type="text"  placeholder=' Enter your Email' className='input_for_email p-2 mb-2'/>
           
            <label className='Email_bt  m-2'> Subscribe</label>
            </div>
      
        </Col>
        </div>
      </Row>
    </Container>
    </div>
  )
}

export default Email
