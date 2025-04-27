import { Box, Grid, Typography, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import SectionHeader from '../components/SectionHeader';
import { SiGithub, SiVercel } from 'react-icons/si';

const ProjectCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  padding: '24px',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    '& .project-image': {
      transform: 'scale(1.05)',
    },
  },
}));

const ProjectImage = styled(Box)({
  width: '100%',
  height: '180px',
  borderRadius: '8px',
  overflow: 'hidden',
  marginTop: "20px",
  marginBottom: '16px',
  position: 'relative',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
});

const ProjectLinks = styled(Box)({
  position: 'absolute',
  top: '8px',
  right: '8px',
  display: 'flex',
  gap: '8px',
  zIndex: 2,
  padding: '4px 8px',
  borderRadius: '4px',
});

const LinkIcon = styled(Box)({
  color: 'white',
  fontSize: '1.5rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.2)',
    color: '#61DAFB',
  },
});

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  margin: '4px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const Projects = () => {
  const projects = [
    {
      title: 'PrepMe.AI',
      description: 'Leading the development of a student-focused application using React and TypeScript for front-end, FastAPI for backend, and AWS infra for hosting & storage. The platform enables students to upload & curate content, interact with LLMs for personalized learning, and create & take custom assessments.',
      image: '/src/assets/prepme.png',
      github: 'https://github.com/narpatram/PrepMe.AI',
      live: 'https://ecommerce-demo.vercel.app',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Analytics Dashboard',
      description: 'Developed scalable, JSON-controlled data visualization components using React, MUI, and Recharts, leveraging Cube.js for efficient data querying',
      image: '/src/assets/analytics.png',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.vercel.app',
      technologies: ['React', 'Firebase', "Recharts", 'Redux', "Cube.Js"],
    },
    {
      title: 'Workflow Builder',
      description: 'Designed and Developed a workflow build application using ReactFlow with drag and drop functionalities',
      image: '/src/assets/workflow.png',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://portfolio-demo.vercel.app',
      technologies: ['React', 'TypeScript', 'Recharts', 'ReactFlow'],
    },
  ];

  return (
    <>
      <SectionHeader title="My Projects" />
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <ProjectCard>
            <ProjectLinks>
                  <LinkIcon onClick={() => window.open(project.github, '_blank')}>
                    <SiGithub />
                  </LinkIcon>
                  <LinkIcon onClick={() => window.open(project.live, '_blank')}>
                    <SiVercel />
                  </LinkIcon>
                </ProjectLinks>
              <ProjectImage className="project-image">

                <img src={project.image} alt={project.title} />
                
              </ProjectImage>
              <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 2 }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech, techIndex) => (
                  <TechChip key={techIndex} label={tech} size="small" />
                ))}
              </Box>
            </ProjectCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects; 