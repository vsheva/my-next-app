import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff00',
    },
  },
  components:{
    MuiCssBaseline:{
      styleOverrides:{
        body:{height: '100vh'}
      },
    },
  },
});
