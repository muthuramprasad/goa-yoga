import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap'; // Only import Container from react-bootstrap
import Image_1 from './Images/2 (1).jpg';
import Image_2 from './Images/2 (2).jpg';
import Image_3 from './Images/2 (3).jpg';
import Image_4 from './Images/2 (4).jpg';
import Image_5 from './Images/2 (5).jpg';
import Image_6 from './Images/2 (6).jpg';
import Image_7 from './Images/2 (7).jpg';

import './Slider.css';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const handleAfterChange = (previousIndex, nextIndex) => {
    // Check if the last slide is reached
    if (nextIndex === 0) {
      // Reset carousel to the first slide
      setActiveSlide(0);
    }
  };

  return (
    <div className='banner_div_container'>
      <Container>
        <Carousel
          responsive={responsive}
          itemClass="custom-carousel-item"
          showDots={true} // Show dots for navigation
          keyBoardControl={false}
          transitionDuration={1000}
          customTransition="transform 1000ms ease-in-out" // Example of custom transition
          arrows={true}
          // autoPlay={true} 
          // autoPlaySpeed={500} 
          afterChange={handleAfterChange} // Add the afterChange event handler
          centerMode={true} // Disable center mode
          infinite={true} // Enable infinite loop
          dotListClass="custom-dot-list" // Optional class for dot list
          removeArrowOnDeviceType={['tablet', 'mobile']} 
          item={12}
        >
       
        <figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_1} alt="sq-sample1" className='slider_image_all'/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_2} alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_3} alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_4} alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_5} alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_6} alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src={Image_7} alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>


<figure class="snip1192">
  <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
  <div class="author">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1"/>
    <h5>Pelican Steve <span> LittleSnippets</span></h5>
  </div>
</figure>









          
         
        </Carousel>
      </Container>
    </div>
  );
}

export default App;
