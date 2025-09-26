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
  background: rgba(255,245,255,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  text-decoration: none;
  font-weight: 500;
  transition: box-shadow 0.18s, background 0.18s;
  border: 1px solid #e0e0e0;
  &:hover {
    background: #f5eaff;
    box-shadow: 0 4px 16px rgba(0,0,0,0.13);
  }
`;

const fakeBlog = [
  { name: 'How I Built My Portfolio', link: 'https://dev.to/1300sarthak/portfolio', desc: 'A deep dive into my React/Vite setup.' },
  { name: 'Math for Machine Learning', link: 'https://towardsdatascience.com/math-for-ml', desc: 'Essential math concepts for ML.' },
  { name: 'Internship Interview Tips', link: 'https://medium.com/interview-tips', desc: 'How to ace your next tech interview.' },
];

const Blog = (props) => (
  <WindowFrame title="Blog" {...props}>
    <h2 style={{ color: '#111' }}>Blog</h2>
    <CardGrid>
      {fakeBlog.map((post, i) => (
        <Card key={i} href={post.link} target="_blank" rel="noopener noreferrer">
          <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{post.name}</div>
          <div style={{ fontSize: '0.97rem', color: '#444', marginTop: 4 }}>{post.desc}</div>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Blog;
