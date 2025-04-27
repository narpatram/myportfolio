import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Contact Me
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom>
              Send me a message
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Connect with me
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                href="https://github.com/yourusername"
                target="_blank"
                fullWidth
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                fullWidth
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<Twitter />}
                href="https://twitter.com/yourusername"
                target="_blank"
                fullWidth
              >
                Twitter
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 