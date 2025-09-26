import React, { useState } from 'react';
import WindowFrame from '../components/WindowFrame';
import styled from '@emotion/styled';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhotosContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Photo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

const PhotoCounter = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
`;

// Add your photos here
const photos = [
  '/photos/photo1.jpg',
  '/photos/photo2.jpg',
  '/photos/photo3.jpg',
  // Add more photos as needed
];

const Photos = ({ isOpen, isMinimized, isMaximized, onClose, onMinimize, onMaximize, onRestore, defaultPosition }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <WindowFrame
      title="Photos"
      isOpen={isOpen}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onClose={onClose}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      defaultPosition={defaultPosition}
      defaultSize={{ width: 1000, height: 800 }}
    >
      <PhotosContainer>
        <Photo src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
        <PrevButton onClick={goToPrevious}>
          <FaChevronLeft size={20} />
        </PrevButton>
        <NextButton onClick={goToNext}>
          <FaChevronRight size={20} />
        </NextButton>
        <PhotoCounter>
          {currentIndex + 1} / {photos.length}
        </PhotoCounter>
      </PhotosContainer>
    </WindowFrame>
  );
};

export default Photos; 