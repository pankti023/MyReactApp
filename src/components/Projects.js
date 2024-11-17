import React from 'react';

function Projects() {
  const projects = [
    {
      title: "AI-Powered Generative Chatbot Development",
      description: [
        "Developed an interactive chatbot system incorporating sophisticated language models, optimizing user interaction and enhancing user support processes using python.",
        "Engineered a responsive chatbot solution, significantly reducing users query resolution time and improving user engagement through dynamic conversational interfaces."
      ]
    },
    {
      title: "Dialogue predictor Using NLP",
      description: [
        "Designed and implemented a predictive dialogue system harnessing natural language processing (NLP) techniques, leveraging external APIs to forecast conversational outcomes.",
        "Developed a predictive dialogue model using advanced NLP methodologies and integrated external APIs, enhancing conversation flow prediction in interactive interfaces."
      ]
    },
    {
      title: "Generative image using stable diffusion",
      description: [
        "Implementation of a Stable Diffusion model for generative image synthesis.",
        "Integration of the model into a Streamlit web application for interactive image generation in python."
      ]
    },
    {
      title: "Multi-Model Optimized route finding system",
      description: [
        "Utilization of Folium for interactive visualization of routes and geographical data, enhancing user understanding and engagement.",
        "Incorporation of image processing techniques and OpenCV for pre-processing spatial data, enabling accurate feature extraction and analysis within the root-finding process. Additionally, implementation of the A* algorithm for optimal path-finding in graph-based representations of spatial data. Finally, deployment of the system using Streamlit for creating intuitive and interactive web-based interfaces, facilitating user interaction and feedback."
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <ul>
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
