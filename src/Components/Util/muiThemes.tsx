import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: {
      background: {
        main: string;
        secondary1: string;
      };
    };
  }
  // to create custom configurations using 'createTheme'
  interface ThemeOptions {
    customPalette?: {
      background?: {
        main?: string;
        secondary1?: string;
      };
    };
  }
}

const theme = createTheme({
  customPalette: {
    background: {
      main: 'rgba(25,25,25,1)',
      secondary1: 'rgba(55, 55, 55, 0.7)',
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px',
          height: '2vw',
          width: '100%'
        }
      }
    }
  }
});

export default theme;
