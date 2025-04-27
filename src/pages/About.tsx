import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
    'Material UI', 'Node.js', 'Git', 'Responsive Design'
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        About Me
      </Typography>
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Who I Am
        </Typography>
        <Typography paragraph>
          I am a passionate web developer with a strong foundation in modern web technologies.
          I love creating beautiful and functional web applications that provide great user experiences.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill) => (
            <Grid item xs={6} sm={4} md={3} key={skill}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  textAlign: 'center',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s',
                  },
                }}
              >
                <Typography>{skill}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Experience
        </Typography>
        <Typography paragraph>
          [Add your experience details here]
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 