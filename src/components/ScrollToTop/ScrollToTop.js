import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: ${props => (props.show ? 'block' : 'none')};
  width: 50px;
  height: 50px;
  font-size: 25px;
  font-weight: bold;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  color: #4b2a99;
  border-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: scale 300ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollButton show={showScrollButton} onClick={scrollToTop}>
      <span> &#8679;</span>
    </ScrollButton>
  );
};
