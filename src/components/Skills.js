import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const softSkillsData = [
  { name: "Customer Service", value: 100 },
  { name: "Problem Solving", value: 90 },
  { name: "Communication", value: 95 },
  { name: "Leadership", value: 85 },
];

const technicalSkillsData = [
  { name: "Python", value: 90 },
  { name: "React", value: 95 },
  { name: "AI/ML", value: 90 },
  { name: "C++", value: 75 },
  { name: "Windows", value: 85 },
  { name: "Microsoft 360", value: 80 },
  { name: "AWS/Azure", value: 75 }
];

const COLORS = ["#8884d8", "#8dd1e1", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c", "#f0a500"];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-charts">
          {/* Soft Skills Pie Chart */}
          <div className="chart-container">
            <h3>Soft Skills</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={softSkillsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {softSkillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Technical Skills Pie Chart */}
          <div className="chart-container">
            <h3>Technical Skills</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={technicalSkillsData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                >
                  {technicalSkillsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
