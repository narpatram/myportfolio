import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled'
})<{ scrolled: boolean }>(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  margin: '40px',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'all 0.3s ease-in-out',
  width: 'calc(100% - 80px)',
}));

const NavButton = styled(Button)({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="fixed" scrolled={scrolled}>
      <Toolbar>
        <AnimatedLogo />
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
          <NavButton onClick={() => scrollToSection('about')}>Home</NavButton>
          <NavButton onClick={() => scrollToSection('skills')}>Skills</NavButton>
          <NavButton onClick={() => scrollToSection('experience')}>Experience</NavButton>
          <NavButton onClick={() => scrollToSection('projects')}>Projects</NavButton>
          <NavButton onClick={() => scrollToSection('contact')}>Contact</NavButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;