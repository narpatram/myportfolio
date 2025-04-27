import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
import { SiReact, SiJavascript, SiTypescript, SiPython, SiFastapi, SiNodedotjs, SiMongodb, SiPostgresql, SiDocker, SiGit } from 'react-icons/si';
import SectionHeader from '../components/SectionHeader';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SkillsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  overflow: 'hidden',
  position: 'relative',
}));

const SkillsWrapper = styled(Box)({
  display: 'flex',
  gap: '40px',
  animation: `${scrollAnimation} 30s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused',
  },
});

const SkillsDuplicate = styled(SkillsWrapper)({
  position: 'absolute',
  left: '100%',
  top: 0,
});

const SkillIcon = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '16px',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const IconWrapper = styled(Box)({
  fontSize: '2.5rem',
});

const Skills = () => {
  const skills = [
    { icon: <SiReact style={{ color: '#61DAFB' }} />, name: 'React' },
    { icon: <SiJavascript style={{ color: '#F7DF1E' }} />, name: 'JavaScript' },
    { icon: <SiTypescript style={{ color: '#3178C6' }} />, name: 'TypeScript' },
    { icon: <SiPython style={{ color: '#3776AB' }} />, name: 'Python' },
    { icon: <SiFastapi style={{ color: '#009688' }} />, name: 'FastAPI' },
    { icon: <SiNodedotjs style={{ color: '#339933' }} />, name: 'Node.js' },
    { icon: <SiMongodb style={{ color: '#47A248' }} />, name: 'MongoDB' },
    { icon: <SiPostgresql style={{ color: '#336791' }} />, name: 'PostgreSQL' },
    { icon: <SiDocker style={{ color: '#2496ED' }} />, name: 'Docker' },
    { icon: <SiGit style={{ color: '#F05032' }} />, name: 'Git' },
  ];

  return (
    <>
      <SectionHeader title="My Skills" />
      <SkillsContainer>
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <SkillsWrapper>
            {skills.map((skill, index) => (
              <SkillIcon key={index}>
                <IconWrapper>{skill.icon}</IconWrapper>
                <Box sx={{ color: 'white' }}>{skill.name}</Box>
              </SkillIcon>
            ))}
          </SkillsWrapper>
          <SkillsDuplicate>
            {skills.map((skill, index) => (
              <SkillIcon key={`duplicate-${index}`}>
                <IconWrapper>{skill.icon}</IconWrapper>
                <Box sx={{ color: 'white' }}>{skill.name}</Box>
              </SkillIcon>
            ))}
          </SkillsDuplicate>
        </Box>
      </SkillsContainer>
    </>
  );
};

export default Skills; 