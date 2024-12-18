import React, { useState } from 'react';
/*import './AboutMe.css';*/



const About = () => {
  const [expandPassion, setExpandPassion] = useState(false);
  const [expandLearning, setExpandLearning] = useState(false);
  const [expandCollab, setExpandCollab] = useState(false);
  const [expandFunFacts, setExpandFunFacts] = useState(false);

  return (
    <section id="about" className="section">
    <div className="container">
      <div className="about-me-container">
        <div className="header">
          <h1 className="heading">✨ Hey! I'm Pankti Parikh ✨</h1>
          <p className="intro-paragraph">
            A dedicated tech enthusiast with a knack for bridging customer experience and technical expertise! From retail management to exploring the realms of artificial intelligence and cloud computing, I've embraced every challenge with curiosity and resilience.
          </p>
        </div>

        <div className="grid-container">
          <div 
            className={`grid-item passion ${expandPassion ? 'expanded' : ''}`} 
            onClick={() => setExpandPassion(!expandPassion)}
          >
            <h4 className="subheading">💕 Passionate About</h4>
            {expandPassion && <p className="paragraph">I'm passionate about the intersection of technology and customer experience, especially in areas like cloud solutions, AI-powered applications, and effective team management. I'm always eager to keep up with industry trends and develop skills that help drive meaningful impact in the tech world.</p>}
          </div>

          <div 
            className={`grid-item learning ${expandLearning ? 'expanded' : ''}`} 
            onClick={() => setExpandLearning(!expandLearning)}
          >
            <h4 className="subheading">✒️ Current Learning</h4>
            {expandLearning && <p className="paragraph">Currently, I'm building on my experiences by learning more about software development practices and enhancing my knowledge in areas like networking, system administration, and data analytics. Having a strong foundation in computer engineering and cloud computing, I'm well-equipped to take on complex technical roles and contribute effectively.</p>}
          </div>

          <div 
            className={`grid-item collab ${expandCollab ? 'expanded' : ''}`} 
            onClick={() => setExpandCollab(!expandCollab)}
          >
            <h4 className="subheading">🤝 Open to Collaborations</h4>
            {expandCollab && <p className="paragraph">I'm open to collaborating on projects that focus on improving system efficiency, developing scalable cloud solutions, and enhancing customer support experiences in SaaS environments. I’m also interested in connecting with communities that promote tech-driven solutions for everyday problems.</p>}
          </div>

          <div 
            className={`grid-item fun-facts ${expandFunFacts ? 'expanded' : ''}`} 
            onClick={() => setExpandFunFacts(!expandFunFacts)}
          >
            <h4 className="subheading">🤓 Fun Facts</h4>
            {expandFunFacts && (
              <p className="paragraph">
                I absolutely love cooking! When I'm not in front of a screen, I'm in the kitchen experimenting with new recipes. I'm also learning DJing—mixing tracks and creating beats is something I'm really passionate about.
              </p>
            )}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;