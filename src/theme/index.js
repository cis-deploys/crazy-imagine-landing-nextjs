import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#193174',
    },
    secondary: {
      main: '#27AAE1',
    },
  },
  typography: {
    fontFamily: 'Roboto, Lato, Poppins, Hind, Open Sans' ["400"],
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});