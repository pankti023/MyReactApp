import React from "react";
import "./Navigation.css";

const Navigation = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Offset to adjust for sticky nav height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <button onClick={() => handleScroll("hero")}>Home</button>
          <button onClick={() => handleScroll("about")}>About</button>
          <button onClick={() => handleScroll("work experience")}>Work Experience</button>
          <button onClick={() => handleScroll("education")}>Education</button>
          <button onClick={() => handleScroll("skills")}>Skills</button>
          <button onClick={() => handleScroll("projects")}>Projects</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

