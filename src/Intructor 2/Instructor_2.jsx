import React, { useState, useRef } from "react";
import Img_1 from './Images/2 (1).jpeg'
import Img_2 from './Images/2 (2).jpg'
import Img_3 from './Images/2 (3).jpg'
import Img_4 from './Images/2 (4).jpg'
import Img_5 from './Images/2 (5).jpg'
import Img_6 from './Images/2 (6).jpg'
import "./Instructor_2.css"; // Assuming you have CSS file for styling
import j from './Images/j.png'

const Instructor_2 = () => {
const [vis1,setvis1]=useState()
const [vis2,setvis2]=useState()
const [vis3,setvis3]=useState()
const [vis4,setvis4]=useState()
const [vis5,setvis5]=useState()
const [vis6,setvis6]=useState()
    const img1=()=>{
setvis1(!vis1)
    }
    const img2=()=>{
        setvis2(!vis2)
            }
            const img3=()=>{
                setvis3(!vis3)
                    }
            
                    const img4=()=>{
                        setvis4(!vis4)
                            }
                            const img5=()=>{
                                setvis5(!vis5)
                                    }
                                    const img6=()=>{
                                        setvis6(!vis6)
                                            }
    return (
        <div className="mb-5  p-3">

               <center className="mb-2 mt-3">
               <div className="head-div">
        <div className="head-line"></div>
        <img
          src={require("../assets/fwr-head.png")}
          className="flower-head mx-1 rotate"
          alt=""
        />
        <div className="head-line"></div>
      </div>
    </center>
            <div className="page-header">
                <div className="container">
                    <div className="row"></div>
                </div>
            </div>

            <div className="blog">
                <div className="container">
                    <div className="section-header text-center"> 
                    
                        <h1 className="Testimonial_h1">
                        Read the praise and accolades pouring in from 
                        <br></br>our 
                        esteemed retreaters.
                        </h1>
                    </div>

                    <div className="row blog-page">
                    <div className="col-lg-4 col-md-6">
                            <div className="blog-item ">
                                <div className="blog-img">
                                    <img src={Img_1} alt="Blog" />
                                </div>
                                <div className="blog-text">
                                    <h2>Srishti Malpath</h2>
                                    <div className="blog-meta">
                                        <p style={{ display: "flex" }}>Yoga Scholar</p>
                                        <p><i className="far fa-calendar-alt"></i> Hyderabad </p>
                                        <p><i className="far fa-comments"></i>5</p>
                                    </div>
                                    <p  >
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor.
                                    
                                    {
                                    vis1 && <span> 
                                          Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor
                                    </span>
                                    }</p>
                                  
                                 <b><p onClick={img1} className='cursor'>
                                    { vis1 ?"  SHOW LESS" :" SHOW MORE"}
                                   </p></b>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Img_2} alt="Blog" />
                                </div>
                                <div className="blog-text">
                                    <h2>Mamta Adnani</h2>
                                    <div className="blog-meta">
                                        <p style={{ display: "flex" }}>Vertie Integral Learning Center</p>
                                        <p><i className="far fa-calendar-alt"></i>Auroville</p>
                                        <p><i className="far fa-comments"></i>5</p>
                                    </div>
                                    <p  >
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor.
                                    
                                    {
                                    vis2 && <span> 
                                          Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor
                                    </span>
                                    }</p>
                                  
                                  <b><p onClick={img2} className='cursor'>
                                    { vis2 ?"  SHOW LESS" :" SHOW MORE"}
                                   </p></b>                                     
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Img_3} alt="Blog" />
                                </div>
                                <div className="blog-text">
                                    <h2>Roshan Kumar Pathak</h2>
                                    <div className="blog-meta">
                                        <p style={{ display: "flex" }}>Yogfront Organization</p>
                                        <p><i className="far fa-calendar-alt"></i>Delhi</p>
                                        <p><i className="far fa-comments"></i>5</p>
                                    </div>
                                    <p  >
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor.
                                    
                                    {
                                    vis3 && <span> 
                                          Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor'
                                    </span>
                                    }</p>
                                  
                                  <b><p onClick={img3} className='cursor'>
                                    { vis3 ?"  SHOW LESS" :" SHOW MORE"}
                                   </p></b>                                      
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Img_4} alt="Blog" />
                                </div>
                                <div className="blog-text">
                                    <h2>Soko Takeuchi</h2>
                                    <div className="blog-meta">
                                        <p style={{ display: "flex" }}>Yoga Scholar, Japan</p>
                                        <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                        <p><i className="far fa-comments"></i>5</p>
                                    </div>
                                    <p  >
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor .
                                    
                                    {
                                    vis4 && <span> 
                                          Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor
                                    </span>
                                    }</p>
                                  
                                  <b><p onClick={img4} className='cursor'>
                                    { vis4 ?"  SHOW LESS" :" SHOW MORE"}
                                   </p></b>                                     
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Img_5} alt="Blog" />
                                </div>
                                <div className="blog-text">
                                    <h2>Parul Jain</h2>
                                    <div className="blog-meta">
                                        <p style={{ display: "flex" }}>Yoga Scholar, Bengaluru</p>
                                        <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                        <p><i className="far fa-comments"></i>5</p>
                                    </div>
                                    <p  >
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor .
                                    
                                    {
                                    vis5 && <span> 
                                           Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor
                                    </span>
                                    }</p>
                                  
                                  <b><p onClick={img5} className='cursor'>
                                    { vis5 ?"  SHOW LESS" :" SHOW MORE"}
                                   </p></b>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={Img_6} alt="Blog" />
                                </div>
                                <div className="blog-text">
                                    <h2>Farha Thakkar</h2>
                                    <div className="blog-meta">
                                        <p style={{ display: "flex" }}>AMI Yoga, Mumbai</p>
                                        <p><i className="far fa-calendar-alt"></i>01-Jan-2045</p>
                                        <p><i className="far fa-comments"></i>5</p>
                                    </div>
                                    <p  >
                                         Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor .
                                    
                                    {
                                    vis6 && <span> 
                                             Lorem ipsum dolor sit amet elit. Neca pretim miura bitur
                                        facili ornare velit non vulpte liqum metus tortor
                                    </span>
                                    }</p>
                                  
                                  <b><p onClick={img6} className='cursor'>
                                    { vis6 ?"  SHOW LESS" :" SHOW MORE"}
                                   </p></b>                                      
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor_2;
