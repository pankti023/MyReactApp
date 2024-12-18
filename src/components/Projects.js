import React from "react";

const projects = [
  {
    name: "AI-Powered Generative Chatbot Development",
    description: [
      "Developed an interactive chatbot system incorporating sophisticated language models, optimizing user interaction and enhancing user support processes using python.",
      "Engineered a responsive chatbot solution, significantly reducing users query resolution time and improving user engagement through dynamic conversational interfaces."
    ],
    githubUrl: "https://github.com/pankti023/AI-Powered-Generative-Chatbot-Development-main",
  },
  {
    name: "Generative image using stable diffusion",
    description: [
      "Implementation of a Stable Diffusion model for generative image synthesis.",
      "Integration of the model into a Streamlit web application for interactive image generation in python."
    ],
    githubUrl: "https://github.com/pankti023/Image-generation-using-stable-diffusion",
  },
  {
    name: "Multi-Model Optimized route finding system",
    description: [
      "Utilization of Folium for interactive visualization of routes and geographical data, enhancing user understanding and engagement.",
      "Incorporation of image processing techniques and OpenCV for pre-processing spatial data, enabling accurate feature extraction and analysis within the root-finding process. Additionally, implementation of the A* algorithm for optimal path-finding in graph-based representations of spatial data. Finally, deployment of the system using Streamlit for creating intuitive and interactive web-based interfaces, facilitating user interaction and feedback."
    ],
    githubUrl: "https://github.com/pankti023/Multi-Modal-Route-Finding-System",
  },
  {
    name: "Face Recognition",
    description: [
      "Face Regonition using OpenCV and Image Processing techniques."
    ],
    githubUrl: "https://github.com/pankti023/Face-Recognition",
  },
  {
    name: "React App",
    description: [
      "My Web Portfolio"
    ],
    githubUrl: "https://github.com/pankti023/MyReactApp",
  },
    
];

const Projects = () => {
  return (
  <section id="projects" className="section">
    <div className="container">
      <h2>Projects</h2>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={{
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onClick={() => window.open(project.githubUrl, "_blank")}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ margin: "0 0 5px 0", color: "#007acc" }}>{project.name}</h3>
            <p style={{ margin: 0 }}>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  </section>
  );
};

export default Projects;
