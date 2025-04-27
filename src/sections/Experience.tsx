import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../components/SectionHeader';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: '100%',
    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    [theme.breakpoints.down('md')]: {
      left: '20px',
    },
  },
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  position: 'relative',
  width: 'calc(50% - 40px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      left: '-60px',
    },
    [theme.breakpoints.down('md')]: {
      left: '-40px',
    },
  },
  [theme.breakpoints.up('md')]: {
    '&:nth-of-type(odd)': {
      marginLeft: 'auto',
      '&::before': {
        left: 'auto',
        right: '-60px',
      },
    },
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 40px)',
    marginLeft: '40px',
  },
}));

const Experience = () => {
  const experiences = [
    {
      title: 'Lead Frontend Developer',
      company: 'Tiger Analytics',
      period: 'Jan 2025 - Present',
      description: 'Leading frontend development for enterprise applications. Implementing modern React patterns and optimizing performance.',
      technologies: ['React', 'AWS', 'CI/CD','TypeScript', 'Redux', 'Material-UI'],
    },
    {
      title: 'Senior Engineer',
      company: 'Tiger Analytics',
      period: 'Jan 2022 - Dec 2024',
      description: 'Developed and maintained multiple web applications. Collaborated with backend teams to implement new features.',
      technologies: ['React', 'JavaScript', 'CSS', 'REST APIs'],
    },
    {
      title: 'Analyst',
      company: 'Tiger Analytics',
      period: 'Jun 2022 - Dec 2022',
      description: 'Worked on various web projects, learning and implementing best practices in web development.',
      technologies: ['Python', 'Data Science', 'Machine Learning', 'SQL'],
    },
  ];

  return (
    <>
      <SectionHeader title="Professional Experience" />
      <TimelineContainer>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index}>
            <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
              {experience.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 1 }}>
              {experience.company}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', mb: 2 }}>
              {experience.period}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
              {experience.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {experience.technologies.map((tech, techIndex) => (
                <Typography
                  key={techIndex}
                  variant="caption"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                  }}
                >
                  {tech}
                </Typography>
              ))}
            </Box>
          </ExperienceCard>
        ))}
      </TimelineContainer>
    </>
  );
};

export default Experience; 