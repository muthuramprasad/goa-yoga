import Banner from "./Banner/Banner";

import Book from "./Book/Food.jsx";
import Sanctuary from "./Sanctuary/Sanctuary";
import Video from "./Video/Goa.jsx";
import Intructor_2 from "./Intructor 2/Instructor_2.jsx";
import About from "./components/About";
import Unwind from "./components/Unwind";

import Navbar from "./Navbar/Navbar.jsx";

import Trainer from "./Trainer/Trainer.jsx";

import Pr from "./Pr/pr";
import Email from "./Email/Email";
import Qusetion from "./Question/Question";
import Footer from "./footer 2/Footer2.jsx";
import Mark from "./Mark/Mark";
import Ani from "./Animated Retreat/AniRetreat.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <About />
      <Unwind />

      <Book />
      <Trainer />
      <Ani />
      <Sanctuary />
      <Video />
      <Mark />

      <Intructor_2 />
      <Pr />

      <Qusetion />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
