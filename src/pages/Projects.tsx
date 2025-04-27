import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. Explain what technologies you used and what problems it solves.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Highlight the key features and your role in development.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'Details about your third project. Mention any challenges you overcame and lessons learned.',
      image: 'https://via.placeholder.com/300x200',
      link: '#',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        My Projects
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project) => (
          <Grid item key={project.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  transition: 'transform 0.3s',
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.link} target="_blank">
                  View Project
                </Button>
                <Button size="small" color="primary">
                  Source Code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 