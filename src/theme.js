import { createTheme } from '@mui/material/styles';
import { red, green } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
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
      primary: green[400]
    },
    background: {
      default: '#F5F5F5',
	  padding: '20px',
	  margin: 0,
	  minHeight: '100vh'
    },
  },
});

export default theme;
