import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#61DAFB', // React blue
      light: '#8EE7FB',
      dark: '#4398B0',
    },
    secondary: {
      main: '#F7DF1E', // JavaScript yellow
      light: '#F9E866',
      dark: '#AC9B15',
    },
    accent: {
      main: '#3178C6', // TypeScript blue
      light: '#5A9AD6',
      dark: '#22548C',
    },
    highlight: {
      main: '#47A248', // MongoDB green
      light: '#6BB46C',
      dark: '#327233',
    },
    background: {
      default: '#000000',
      paper: 'rgba(114, 168, 244, 0.1)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    git : {
        main: '#ff7858',
    }
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
        },
      },
    },
  },
});