import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';



const LogoContainer = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '1.5rem',
  position: 'relative',
  display: 'inline-block',
  
}));

const AnimatedLogo = () => {
  return (
    <LogoContainer>
      NRK
    </LogoContainer>
  );
};

export default AnimatedLogo; 