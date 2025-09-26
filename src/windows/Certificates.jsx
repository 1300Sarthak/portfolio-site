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
  background: rgba(255,250,245,0.95);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 18px 20px;
  color: #222;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  gap: 18px;
`;
const CertImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
`;
const CertInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const CertTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
const CertValue = styled.div`
  font-size: 0.97rem;
  color: #444;
`;

const certificates = [
  {
    title: "Dean's Scholar",
    value: 'San Jose State University',
    image: 'certs/lol.jpg',
  },
  {
    title: 'AWS Solutions',
    value: 'Architect Associate',
    image: 'certs/aws_cert.jpg',
  },
  {
    title: 'Web Development',
    value: 'MERN Stack',
    image: 'certs/webdev_cert.jpg',
  },
  {
    title: 'Python',
    value: 'Advanced Programming',
    image: 'certs/python_cert.jpg',
  },
  {
    title: 'Data Science',
    value: 'Deep Learning',
    image: 'certs/data_science_cert.jpg',
  },
];

const Certificates = (props) => (
  <WindowFrame title="Certificates" {...props}>
    <h2 style={{ color: '#111' }}>Certificates</h2>
    <CardGrid>
      {certificates.map((cert, i) => (
        <Card key={i}>
          <CertImage src={cert.image} alt={cert.title} />
          <CertInfo>
            <CertTitle>{cert.title}</CertTitle>
            <CertValue>{cert.value}</CertValue>
          </CertInfo>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Certificates; 