import { Typography, Box } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { FaChevronDown } from 'react-icons/fa';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: 'center',
  maxWidth: '800px',
  fontSize: "18px"
})) as typeof Typography;

const NameTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  display: 'inline',
  fontSize: '2rem',
})) as typeof Typography;

const TechWord = styled('span')({
  fontWeight: 'normal',
});

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ff7858 }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const WavingHand = styled('span')({
  display: 'inline-block',
  animation: `${waveAnimation} 2.5s infinite`,
  transformOrigin: '70% 70%',
  marginLeft: '10px',
});

const TypingContainer = styled(Box)({
  display: 'inline-block',
  overflow: 'hidden',
  borderRight: '.15em solid #ff7858',
  whiteSpace: 'nowrap',
  margin: '0 auto',
  letterSpacing: '.15em',
  animation: `${typing} 3.5s steps(40, end), ${blinkCaret} .75s step-end infinite`,
});

const ScrollIndicator = styled(Box)({
  position: 'absolute',
  bottom: '100px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
  animation: `${bounce} 2s infinite`,
  '& svg': {
    color: 'white',
    fontSize: '2rem',
    opacity: 0.7,
  },
  '&:hover': {
    '& svg': {
      opacity: 1,
    },
  },
});

const Home = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: 'relative', minHeight: '80vh', marginTop: "20vh" }}>
      <StyledTypography variant="h6" gutterBottom>
        Hi<WavingHand>👋</WavingHand> I'm
      </StyledTypography>
      <StyledTypography variant="h5" component="h1" gutterBottom>
        <TypingContainer><NameTypography>Narpat Kalwaniya</NameTypography></TypingContainer>
      </StyledTypography>
      <StyledTypography gutterBottom>
        A Frontend Developer with core expertise in UI development using{' '}
        <TechWord style={{ color: '#61DAFB' }}>React</TechWord>,{' '}
        <TechWord style={{ color: '#339933' }}>Node.js</TechWord>,{' '}
        <TechWord style={{ color: '#3178C6' }}>TypeScript</TechWord> and{' '}
        <TechWord style={{ color: '#F7DF1E' }}>JavaScript</TechWord>. I'm also passionate about creating amazing web experiences by combining backend technologies and cloud services and many more..
      </StyledTypography>
      <ScrollIndicator onClick={scrollToSkills}>
        <FaChevronDown />
      </ScrollIndicator>
    </Box>
  );
};

export default Home; 