import React, { useState } from 'react';
import Img_1 from './Images/1.png';
import Img_2 from './Images/2.png';
import Img_3 from './Images/3.png';
import Png from './Images/footer--mmc.png'
import './Trainer.css';
import j from './Images/j.png';

const Trainer = () => {
  const [vis1, setVis1] = useState();
  const [vis2, setVis2] = useState();
  const [vis3, setVis3] = useState();

  const toggleVisibility = (index) => {
    if (index === 1) setVis1(!vis1);
    else if (index === 2) setVis2(!vis2);
    else if (index === 3) setVis3(!vis3);
  };

  return (
    <div className='mb-5 trainer_whole_container  p-3'>
      <center className='mb-4'>
      <div className="head-div mt-5">
        <div className="head-line"></div>
        <img
          src={require("../assets/fwr-head.png")}
          className="flower-head mx-1 rotate"
          alt=""
        />
        <div className="head-line"></div>
      </div>
      </center>
      <div className="page-header ">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      <div className="blog ">
        <div className="container">
          <div className="section-header text-center">
            <h1 className="Testimonial_h1_trainer ">
            Our incredible instructors 
              <br />
            </h1>
          </div>

          <div className="row blog-page">
            {/** Card 1 */}
            <div className="col-lg-4 col-xxl-4  col-xl-4   blog-item_outside ">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={Img_1} alt="Blog" />
                
                </div>
                <div className="blog-text">
                  <h2 className='instructor_1_h2'>Yoga Instructor 1</h2>
              
                  
                  <div className="blog-meta">
                   
                  </div>
                  <p></p>
                  <p>
                    {/* Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                    facili ornare velit non vulpte liqum metus tortor. */}
                    {vis1 && (
                      <span>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                        facili ornare velit non vulpte liqum metus tortor
                      </span>
                    )}
                  </p>
                  <b>
                    <p onClick={() => toggleVisibility(1)} className='cursor'>
                      {vis1 ? 'SHOW LESS' : 'SHOW MORE'}
                    </p>
                  </b>
                </div>
              </div>
            </div>

            {/** Card 2 */}
            <div className="col-lg-4 col-xxl-4  col-xl-4  blog-item_outside ">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={ Img_2 } alt="Blog" />
                </div>
                <div className="blog-text">
                <h2 className='instructor_1_h2'>Yoga Instructor 2</h2>
                  <div className="blog-meta">
                    {/* <p style={{ display: 'flex' }}>Body Fitness</p>
                    <p>
                      <i className="far fa-calendar-alt"></i>01-Jan-2045
                    </p>
                    <p>
                      <i className="far fa-comments"></i>5
                    </p> */}
                  </div>
                  <p>
                    {/* Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                    facili ornare velit non vulpte liqum metus tortor. */}
                    {vis2 && (
                      <span>
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                        facili ornare velit non vulpte liqum metus tortor
                      </span>
                    )}
                  </p>
                  <b>
                    <p onClick={() => toggleVisibility(2)} className='cursor'>
                      {vis2 ? 'SHOW LESS' : 'SHOW MORE'}
                    </p>
                  </b>
                </div>
              </div>
            </div>

            {/** Card 3 */}
            <div className="col-lg-4 col-xxl-4  col-xl-4 blog-item_outside ">
              <div className="blog-item">
                <div className="blog-img">
                  <img src={Img_3} alt="Blog"  className='trainer_image_1'/>
                </div>
                <div className="blog-text">
                <h2 className='instructor_1_h2'>Yoga Instructor 3</h2>
                  <div className="blog-meta">
                    {/* <p style={{ display: 'flex' }}>Body Fitness</p>
                    <p>
                      <i className="far fa-calendar-alt"></i>01-Jan-2045
                    </p>
                    <p>
                      <i className="far fa-comments"></i>5
                    </p> */}
                  </div>
                  <p >
                    {/* Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                    facili ornare velit non vulpte liqum metus tortor. */}
                    {vis3 && (
                      <span >
                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                        facili ornare velit non vulpte liqum metus tortor
                      </span>
                    )}
                  </p>
                  <b>
                    <p onClick={() => toggleVisibility(3)} className='cursor'>
                      {vis3 ? 'SHOW LESS' : 'SHOW MORE'}
                    </p>
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
