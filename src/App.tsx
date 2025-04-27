import { Container, Box, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from './components/Navbar';
import FireflyBackground from './components/FireflyBackground';
import CustomScrollbar from './components/CustomScrollbar';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import { theme } from './theme';

const Section = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4),
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FireflyBackground />
      <Navbar />
      <CustomScrollbar />
      <Container maxWidth="lg" >
        <Section id="about">
          <Home />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <Experience />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>
      </Container>
    </ThemeProvider>
  );
};

export default App; 