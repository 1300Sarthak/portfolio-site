import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;
const Card = styled.a`
  display: block;
  background: rgba(245,245,255,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: box-shadow 0.18s, background 0.18s;
  border: 1px solid #e0e0e0;
  &:hover {
    background: #eaf1ff;
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }
`;

const fakeClubs = [
  { name: 'AI Club President', link: 'https://example.com/ai-club', desc: 'Led a team of 30+ in AI projects and workshops.' },
  { name: 'Math Society Treasurer', link: 'https://example.com/math-society', desc: 'Managed finances and organized math competitions.' },
  { name: 'Hackathon Organizer', link: 'https://example.com/hackathon', desc: 'Coordinated a 200+ participant hackathon.' },
];

const Club = (props) => (
  <WindowFrame title="Club & Leadership" {...props}>
    <h2 style={{ color: '#111' }}>Club & Leadership</h2>
    <CardGrid>
      {fakeClubs.map((club, i) => (
        <Card key={i} href={club.link} target="_blank" rel="noopener noreferrer">
          <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{club.name}</div>
          <div style={{ fontSize: '0.97rem', color: '#444', marginTop: 4 }}>{club.desc}</div>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Club; 