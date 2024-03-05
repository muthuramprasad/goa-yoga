import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import Yoga_img from './Images/1 (3).png'
import './YogaRetreat.css'
import icon from './Images/1 (2).jpg'
import {motion, spring} from 'framer-motion'
import fl from './Images/j.png'
// import Yoga_bg from './Images/1 (3).jpg'


const Yoga = () => {
  return (
    <Container fluid className='Yoga_bg'>
        <Container className='yoga-inside-container '>

        
     <Row>
        <Col sx={12}  sm={12} md={7} lg={7} xxl={7}  className='Yoga_Con1'>
        <motion.h4 className='Yoga_heading'
        whileInView={{scale:[0.8,1]}}
        transition={{duration:1,type:"spring"}}
        >Our Yoga Retreat in Goa is the perfect destination for finding your inner peace and connecting with your mind, body, and soul. </motion.h4>
        <p className='Yoga_p'>
        Discover an oasis of serenity and transformation at The Goa Retreat. We offer a range of immersive experiences, including our 3-day/3-night and 6-day/6-night retreats. 
        </p>
       
        <h4 className='Yoga_heading2'>
        Explore our four unique retreat options
        </h4>
        <ul type="none"  className='Yoga_p' >
            <motion.li
            
            whileHover={{color:"rgb(5,150,214)",scale:[1,1.1], fontSize:"15"}} > 
            
            
            <motion.img src={icon} alt="" width={50} 
            whileInView={{scale:[0.9,1]}}
                transition={{duration:2}}  
                className='margin' /> Yoga Detox Retreat </motion.li>
            <motion.li
             whileHover={{color:"rgb(5,150,214)",scale:[1,1.1], fontSize:"15"}}
            >  <motion.img src={icon} alt="" width={50} 
            whileInView={{scale:[0.7,1]}}
                transition={{duration:2}}  
                className='margin' /> Yoga Healing Retreat</motion.li>
            <motion.li
             whileHover={{color:"rgb(5,150,214)",scale:[1,1.1], fontSize:"15"}}
            > <motion.img src={icon} alt="" width={50} 
            whileInView={{scale:[0.6,1]}}
                transition={{duration:2}}  
                className='margin' />  Yoga Silent Retreat </motion.li>
            <motion.li
             whileHover={{color:"rgb(5,150,214)",scale:[1,1.1],fontSize:"15" }}
            >  <motion.img src={icon} alt="" width={50} 
            whileInView={{scale:[0.8,1]}}
                transition={{duration:2}}  
                className='margin' />  Yoga Adventure Retreat </motion.li>
        </ul>
        <p className='Yoga_p '>
Whichever journey you choose, you will be guided by experienced yoga practitioners, indulging in rejuvenating practices and immersing yourself in the beauty of Goa.
</p>
        </Col>
        <Col sx={12}  sm={12} md={5} lg={5} xxl={5} className='Yoga_backimage' >
        <motion.img src={Yoga_img} alt=""  className='Yoga_img'
        animate={{y:[0,30,0]}}
        transition={{duration:8,type:spring ,repeat:Infinity}}
        />
  
        </Col>
     </Row>
    </Container>
    </Container>
  )
}

export default Yoga