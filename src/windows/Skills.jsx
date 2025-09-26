import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;
const Card = styled.div`
  background: rgba(245,245,255,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  font-weight: 500;
  border: 1px solid #e0e0e0;
`;
const SkillTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 6px;
`;
const SkillDesc = styled.div`
  font-size: 0.97rem;
  color: #444;
`;

const skillsData = [
  {
    title: 'Languages',
    desc: 'Python, Java, SQL, HTML5, CSS, Javascript',
  },
  {
    title: 'Frameworks',
    desc: 'SciPy, NumPy, Pandas, Scikit-learn, Flask, ReactJS',
  },
  {
    title: 'Tools',
    desc: 'Jira, Git, Docker, AWS, Linux, Excel',
  },
  {
    title: 'Machine Learning',
    desc: 'TensorFlow, PyTorch, Keras, Scikit-learn',
  },
];

const Skills = (props) => (
  <WindowFrame title="Skills" {...props}>
    <h2 style={{ color: '#111' }}>Skills</h2>
    <CardGrid>
      {skillsData.map((skill, i) => (
        <Card key={i}>
          <SkillTitle>{skill.title}</SkillTitle>
          <SkillDesc>{skill.desc}</SkillDesc>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Skills; 