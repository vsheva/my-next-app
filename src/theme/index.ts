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
        body:{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop:"70px",
          height: '100vh'
        }
      },
    },
  },
});
