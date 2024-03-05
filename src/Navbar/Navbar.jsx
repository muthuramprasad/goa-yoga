import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from './LOGO Image/WhatsApp_Image_2024-02-14_at_12.49.40_7cc9ec97-removebg-preview.png';
import { FaDharmachakra } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import { CiMenuFries } from "react-icons/ci";
import './Navbar.css';

function BasicExample() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <Navbar expand="lg" className="nav_container">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          
         
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="ms-6 gap-3">
            <Nav.Link href="#Yoga-Detox-Retreat" className="details" >
                <FaDharmachakra className="dharma" />  
                Home
              </Nav.Link>
              <Nav.Link href="#Yoga-Detox-Retreat" className="details" >
                <FaDharmachakra className="dharma" />  
                About
              </Nav.Link>
              <Nav.Link href="#Yoga-Detox-Retreat" className="details" >
                <FaDharmachakra className="dharma" />  
                Yoga Detox Retreat
              </Nav.Link>
              <Nav.Link href="#Yoga-Healing-Retreat" className="details">
                <FaDharmachakra className="dharma" />  
                Yoga Healing Retreat
              </Nav.Link>
              <Nav.Link href="#Yoga-Silent-Retreat" className="details">
                <FaDharmachakra className="dharma" />  
                Yoga Silent Retreat
              </Nav.Link>
              <Nav.Link href="#Yoga-Adventure-Retreat" className="details">
                <FaDharmachakra className="dharma" />  
                Yoga Adventure Retreat
              </Nav.Link>

    <button className='phone_btn'>Book Now</button>
    <Nav.Link href="#Yoga-Adventure-Retreat" className="details">
    <FaInstagram className='icons_socail_media instagram'/>
              </Nav.Link>

              <Nav.Link href="#Yoga-Adventure-Retreat" className="details">
    <FaFacebook className='icons_socail_media facebook'/>
              </Nav.Link>

              <Nav.Link href="#Yoga-Adventure-Retreat" className="details">
    <RiTwitterXLine className='icons_socail_media x'/>
              </Nav.Link>
    
         
           
             
           
            </Nav>
          </Navbar.Collapse>

          <button className='toggle-side_navbar' onClick={handleMenuToggle}>
            <span className='menu_icon'><CiMenuFries />  </span>
          </button>
        </Container>
      </Navbar>

      <Offcanvas className="canva_container" show={showMenu} onHide={() => setShowMenu(false)} style={{width:'80%'}} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={Logo}
                width="120"
                height="120"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="canva_container">
          <Nav className="flex-column">
            <Nav.Link href="#home" className="canva_details">
              <FaDharmachakra className="dharma" />
              Yoga Detox Retreat
            </Nav.Link>
            <Nav.Link href="#home" className="canva_details">
              <FaDharmachakra className="dharma" />
              Yoga Healing Retreat
            </Nav.Link>
            <Nav.Link href="#home" className="canva_details">
              <FaDharmachakra className="dharma" />
              Yoga Silent Retreat
            </Nav.Link>
            <Nav.Link href="#home" className="canva_details">
              <FaDharmachakra className="dharma" />
              Yoga Adventure Retreat
            </Nav.Link>
       
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BasicExample;
