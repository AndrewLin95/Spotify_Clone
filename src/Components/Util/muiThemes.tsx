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
          width: '100%',
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '15vw',
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          // change first color
          backgroundImage: `linear-gradient(rgba(255,255,255,0) 0px, rgba(0,0,0,1) 800px)`,
          // position: 'relative',
          // bottom: '250px',
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'rgba(220, 220, 220, 1)',
          borderBottom: "none",
          padding: '4px',
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: 'rgba(255,255,255,1)',
          padding: '0px',
          paddingTop: '0px',
          paddingBottom: '0px',
        },
        thumb: {
          display: 'none',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(55, 55, 55, 0.7)',
          color: '#eeeeee',
          height: '100%',
          width: '100%',
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          
        },
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(55, 55, 55, 0.7)',
          color: '#eeeeee',
        },
        selected: {
          backgroundColor: '#eeeeee',
          color: 'rgba(55, 55, 55, 0.7)',
        }
      }
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(55, 55, 55, 0.7)',
        }
      }
    }
  }
});

export default theme;
