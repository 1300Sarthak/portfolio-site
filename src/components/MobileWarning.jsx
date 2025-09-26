import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const WarningContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 59, 48, 0.95);
  color: white;
  padding: 12px 20px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 500;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const warningVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  exit: { y: -100, opacity: 0, transition: { duration: 0.2 } }
};

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <AnimatePresence>
      <WarningContainer
        variants={warningVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        ⚠️ This site is designed for laptop/desktop screens. Mobile version coming soon!
      </WarningContainer>
    </AnimatePresence>
  );
};

export default MobileWarning; 