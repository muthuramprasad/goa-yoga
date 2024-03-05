import React from 'react'
import './Footer.css'
import { Container ,Col, Row} from 'react-bootstrap'
// import Footer_img1 from './Images/footer-logo-1.png'
import { FaDharmachakra } from "react-icons/fa";
import {motion} from 'framer-motion'
import  l from './image/ll.png' 
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <Container fluid className='Footer_container'>
      <hr />
       <div>
        <br />
        <br />
      </div>
    <Container  className='footer_container_2' >
        <Row className='Footer_flex' >
                
        <Col  xs={12} sm={6} md={3} xl={3} xxl={2} >
        <br></br>
        
        <h3 style={{color:'white',listStyle:'none'}}>Follow Us</h3>
            <div className="icon_list" style={{color:'white',listStyle:'none'}}>
              <li><BsTwitterX /> Twitter</li>
              <li><FaFacebookSquare /> Facebook</li>
              <li></li>
              <li></li>
            </div>
            <div> <br /></div>
            </Col>
    
            <Col  xs={12} sm={6}  md={3}  xl={3} xx={2} xxl={4}>
            <br></br>
           <h4 className='Footer_About' > About Us</h4>
           <p className='Footer_About_p'>
            
Our Yoga Retreat in Goa is the perfect destination for finding your inner peace and connecting with your mind, body, and soul.

           </p>
           <div className="input_field">
            <input className="footer_input_field"  type="text" placeholder='Search hear' />
            <button className='footer_search_btn'>search</button>
           </div>
            <div > <br></br></div>
            </Col>
            <Col  xs={12} sm={6}  md={3} xl={3} xxl={3} className='Footer_Con' id="cons">
            <br></br>
            <table>
                <tr>
                    <th> <h3 className='Quick_h3'>  Quick Links </h3> </th>
                </tr>
                <td>
                    <tr >
              <p  className='Quick_p'> <FaDharmachakra className='dharma' />   Yoga Detox Retreat</p>
                    </tr>
                    <tr>
                  <p className='Quick_p'> <FaDharmachakra className='dharma' />   Yoga Healing Retreat </p>
                    </tr>
                    <tr>
                   <p className='Quick_p'> <FaDharmachakra className='dharma' /> Yoga Silent Retreat </p>
                    </tr>
                    <tr>
                   <p className='Quick_p'>  <FaDharmachakra className='dharma' /> Yoga Adventure Retreat</p>

                    </tr>
                    
                </td>
            </table>
            <div > <br></br></div>
            </Col>
            <Col  xs={12} sm={6}  md={3} xl={3} xxl={3} className='Footer_Con' id="cons" > 
            <br></br>
            <table>
                <tr>
                    <th><h3 className='contact_info'> Contact Info </h3> </th>
                </tr>
                <td>
                    <tr>
                  <p className='contact'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
</svg> +91 123456789  </p>
                    </tr>
                    <tr>
                   <p className='contact'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg> as@gmail.com</p>
                    </tr>
                    <tr>
                    <p className='contact'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> 21 King Street Melbourne, <br></br>3000, Australia </p>
                    </tr>
                </td>
            </table>
            <p>  </p>
            <div > <br></br></div>
            </Col>
           
        </Row>
    </Container>

<div className="copyright">
<hr />
<center>
    <p className='copyright_p'>copyright 2024 &copy; IqTechWay</p>
</center>
</div>
    </Container>
  )
}

export default Footer