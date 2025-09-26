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
const ProjectTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;
const ProjectDesc = styled.div`
  font-size: 0.97rem;
  color: #444;
  margin: 6px 0 8px 0;
`;
const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const TechTag = styled.span`
  background: #e0e0ff;
  color: #333;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.93rem;
`;

const projects = [
  {
    title: 'SmartQuery',
    link: 'https://github.com/tanzilahmed0/SmartQuery',
    desc: 'SmartQuery is a full-stack application that lets users upload CSV files and query them using natural language. Built with Next.js 14 (TypeScript), Tailwind CSS, and DaisyUI on the frontend, and FastAPI, PostgreSQL, Redis, MinIO, and Celery on the backend. Features include Google OAuth authentication, JWT session management, async CSV processing and schema analysis, robust API client with retry logic, and comprehensive integration testing. The system supports file upload via presigned URLs, automatic schema analysis, and instant data visualization with Recharts. CI/CD is managed with GitHub Actions, and the infrastructure is containerized with Docker Compose.',
    tech: [
      'Next.js 14', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Zustand', 'Recharts', 'Axios', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'MinIO', 'Celery', 'Docker', 'GitHub Actions', 'Google OAuth', 'JWT', 'Vitest', 'Playwright', 'CI/CD'
    ],
  },
  {
    title: 'DataPulse',
    link: 'https://github.com/1300Sarthak/DataPulse',
    desc: 'Real-time dashboard aggregating crypto, stocks, weather, and news in one mobile-friendly interface. Built with React, FastAPI, and Supabase for seamless daily information access.',
    tech: ['React', 'FastAPI', 'TypeScript', 'Redis', 'Supabase', 'Tailwind CSS', 'Docker', 'Chart.js', 'Python', 'PostgreSQL', 'REST API', 'GitHub Actions', 'Redis','Vercel','Render'],
  },
  {
    title: 'GovChat - 1st Place Winner at Microsoft Azure Hackathon for Public Sector',
    link: 'https://youtu.be/9DnK_Y8Fuiw',
    desc: 'MCP and RAG based chatbot',
    tech: ['RAG', 'MCP', 'LLM', 'React.JS', 'Python', 'Django', 'Azure'],
  },
  {
    title: 'SJFit - 2nd Place Winner at Silicon Hacks',
    link: 'https://github.com/1300Sarthak/SJFIT',
    desc: 'Developed an app using MediaPipe for pose estimation and CNNs for joint angle analysis, achieving 20% improvement in form detection. Integrated OpenCV for real-time feedback and NumPy for efficient data handling. Achieved 95% accuracy in tracking exercises like squats and curls, providing real-time performance analysis, won 2nd place at Silicon Hacks for this innovative project.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
  },
  {
    title: 'EmbrAlrt - 2nd Place Public Safety Track Winner at SJHacks',
    link: 'https://github.com/1300Sarthak/EmbrAlrt',
    desc: 'EmbrAlert is a one-stop platform for wildfire detection, prevention, and community alerts, built for the diverse San Jose area and beyond. It offers real-time wildfire risk assessments, live weather and air quality updates, and a simple dashboard for users to interact with. Users can upload images of potential smoke, and our lightweight RNN model predicts wildfire likelihood. The app also features a multilingual chat tool powered by a custom RAG pipeline, supporting six languages common in San Jose, with both voice and text input. Live camera wildfire detection without uploads is also integrated for instant reporting.',
    tech: ['React', 'Python', 'Langchain', 'RAG & CAG', 'Typescript', 'LLM'],
  },
  {
    title: 'Harmony Health',
    link: 'https://github.com/1300Sarthak/HarmonyHealth',
    desc: 'Engineered an AI-powered app using the Hume AI API to analyze vocal tones and facial expressions, tracking emotional patterns and mental health conditions. Integrated an End-to-End Framework for Production-Ready LLM to deliver personalized wellness insights and real-time emotional analysis.',
    tech: ['Python', 'Flask'],
  },
  {
    title: 'Mass Shooting Predictor',
    link: 'https://github.com/1300Sarthak/MassShootingPredictor',
    desc: 'Developed a predictive model to analyze and forecast U.S. gun violence trends, utilizing machine learning algorithms including KNN, Logistic Regression, Decision Trees, and SVMs. Currently working on integrating the Google Maps API to visualize high-risk areas, providing actionable insights for targeted safety interventions.',
    tech: ['Python', 'Machine Learning'],
  },
  {
    title: 'Portfolio Site',
    link: 'https://github.com/1300Sarthak/portfolio',
    desc: 'I made a portfolio site to showcase my projects and skills. I used HTML, CSS, and JavaScript to create the site. Within the site I have a chatbot which uses a custom RAG pipeline to answer questions based on me, and not other random information.',
    tech: ['RAG', 'CAG', 'Python', 'HTML', 'CSS', 'JavaScript', 'Render (Deployment)', 'Supabase (Database)'],
  },
  {
    title: 'Study Group',
    link: 'https://github.com/1300Sarthak/SJSUStudyGroup',
    desc: 'Currently developing a full-stack web application to connect SJSU students for study groups. Using HTML/CSS/JS for the front-end and React.js for dynamic functionality. Progressing towards integrating Firebase for user authentication and database management. The app will feature real-time messaging, course-based group creation, and availability sharing, with a focus on user-friendly design and seamless collaboration. Beta deploying Jan 2025',
    tech: ['HTML5', 'CSS', 'JavaScript', 'Firebase'],
  },
  {
    title: 'Eventify',
    link: 'https://github.com/1300Sarthak/Eventify',
    desc: 'Currently developing a web application using React/Next.js with server-side rendering and state management via Redux. Building a Node.js back-end with RESTful APIs and real-time features using Socket.IO. Optimizing data handling with PostgreSQL and MongoDB to improve performance and reliability. Deploying the application using Docker on AWS. Also, integrating Google Maps API for location-based events, targeting a beta launch in March 2025',
    tech: ['React/Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Redis'],
  },
  {
    title: 'Uzz-ify',
    link: 'https://uzz-converter.vercel.app/',
    desc: 'With words such as "huzz" and "bruzz" becoming words that generations such as Gen Alpha, and Gen Z, use, becoming an integral part of our modern day life. I decided to created a website so that people convert your words,phrases, or even sentences into the lanaguge of a Gen Z/Alpha person.',
    tech: ['HTML5', 'CSS', 'JavaScript'],
  },
  {
    title: 'Amulanssi',
    link: 'https://github.com/1300Sarthak/amulanssi',
    desc: 'Amulanssi is a semi-autonomous, voice-controlled ambulance that responds to basic voice commands and navigates with minimal human intervention. The goal is to make it fully autonomous, allowing users to "call" it for emergency medical assistance. Helping solve the problem of extremely expensive albumance services within the United States.',
    tech: ['Arudino', 'C++'],
  },
  {
    title: 'Slue - 3rd Place Winner at Expo Hacks II',
    link: 'https://github.com/1300Sarthak/Slue',
    desc: 'Slue is an automatic watering solution designed to keep your plants healthy even when you\'re away. By measuring soil moisture and plant nutrients, SLUE waters your plants only when necessary, ensuring optimal care.',
    tech: ['Arudino', 'C++'],
  },
];

const Projects = (props) => (
  <WindowFrame title="Projects" {...props}>
    <h2 style={{ color: '#111' }}>Projects</h2>
    <CardGrid>
      {projects.map((project, i) => (
        <Card key={i} href={project.link} target="_blank" rel="noopener noreferrer">
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDesc>{project.desc}</ProjectDesc>
          <ProjectTech>
            {project.tech.map((t, j) => (
              <TechTag key={j}>{t}</TechTag>
            ))}
          </ProjectTech>
        </Card>
      ))}
    </CardGrid>
  </WindowFrame>
);

export default Projects;
