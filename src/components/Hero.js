import React, { useEffect } from 'react';
import './Hero.css'; // Assuming you're adding the styles here.



const Hero = () => {
  useEffect(() => {
    // Colors for the balls
    const colors = [
      "#FAD02E", // Soft yellow
      "#F28D35", // Light orange
      "#F25F5C", // Soft pink
      "#6A4C93", // Lavender purple
      "#48A9A6"  // Soft teal
    ];

    const numBalls = 50;
    const balls = [];

    // Create balls
    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random() * 3 + 1}em`; // Ball size between 1 and 4 em
      ball.style.height = ball.style.width;

      balls.push(ball);
      document.body.append(ball);
    }

    // Keyframes animation for balls
    balls.forEach((el, i) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
      };

      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000, // random duration
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });

    // Cleanup the created balls when the component unmounts
    return () => {
      balls.forEach(ball => {
        ball.remove();
      });
    };
  }, []);

  return (
    <section id="hero" className="section">
    <section id="larger-header" className="hero">
      <div className="container">
        <h1>Pankti Parikh</h1>
        <p className="hero-subtitle">Computer Science Engineer | Retail Manager</p>
        <div className="hero-links">
          <a href="mailto:parikhpankti023@gmail.com" className="hero-link">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.linkedin.com/in/panktiparikh023" className="hero-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Hero;
