import React from 'react';

function Navigation({ activeSection, scrollToSection }) {
  const sectionNames = {
    hero: 'Home',
    about: 'About Me',
    workexperience: 'Work Experience',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    };

  return (
    <nav className="navigation">
      <ul>
        {Object.entries(sectionNames).map(([id, name]) => (
          <li key={id} className={activeSection === id ? 'active' : ''}>
            <button onClick={() => scrollToSection(id)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
