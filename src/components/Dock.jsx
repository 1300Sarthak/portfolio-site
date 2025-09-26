import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaCode, FaBlog, FaEnvelope, FaUsers, FaBriefcase, FaCertificate, FaTools, FaStar } from 'react-icons/fa';

const DockContainer = styled(motion.div)`
  position: fixed;
  /* To move the dock 300px to the left, change the next line to:
     left: calc(50% - 300px);
     To move it 300px to the right, use:
     left: calc(50% + 300px);
  */
  left: 50%;
  bottom: 12px;
  display: flex;
  gap: 4px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 6px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  min-width: 0;
  max-width: 100vw;
  transform: translateX(-50%) translateX(var(--dock-center-offset, 0px));
`;

const DockIconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DockIcon = styled(motion.div)`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #333;
  background: ${props => props.isActive ? 'rgba(255, 255, 255, 0.3)' : 'transparent'};
  transition: all 0.2s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${props => props.isActive ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
    transition: all 0.2s ease;
  }

  &:hover {
    transform: scale(1.2);
    background: rgba(255, 255, 255, 0.2);
  }

  &:hover::after {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(40, 40, 40, 0.85);
  color: #fff;
  padding: 6px 18px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.2px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
  opacity: 0.97;
  user-select: none;
`;

const Dock = ({ activeWindow, onWindowSelect }) => {
  const [hovered, setHovered] = useState(null);
  const dockRef = useRef(null);
  const iconRef = useRef(null);
  const dockItems = [
    { id: 'about', icon: <FaUser size={24} />, label: 'About Me' },
    { id: 'club', icon: <FaUsers size={24} />, label: 'Club & Leadership' },
    { id: 'internships', icon: <FaBriefcase size={24} />, label: 'Internships' },
    { id: 'certificates', icon: <FaCertificate size={24} />, label: 'Certificates' },
    { id: 'projects', icon: <FaCode size={24} />, label: 'Projects' },
    { id: 'skills', icon: <FaTools size={24} />, label: 'Skills' },
    { id: 'blog', icon: <FaBlog size={24} />, label: 'Blog' },
    { id: 'contact', icon: <FaEnvelope size={24} />, label: 'Contact' },
  ];

  useEffect(() => {
    if (dockRef.current && iconRef.current) {
      const dockWidth = dockRef.current.offsetWidth;
      const iconWidth = iconRef.current.offsetWidth;
      const n = dockItems.length;
      // Center the middle icon
      let offset = 0;
      if (n % 2 === 1) {
        // Odd: center the middle icon
        const middleIndex = Math.floor(n / 2);
        offset = (dockWidth / 2) - (iconWidth / 2) - (iconWidth * middleIndex);
      } else {
        // Even: center between the two middle icons
        const leftMiddleIndex = n / 2 - 1;
        offset = (dockWidth / 2) - (iconWidth * (leftMiddleIndex + 1));
      }
      dockRef.current.style.setProperty('--dock-center-offset', `${offset}px`);
    }
  }, [dockItems.length]);

  return (
    <DockContainer
      ref={dockRef}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {dockItems.map((item, idx) => (
        <DockIconWrapper
          key={item.id}
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === item.id && (
              <Tooltip
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.97, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
              >
                {item.label}
              </Tooltip>
            )}
          </AnimatePresence>
          <DockIcon
            ref={idx === 0 ? iconRef : undefined}
            isActive={activeWindow === item.id}
            onClick={() => onWindowSelect(item.id)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title={item.label}
          >
            {item.icon}
          </DockIcon>
        </DockIconWrapper>
      ))}
    </DockContainer>
  );
};

export default Dock;
