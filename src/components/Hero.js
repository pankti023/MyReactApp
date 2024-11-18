import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const canvasRef = useRef(null);
  //const mousePos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Create points and circles
    const points = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        let px = x + Math.random() * width / 20;
        let py = y + Math.random() * height / 20;
        let p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // Find closest points
    points.forEach(p1 => {
      const closest = [];
      points.forEach(p2 => {
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      });
      p1.closest = closest;
    });

    // Circle constructor
    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;
      this.active = 0;

      this.draw = function () {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    // Create a circle for each point
    points.forEach(p => {
      p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
    });

    // Handle mouse move
    function mouseMove(e) {
      target.current.x = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      target.current.y = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    // Get distance between points
    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, width, height);
      points.forEach(p => {
        if (Math.abs(getDistance(target.current, p)) < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (Math.abs(getDistance(target.current, p)) < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (Math.abs(getDistance(target.current, p)) < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        drawLines(p);
        p.circle.draw();
      });
      requestAnimationFrame(animate);
    }

    // Draw lines connecting closest points
    function drawLines(p) {
      if (!p.active) return;
      p.closest.forEach(c => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    }

    // Set up event listeners
    function addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('resize', resize);
    }

    // Resize the canvas
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    // Start animation
    animate();
    addListeners();

    // Clean up listeners on unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="large-header" className="hero">
      <canvas ref={canvasRef} id="demo-canvas" className="particles-canvas"></canvas>
      <div className="hero-content">
        <h1>Pankti Parikh</h1>
        <p className="hero-subtitle"> Computer Science Engineer | Retail Manager </p>
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
  );
}

export default Hero;
