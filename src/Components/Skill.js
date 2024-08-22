import React, { useState } from 'react';
import './skills.css';

const SkillsTechnology = () => {
  const [skills, setSkills] = useState([
    { name: 'Python', level: 90 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Data Science', level: 85 },
    { name: 'React', level: 70 },
    { name: 'OpenCV', level: 75 },
  ]);

  const [newSkill, setNewSkill] = useState('');
  const [newLevel, setNewLevel] = useState('');

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill && newLevel) {
      setSkills([...skills, { name: newSkill, level: parseInt(newLevel, 10) }]);
      setNewSkill('');
      setNewLevel('');
    }
  };

  return (
    <div className="skills-content">
      <h2>Skills & Technologies</h2>

      <form className="add-skill-form" onSubmit={addSkill}>
        <input
          type="text"
          placeholder="Skill Name"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Skill Level (%)"
          value={newLevel}
          onChange={(e) => setNewLevel(e.target.value)}
          min="0"
          max="100"
          required
        />
        <button type="submit">Add Skill</button>
      </form>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}>
                <span className="progress-level">{skill.level}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsTechnology;
