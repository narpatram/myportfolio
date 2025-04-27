import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          I'm a passionate developer creating amazing web experiences
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/projects')}
          >
            View My Work
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/contact')}
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 