import React, { useEffect } from 'react';
/*import './Hero.css'; // Assuming you're adding the styles here.*/



const Hero = () => {
  useEffect(() => {
    // Colors for the balls
    const colors = [
      "rgba(250, 208, 46, 0.5)", // Soft yellow with 50% opacity
      "rgba(242, 141, 53, 0.5)", // Light orange with 50% opacity
      "rgba(242, 95, 92, 0.5)",  // Soft pink with 50% opacity
      "rgba(106, 76, 147, 0.5)", // Lavender purple with 50% opacity
      "rgba(72, 169, 166, 0.5)"  // Soft teal with 50% opacity
    ];

    const numBalls = 100;
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

      el.animate(
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
