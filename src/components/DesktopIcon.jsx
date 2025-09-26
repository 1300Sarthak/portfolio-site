import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileAlt, FaImages, FaComments, FaEnvelope } from 'react-icons/fa';

const IconContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding: 8px;
  border-radius: 8px;
  width: 80px;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
`;

const IconLabel = styled.span`
  font-size: 12px;
  color: #fff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.4);
  padding: 2px 6px;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const getIcon = (type) => {
  switch (type) {
    case 'github':
      return <FaGithub size={32} />;
    case 'linkedin':
      return <FaLinkedin size={32} />;
    case 'resume':
      return <FaFileAlt size={32} />;
    case 'photos':
      return <FaImages size={32} />;
    case 'chatbot':
      return <FaComments size={32} />;
    case 'contact':
      return <FaEnvelope size={32} />;
    default:
      return null;
  }
};

const DesktopIcon = ({ type, label, onClick, href }) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <IconContainer
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <IconWrapper>
        {getIcon(type)}
      </IconWrapper>
      <IconLabel>{label}</IconLabel>
    </IconContainer>
  );
};

export default DesktopIcon;
