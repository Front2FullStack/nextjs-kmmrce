import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#1D1D1D',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#3CD17F',
    },
    text: {
      primary : "#333333"
    }
  },
  typography: {
    fontFamily: 'yellixregular',
  }
});

export default theme;