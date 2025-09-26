import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const BannerContainer = styled(motion.div)`
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 9999;
  min-width: 370px;
  max-width: 420px;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  border-radius: 18px;
  display: flex;
  align-items: flex-start;
  padding: 18px 24px 18px 18px;
  gap: 16px;
  border: 1px solid rgba(200,200,200,0.25);
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(0,0,0,0.08);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.18s;
  z-index: 2;
  &:hover {
    background: #eee;
    color: #222;
  }
`;

const BannerImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
`;

const BannerText = styled.div`
  color: #222;
  font-size: 1.08rem;
  font-weight: 500;
  line-height: 1.4;
`;

const bannerVariants = {
  hidden: { opacity: 0, x: 120 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 320, damping: 30, duration: 0.5 } },
  exit: { opacity: 0, x: 120, transition: { duration: 0.3 } },
};

const NotificationBanner = ({
  show = true,
  image = '/profile.jpg',
  message = "Hello there! My name is Sarthak, welcome to my site. Make sure to look around, and use the Text Message feature to get more detailed information about me.",
  duration = 15000,
  onClose
}) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {visible && (
        <BannerContainer
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CloseButton onClick={handleClose} aria-label="Close notification">×</CloseButton>
          <BannerImage src={image} alt="Notification" />
          <BannerText>{message}</BannerText>
        </BannerContainer>
      )}
    </AnimatePresence>
  );
};

export default NotificationBanner; 