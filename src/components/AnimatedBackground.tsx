import { Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const AnimatedBox = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: `${gradientAnimation} 15s ease infinite`,
});

const AnimatedBackground = () => {
  return <AnimatedBox />;
};

export default AnimatedBackground; 