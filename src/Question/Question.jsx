import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./Question.css";

const Question = () => {
  return (
    <Container>
      <center className="mt-5 mb-5 p-3 faq">
        <h1 className="faq_h1">FAQ ?</h1>
      </center>
      <Row>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0" id="Question">
              <Accordion.Header>
                What is included in the 3D/3N yoga retreat package in Goa?{" "}
              </Accordion.Header>
              <Accordion.Body>
                <small>
                  Our mesmerizing 3D/3N yoga retreat package in Goa includes
                  daily yoga sessions, meditation classes, accommodation,
                  healthy meals, and rejuvenating activities to soothe your
                  soul.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                {" "}
              Can you provide more details about the accommodation options
                available for the 6D/6N retreat?
              </Accordion.Header>
              <Accordion.Body>
                <small>
                  For the enchanting 6D/6N retreat, we offer various
                  accommodation options ranging from cozy beach huts to
                  luxurious villas. Each option is designed to provide comfort
                  and relaxation during your stay.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What type of yoga classes are offered during the retreat?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Our expert instructors cater to different yoga styles
                  including Hatha, Vinyasa, Ashtanga, and more during the
                  retreat. You'll have the opportunity to explore and deepen
                  your practice under their guidance.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Are meals included in the retreat packages?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Yes, scrumptious meals are included in both retreat packages.
                  Delight your taste buds with nutritious and delicious
                  vegetarian dishes that will nourish your body and mind.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                 Is transportation to and from the retreat center included in
                the package?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Transportation to and from the retreat center is not included
                  in the package; however, we are more than happy to assist you
                  with arranging transportation if needed.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                Are there any additional activities or excursions included in
                the retreat itinerary?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Besides yoga sessions and meditation classes, our retreats
                  offer additional activities such as nature walks, beach
                  excursions, cultural experiences, and more! Immerse yourself
                  fully in this holistic experience.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                What is the daily schedule like for participants in the 3D/3N &
                6D/6N retreat?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Daily schedules are tailored to help you find inner peace and
                  rejuvenation amidst the serene Goan landscape. From sunrise
                  yoga sessions to guided meditation, your days will be filled
                  with holistic activities.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                Are there any specific requirements or experience levels needed
                to participate in the retreat?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  No prior experience is needed to participate! Our retreats
                  welcome all levels of practitioners, from beginners to
                  advanced yogis.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>
            <Accordion.Item eventKey="8">
              <Accordion.Header>
                Can participants book additional spa services or wellness
                treatments during their stay?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Yes, participants can book additional spa services and
                  wellness treatments during their stay to enhance their
                  relaxation and well-being. Just ask our friendly staff for
                  more details upon arrival.
                </small>
              </Accordion.Body>
            </Accordion.Item>
            <br></br>

            

            <Accordion.Item eventKey="9">
              <Accordion.Header>
                {" "}
                What is the cancellation policy for the retreat packages?
              </Accordion.Header>
              <Accordion.Body>
                <br></br>
                <small>
                  Don't worry, we've got you covered with a flexible
                  cancellation policy designed to provide peace of mind for any
                  unexpected changes.
                </small>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
