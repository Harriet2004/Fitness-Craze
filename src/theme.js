import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    ochre: {
      main: '#FFD54F',   // Button background color
      light: '#E9DB5D',
      dark: '#A29415',   
      contrastText: '#242105'  
    },
  },
});

export default theme;
