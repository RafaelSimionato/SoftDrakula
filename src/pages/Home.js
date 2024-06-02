import React, { useEffect, useRef } from 'react';
import Cube from '../components/Cube';
import { Link } from 'react-router-dom';
// Update the import path for Home.css
import '../css/Home.css';

const Home = () => {
  // Refs for animation control
  const titleRef = useRef(null);

  // Function to animate title
  useEffect(() => {
    const animateTitle = () => {
      const letters = titleRef.current.querySelectorAll('.title-container h1 span');
      let index = 0;

      const animateNextLetter = () => {
        if (index < letters.length) {
          letters[index].style.opacity = 1;
          letters[index].style.transform = 'translateX(0)';
          index++;
          setTimeout(animateNextLetter, 200); // Adjust delay here
        }
      };

      animateNextLetter();
    };

    animateTitle();
  }, []);

  return (
    <div className="custom-container">
      <header>
        <div className="title-container">
          <h1 ref={titleRef}>
            <span>S</span>
            <span>o</span>
            <span>f</span>
            <span>t</span>
            <span className="orange-letter">D</span>
            <span>r</span>
            <span>a</span>
            <span>k</span>
            <span>u</span>
            <span>l</span>
            <span>a</span>
            <span className="small-copy">&copy;</span>
          </h1>
          <h2 id="title-container h2">Your Gateway to Digital Excellence</h2>
        </div>
      </header>
      <main>
        <Cube />
        <div className="custom-nav">
          <ul className="custom-menu">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="custom-content">
          <h2 id="title-container h2">Welcome to </h2>
          <h1><Link to="/">SoftDrakula</Link></h1>
          <p className="tagline">Front-end, Web Design, UX/UI, Inbound marketing</p>
        </div>
        <div className="custom-content">
          <h1><Link to="/about">About Us</Link></h1>
          <p className="tagline">
            At SoftDrakula, we deliver innovative web solutions by seamlessly combining Front-End proficiency with exceptional UX/UI design. Our expertise goes beyond web development to include strategic digital marketing services, such as SEO for organic growth and effective inbound marketing strategies.
          </p>
        </div>
        <div className="custom-content">
          <h1><Link to="/projects">Projects</Link></h1>
          <p className="tagline">Explore our projects.</p>
        </div>
        <div className="custom-content">
          <h1><Link to="/contact">Contact</Link></h1>
          <p className="tagline">Get in touch with us.</p>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Proudly powered by Soft<span className="blood">D</span>rakula</p>
      </footer>
    </div>
  );
};

export default Home;
