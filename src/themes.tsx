import { ThemeOptions } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#666eff',
    },
    secondary: {
      main: '#ff666e',
    },
    background: {
      default: '#242424',
      paper: '#2e2e2e',
    },
    error: {
      main: '#f50057',
    },
    warning: {
      main: '#fff766',
    },
    info: {
      main: '#66baff',
    },
    success: {
      main: '#f766ff',
    },
  },
};

export default themeOptions;