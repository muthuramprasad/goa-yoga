import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";

import Garudasana from "./Yoga pose Images 12/1 (1).jpg";
import Hastana from "./Yoga pose Images 12/Hastana.jpg";
import vrikshasana from "./Yoga pose Images 12/vrikshasana.jpg";
import Chakrasana from "./Yoga pose Images 12/Chakrasana.jpg";
import sukhasana from "./Yoga pose Images 12/sukhasana.jpg";
import dhanurasana from "./Yoga pose Images 12/dhanurasana.jpg";
import Virabhadrasana from "./Yoga pose Images 12/Virabhadrasana.jpg";
import Matsyasana from "./Yoga pose Images 12/Matsyasana.jpg";
import Ardha_matsyendrasana from "./Yoga pose Images 12/Ardha_matsyendrasana.jpg";
import vasisthasana from "./Yoga pose Images 12/vasisthasana.jpg";
import Mayurasana from "./Yoga pose Images 12/Matsyasana.jpg";
import Hanumanasana from "./Yoga pose Images 12/Hanumanasana.jpg";

import "./Mark.css";

function App() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 },
  };
  

  const slides = [
    {
      image: Garudasana,
      text: "Garudasana",
      description: "Garudasana is a balancing posture in a standing position. Garudasana yoga is also called the eagle pose because the final position of the body resembles the beak of an eagle. The eagle yogasana helps to enhance concentration, alertness and awareness of the mind.",
    },
    {
      image: Hastana,
      text: "Hasta Uttanasana",
      description: 'Hasta Uttanasana, also known as Raised Arms Pose, is a foundational yoga posture. It involves raising the arms overhead while standing. Hasta Uttanasana is often practiced as part of the Sun Salutation sequence. The Sanskrit name "Hasta Uttanasana" translates to "Raised Arms Pose," reflecting the action of stretching the arms upward. This pose helps to lengthen the spine, open the chest',
    },
    {
      image: vrikshasana,
      text: "Vrikshasana",
      description: 'Vrikshasana, commonly known as Tree Pose, is a fundamental standing yoga posture. It involves standing on one leg while placing the sole of the other foot against the inner thigh or calf of the standing leg. Vrikshasana requires balance, concentration, and a steady gaze to maintain stability. The name "Vrikshasana" is derived from the Sanskrit words "Vriksha," meaning tree, and "Asana," meaning pose.',
    },
    {
      image: Chakrasana,
      text: "Chakrasana",
      description: "Chakrasana, also known as Wheel Pose or Urdhva Dhanurasana, is an advanced backbend yoga pose. In Sanskrit, 'Chakrasana' translates to 'Wheel Pose,' reflecting the shape of the body in the pose resembling a wheel. This dynamic posture involves lifting the entire body off the ground while arching the back and supporting the body weight on the hands and feet. Chakrasana stretches and strengthens. ",
    },
    {
      image: dhanurasana,
      text: "Dhanurasana",
      description: "Dhanurasana, or Bow Pose, is a yoga asana that involves a backbend, resembling the shape of a bow. It requires lying on the stomach, bending the knees, and grasping the ankles while lifting the chest and thighs off the ground. This pose stretches the front of the body, strengthens the back muscles, and stimulates digestion. Regular practice of Dhanurasana enhances spinal flexibility, improves posture, and promotes a sense of vitality and well-being",
    },
    {
      image: Virabhadrasana,
      text: "Virabhadrasana",
      description: "Virabhadrasana, or Warrior Pose, is a foundational yoga posture that symbolizes strength and resilience. It involves stepping one foot forward into a lunge while extending the arms upward and outward. This pose strengthens the legs, opens the chest, and improves balance and focus. Virabhadrasana cultivates a sense of empowerment and determination, fostering both physical and mental strength. Integrating Virabhadrasana into your practice can enhance confidence, inner fortitude, and a warrior mindset.",
    },
    {
      image: Matsyasana,
      text: "Matsyasana",
      description: "Matsyasana, or Fish Pose, involves lying on your back, lifting your chest, and arching your back to resemble the shape of a fish. This posture stretches the chest, throat, and abdomen, while opening the heart and throat chakras. Matsyasana stimulates the thyroid gland, improves respiratory function, and relieves tension in the neck and shoulders. Regular practice of Matsyasana can promote relaxation, alleviate fatigue, and enhance overall well-being. Integrating Matsyasana into your yoga routine can cultivate a sense of openness, vitality, and inner peace.",
    },
    {
      image: Ardha_matsyendrasana,
      text: "Ardha matsyendrasana",
      description: "Ardha Matsyendrasana, or Half Lord of the Fishes Pose, is a seated yoga posture that involves a gentle spinal twist. This pose requires bending one leg and crossing it over the other while twisting the torso in the opposite direction. Ardha Matsyendrasana stretches the spine, shoulders, and hips, improving flexibility and mobility.",
    },
    {
      image: vasisthasana,
      text: "Vasisthasana",
      description: "Vasisthasana, also known as Side Plank Pose, is a challenging yoga posture that strengthens the arms, wrists, and core muscles. In Vasisthasana, the body is supported on one arm while the sides of the feet are stacked on top of each other, creating a straight line from head to heels. This pose requires stability, balance, and concentration to hold.",
    },
    {
      image: sukhasana,
      text: "Sukhasana",
      description: "Sukhasana, commonly known as Easy Pose or Comfortable Seat, is a simple cross-legged sitting posture often used for meditation and pranayama (breath control) practices. In Sukhasana, one sits on the floor with legs crossed, ankles resting beneath the knees, and hands placed on the knees or thighs.",
    },
    {
      image: Mayurasana,
      text: "Mayurasana",
      description: "Mayurasana, also known as Peacock Pose, is an advanced yoga posture that requires balancing the body on the arms while the abdomen rests against the upper arms. In Mayurasana, the elbows are bent and pressed firmly into the abdomen, creating a stable foundation for the body to lift and extend horizontally. This pose strengthens the arms, shoulders, and core muscles",
    },
    {
      image: Hanumanasana,
      text: "Hanumanasana",
      description: "Hanumanasana, commonly known as Monkey Pose or Splits Pose, is an intermediate to advanced yoga posture that requires deep flexibility in the hips, hamstrings, and groin. In Hanumanasana, one leg extends forward with the foot flexed, while the other leg extends backward with the knee resting on the ground, creating a deep stretch along the inner thighs and groin.",
    },
];


  return (
    <div className="banner_div_container  p-3">
        <center>
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
      <Container>
        <center>
          <h1 className="slider_h1">
          The Enchantment of our Yoga Retreat in Goa
          </h1>
        </center>

        <Carousel
          responsive={responsive}
          itemClass="custom-carousel-item"
          infinite={true}
          showDots={false}
          keyBoardControl={true}
          transitionDuration={600}
          item={12}
        >
          {slides.map((slide, index) => (
            <div key={index} className="image_1_for_accumodation iconOverlay ">
              <div className="p-3">
              <img src={slide.image} alt="" className="mark_image_1" />
              <p className="SuperRoom ">{slide.text}</p>
              <div className="mark_content_details_container ">
                <p className="mark_content_details ">{slide.description}</p>
              </div>
              </div>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}

export default App;
