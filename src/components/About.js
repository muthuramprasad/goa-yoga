import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from 'framer-motion'
import './About.css'
const About = () => {
  return (
    <div className='container mb-5  px-lg-0 px-4'>
    <div className="row">
        <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
            <h3 className='ls lh-base lg-heading c1'>
            Our Yoga Retreat in Goa is the perfect destination for finding your inner peace and connecting with your mind, body, and soul.
            </h3>
            <p className='c3'>
            Discover an oasis of serenity and transformation at The Goa Retreat. We offer a range of immersive experiences, including our 3-day/3-night and 6-day/6-night retreats.
            </p>
            <div className="row mb-3">

               <div className="col-md-5 ab-bx p-2">
                <img src={require("../assets/flw-new.png")} className='ab-flower me-2 rotate' alt="" />
                <p className='mb-0 '>Yoga Detox Retreat</p>
               </div>

               <div className="col-md-5 ab-bx p-2">
                <img src={require("../assets/flw-new.png")} className='ab-flower me-2 rotate' alt="" />
                <p className='mb-0 '>Yoga Healing Retreat</p>
               </div>

               <div className="col-md-5 ab-bx p-2">
                <img src={require("../assets/flw-new.png")} className='ab-flower me-2 rotate' alt="" />
                <p className='mb-0 '> Yoga Silent Retreat</p>
               </div>

               <div className="col-md-5 ab-bx p-2">
                <img src={require("../assets/flw-new.png")} className='ab-flower me-2 rotate' alt="" />
                <p className='mb-0 '>Yoga Adventure Retreat</p>
               </div>

            </div>
            <p className='c3'>
            Whichever journey you choose, you will be guided by experienced yoga practitioners, 
            indulging in rejuvenating practices and immersing yourself in the beauty of Goa.
            </p>
        </div>
        <div 
   
        
        className="col-lg-6 order-1 order-lg-2">
            <img src={require("../assets/about-new.png")} className='ab-img-new' alt="" />
        </div>
    </div>
    </div>
  )
}

export default About