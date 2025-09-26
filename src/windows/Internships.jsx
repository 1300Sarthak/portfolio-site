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
  background: rgba(245,255,245,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  font-weight: 500;
  border: 1px solid #e0e0e0;
`;
const InternTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
const InternCompany = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 4px;
`;
const InternDesc = styled.div`
  font-size: 0.97rem;
  color: #444;
  margin: 6px 0 8px 0;
`;
const InternTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const TechTag = styled.span`
  background: #eaffea;
  color: #333;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.93rem;
`;

const internships = [
  {
    title: 'Software Engineer Intern',
    company: 'Gilead Sciences',
    desc: '• Developed and implemented automated testing solutions using Python and Selenium, reducing manual testing time by 40%\n• Created a CI/CD pipeline using Jenkins and Docker, improving deployment efficiency by 60%\n• Collaborated with cross-functional teams to identify and resolve software issues\n• Utilized Jira for project management and Git for version control',
    tech: ['Python', 'Selenium', 'Jenkins', 'Docker', 'Jira', 'Git'],
  },
  {
    title: 'Machine Learning Research Assistant',
    company: 'MICoSys Lab @San Jose State University',
    desc: '• Conducted research in machine learning and computer vision applications\n• Implemented algorithms for real-time object detection and tracking\n• Published findings in university research journal\n• Mentored undergraduate students in research methodologies',
    tech: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV', 'TensorFlow'],
  },
  {
    title: 'Data Engineer Intern',
    company: 'Cequence Security',
    desc: '• Developed full-stack web applications using React.js and Node.js\n• Implemented RESTful APIs and database solutions using MongoDB\n• Participated in agile development processes and code reviews\n• Contributed to the development of automated testing frameworks',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST API', 'JavaScript'],
  },
];

const Internships = (props) => (
  <WindowFrame title="Internships" {...props}>
    <h2 style={{ color: '#111' }}>Internships</h2>
    <CardGrid>
      {internships.map((intern, i) => (
        <Card key={i}>
          <InternTitle>{intern.title}</InternTitle>
          <InternCompany>{intern.company}</InternCompany>
          <InternDesc style={{ whiteSpace: 'pre-line' }}>{intern.desc}</InternDesc>
          <InternTech>
            {intern.tech.map((t, j) => (
              <TechTag key={j}>{t}</TechTag>
            ))}
          </InternTech>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Internships; 