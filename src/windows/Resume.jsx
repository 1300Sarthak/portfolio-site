import React from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';

const ResumeContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #fff;
`;

const ResumeFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const Resume = ({ isOpen, isMinimized, isMaximized, onClose, onMinimize, onMaximize, onRestore, defaultPosition }) => {
  return (
    <WindowFrame
      title="Resume"
      isOpen={isOpen}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      defaultPosition={defaultPosition}
      defaultSize={{ width: 800, height: 900 }}
    >
      <ResumeContainer>
        <ResumeFrame src="/Resume.pdf" title="Resume" />
      </ResumeContainer>
    </WindowFrame>
  );
};

export default Resume; 