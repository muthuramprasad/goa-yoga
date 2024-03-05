import React from 'react';
import Bg from './Banner 2 Images/bg.jpg'
import man from './Banner 2 Images/man.png'
import clouds_1 from './Banner 2 Images/clouds_1.png'
import clouds_2 from './Banner 2 Images/clouds_2.png'
import mountain_left from './Banner 2 Images/mountain_left.png'
import mountain_right from './Banner 2 Images/mountain_right.png'
import './Banner2.css'

const Banner2 = () => {
  return (
    <section className='section'>
      <img src={Bg} alt="" id='bg' />
      <img src={man} alt="man"  />
      <img src={clouds_1} alt="cloud_2" />
      <img src={clouds_2} alt="cloud_2" />
      <img src={mountain_left} alt="mountain_left" />
      <img src={mountain_right} alt="mountain_right" />
    </section>
  )
}

export default Banner2
