import { createTheme } from '@mui/material/styles';
import { red, green, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient( 320deg, hsl(0deg 0% 100%) 0%, hsl(240deg 54% 96%) 26%, hsl(240deg 55% 92%) 38%, hsl(240deg 56% 88%) 49%, hsl(240deg 57% 84%) 59%, hsl(240deg 59% 79%) 69%, hsl(239deg 60% 73%) 81%, hsl(239deg 62% 67%) 100% )`,
          backgroundAttachment: `fixed`
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#079A7B',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    text: {
      card: green[50]
    },
    background: {
      default: `linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)`,
	  padding: '20px',
	  margin: 0,
	  minHeight: '100vh'
    },
  },
});

export default theme;
