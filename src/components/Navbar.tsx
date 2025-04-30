import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AnimatedLogo from './AnimatedLogo';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'scrolled'
})<{ scrolled: boolean }>(({ scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  margin: '40px',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'all 0.3s ease-in-out',
  width: 'calc(100% - 80px)',
  '@media (max-width: 600px)': {
    margin: '20px',
    width: 'calc(100% - 40px)',
  },
}));

const NavButton = styled(Button)({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(10px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    width: '250px',
  },
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      setDrawerOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', sectionId: 'about' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Experience', sectionId: 'experience' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  const renderNavItems = () => (
    <>
      {navItems.map((item) => (
        <NavButton key={item.sectionId} onClick={() => scrollToSection(item.sectionId)}>
          {item.label}
        </NavButton>
      ))}
    </>
  );

  return (
    <StyledAppBar position="fixed" scrolled={scrolled}>
      <Toolbar>
        <AnimatedLogo />
        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx = {{
                  color: "#8d8d8d"
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <StyledDrawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <List sx={{ mt: 8 }}>
                {navItems.map((item) => (
                  <ListItem key={item.sectionId} sx={{ justifyContent: 'center' }}>
                    <NavButton onClick={() => scrollToSection(item.sectionId)}>
                      {item.label}
                    </NavButton>
                  </ListItem>
                ))}
              </List>
            </StyledDrawer>
          </>
        ) : (
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
            {renderNavItems()}
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;