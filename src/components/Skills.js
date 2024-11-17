import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function Skills() {
  const data = {
    labels: ['Customer Service/Relations','Python', 'Machine Learning', 'Web Development', 'Data Analysis',],
    datasets: [{
      label: 'Skills',
      data: [99, 95, 90, 85, 75],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
    }]
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-chart">
          <Radar data={data} />
        </div>
        <div className="skills-list">
          <h3>Programming Languages</h3>
          <p>Python, C, CSS, HTML, C#</p>
          <h3>Libraries / Frameworks</h3>
          <p>Pandas, NumPy, sklearn, Scikit-image, Headq, Folium, TKinter, Request, Matplotlib, Matlab, TensorFlow, Keras, PyTorch, OpenCV, GrovePI, Raspberry PI</p>
          <h3>Machine Learning</h3>
          <p>Time Series, Linear Regression, Logistic Regression, Decision trees, Random Forest, Predictive models, Deep Learning (CNN, RNN, ANN), Neural Networks, NLP, Confidence Intervals</p>
          <h3>Package Tools</h3>
          <p>GitHub, Git, Excel, Power BI, Tableau</p>
          <h3>Database</h3>
          <p>MySQL, SQL Server, Oracle, NoSQL, MongoDB</p>
          <h3>Soft Skills</h3>
          <p>Adaptability, Collaboration, Time management, Decision Making, Teamwork, Strategic Thinking, Self-Starting, Problem solving, Continuous Learning, Communication, Analytical Skills</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
