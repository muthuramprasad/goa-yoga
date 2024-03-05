import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import Yoga_img1 from "./Images/1 (1).jpg";
import Yoga_img2 from "./Images/1 (2).jpg";
import Yoga_img3 from "./Images/1 (3).jpg";
import j from './Images/j.png'
import "./BucketList.css";
 
const Bucket_List = () => {
  return ( 
    <Container   className="mb-5 p-5">
       <center className="mb-2" >
       <div className="head-div">
        <div className="head-line"></div>
        <img
          src={require("../assets/fwr-head.png")}
          className="flower-head mx-1 rotate "
          id="flower_in_santuary"
          alt=""
        />
        <div className="head-line"></div>
      </div>
    </center>
      <center>
     
        <motion.h1 className="Yoga_h3">
          Why a Yoga Retreat in Goa should be on
          <br></br>your bucket list
        </motion.h1>
      </center>

      <Row>
      <Col xs={12} md={6} xl={4} xxl={4} className="mt-2">
       <div className="card">
            <motion.div
              initial={{}}
              whileHover={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              whileTap={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              transition={{ duration: 0.5 }}
              id="flex"
            >
              <div className="Y0ga_content_center">
                <motion.h4 className="Bucket_h4">
                  {" "}
                  Serene Beaches
                </motion.h4>
                <p className="Bucket_p">
                Famous for its picturesque coastline and pristine beaches.
                </p>
              </div>
              <div>
                <motion.img className="border_ " src={Yoga_img1} alt=""  />
              </div>
            </motion.div>
          </div>
          <div>
            <br></br>
          </div>
        </Col>


        <Col xs={12} md={6} xl={4} xxl={4} className="mt-2">
       <div className="card">
            <motion.div
              initial={{}}
              whileHover={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              whileTap={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              transition={{ duration: 0.5 }}
              id="flex"
            >
              <div className="Y0ga_content_center">
                <motion.h4 className="Bucket_h4">
                  {" "}
                  Nature's Playground
                </motion.h4>
                <p className="Bucket_p">
                Famous for its picturesque coastline and pristine beaches.
                </p>
              </div>
              <div>
                <motion.img className="border_ " src={Yoga_img2} alt=""  />
              </div>
            </motion.div>
          </div>
          <div>
            <br></br>
          </div>
        </Col>

        <Col xs={12} md={6} xl={4} xxl={4} className="mt-2">
       <div className="card">
            <motion.div
              initial={{}}
              whileHover={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              whileTap={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              transition={{ duration: 0.5 }}
              id="flex"
            >
              <div className="Y0ga_content_center">
                <motion.h4 className="Bucket_h4">
                  {" "}
                  Spiritual Haven
                </motion.h4>
                <p className="Bucket_p">
                Cultural heritage and is home to numerous temples, churches, and spiritual centers.
                </p>
              </div>
              <div>
                <motion.img className="border_ " src={Yoga_img3} alt=""  />
              </div>
            </motion.div>
          </div>
          <div>
            <br></br>
          </div>
        </Col>


        <Col xs={12} md={6} xl={4} xxl={4} className="mt-2">
       <div className="card">
            <motion.div
              initial={{}}
              whileHover={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              whileTap={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              transition={{ duration: 0.5 }}
              id="flex"
            >
              <div className="Y0ga_content_center">
                <motion.h4 className="Bucket_h4">
                  {" "}
                  Vibrant Culture
                </motion.h4>
                <p className="Bucket_p">
                Goa is known for its vibrant festivals, delicious cuisine, and lively music scene..
                </p>
              </div>
              <div>
                <motion.img className="border_ " src={Yoga_img1} alt=""  />
              </div>
            </motion.div>
          </div>
          <div>
            <br></br>
          </div>
        </Col>


        <Col xs={12} md={6} xl={4} xxl={4} className="mt-2">
          <div className="card">
            <motion.div
              initial={{}}
              whileHover={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              whileTap={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              transition={{ duration: 0.5 }}
              id="flex"
            >
              <div className="Y0ga_content_center">
                <motion.h4 className="Bucket_h4">
                  {" "}
                  Adventure and Exploration{" "}
                </motion.h4>
                <p className="Bucket_p">
                  Plethora of adventure activities, including water sports,
                  trekking, and dolphin spotting. .
                </p>
              </div>
              <div>
                <motion.img className="border_" src={Yoga_img2} alt="" />
              </div>
            </motion.div>
          </div>
          <div>
            <br></br>
          </div>
        </Col>


        <Col xs={12} md={6} xl={4} xxl={4} className="mt-2">
       <div className="card">
            <motion.div
              initial={{}}
              whileHover={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              whileTap={{
                backgroundColor: "#0596d6",
                color: "white",
                duration: 0.5,
              }}
              transition={{ duration: 0.5 }}
              id="flex"
            >
              <div className="Y0ga_content_center">
                <motion.h4 className="Bucket_h4">
                  {" "}
                  Welcoming Community{" "}
                </motion.h4>
                <p className="Bucket_p">
                Warm and welcoming locals. Connect with like-minded individuals & make new friends
                </p>
              </div>
              <div>
                <motion.img className="border_ " src={Yoga_img3} alt=""  />
              </div>
            </motion.div>
          </div>
          <div>
            <br></br>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Bucket_List;
