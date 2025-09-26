import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_BAR_HEIGHT = 24;
const DOCK_HEIGHT = 70;

const WindowContainer = styled(Rnd)`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  z-index: 100;
`;

const TitleBar = styled.div`
  background: rgba(240, 240, 240, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: move;
  height: 28px;
  user-select: none;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const WindowButton = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  transition: all 0.2s ease;

  &:hover::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const CloseButton = styled(WindowButton)`
  background: #ff5f57;
  &:hover {
    background: #ff3b30;
  }
`;

const MinimizeButton = styled(WindowButton)`
  background: #ffbd2e;
  &:hover {
    background: #ffb400;
  }
`;

const MaximizeButton = styled(WindowButton)`
  background: #28c940;
  &:hover {
    background: #24b33b;
  }
`;

const WindowTitle = styled.h3`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #333;
  flex: 1;
  text-align: center;
  user-select: none;
`;

const WindowContent = styled.div`
  padding: 20px;
  height: calc(100% - 29px);
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

const windowVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 30, duration: 0.32 } },
  exit: { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.18 } },
};

const WindowFrame = ({
  title,
  children,
  isOpen,
  isMinimized = false,
  isMaximized = false,
  onClose,
  onMinimize,
  onMaximize,
  onRestore,
  defaultPosition = { x: 100, y: 100 },
  defaultSize = { width: 600, height: 400 },
}) => {
  const parentRef = useRef(null);
  if (!isOpen || isMinimized) return null;

  // Calculate bounds for react-rnd
  const bounds = {
    top: MENU_BAR_HEIGHT + 8,
    left: 0,
    right: 0,
    bottom: DOCK_HEIGHT + 8,
  };

  return (
    <AnimatePresence>
      <motion.div
        key={title}
        variants={windowVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ position: 'absolute', zIndex: 100 }}
      >
        <WindowContainer
          default={{
            x: defaultPosition.x,
            y: defaultPosition.y,
            width: defaultSize.width,
            height: defaultSize.height,
          }}
          minWidth={320}
          minHeight={180}
          bounds="window"
          enableResizing={{
            top: true,
            right: true,
            bottom: true,
            left: true,
            topRight: true,
            bottomRight: true,
            bottomLeft: true,
            topLeft: true,
          }}
          disableDragging={false}
          dragHandleClassName="mac-title-bar"
          size={isMaximized ? { width: '100vw', height: `calc(100vh - ${MENU_BAR_HEIGHT + DOCK_HEIGHT + 16}px)` } : undefined}
          position={isMaximized ? { x: 0, y: MENU_BAR_HEIGHT + 8 } : undefined}
          dragGrid={[1, 1]}
          resizeGrid={[1, 1]}
          onDragStop={(e, d) => {
            // Prevent dragging above menu bar or below dock
            if (d.y < MENU_BAR_HEIGHT + 8) d.y = MENU_BAR_HEIGHT + 8;
            if (d.y + d.height > window.innerHeight - DOCK_HEIGHT - 8) d.y = window.innerHeight - DOCK_HEIGHT - 8 - d.height;
          }}
        >
          <TitleBar className="mac-title-bar">
            <WindowControls>
              <CloseButton onClick={onClose} />
              <MinimizeButton onClick={onMinimize} />
              <MaximizeButton onClick={isMaximized ? onRestore : onMaximize} />
            </WindowControls>
            <WindowTitle>{title}</WindowTitle>
            <div style={{ width: 68 }} />
          </TitleBar>
          <WindowContent>
            {children}
          </WindowContent>
        </WindowContainer>
      </motion.div>
    </AnimatePresence>
  );
};

export default WindowFrame;
