import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

const ScrollbarContainer = styled(Box)({
  position: 'fixed',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '4px',
  height: '20%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '2px',
  zIndex: 1000,
});

const ScrollbarThumb = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  width: '100%',
  height: '30%',
  backgroundColor: theme.palette.primary.light,
  borderRadius: '2px',
  transition: 'top 0.1s ease-out',
}));

const CustomScrollbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollPosition(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollbarContainer>
      <ScrollbarThumb sx={{ top: `${scrollPosition}%` }} />
    </ScrollbarContainer>
  );
};

export default CustomScrollbar; 