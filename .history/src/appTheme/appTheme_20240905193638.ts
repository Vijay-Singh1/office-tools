// src/theme/theme.js

import { createTheme } from '@mui/material/styles';
import { blue,  red, orange, green, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      light: blue[300], // Light shade for hover effects, etc.
      main: blue[600],  // Main primary color
      dark: blue[800],  // Dark shade for contrast
      contrastText: '#ffffff',
    },
    secondary: {
      light: blue[200], // Light blue as a secondary color
      main: blue[400],  // A mid-range blue for secondary actions
      dark: blue[700],  // Darker shade for emphasis
      contrastText: '#ffffff',
    },
    error: {
      main: red[500],
    },
    warning: {
      main: orange[500],
    },
    info: {
      main: blue[300],
    },
    success: {
      main: green[500],
    },
    background: {
      default: '#ffffff',
      paper: blue[50], // Very light blue background for paper components
    },
    text: {
      primary: grey[900],
      secondary: blue[800], // Dark blue text for secondary elements
    },
    action: {
      hover: blue[100], // Light blue on hover
      selected: blue[50], // Even lighter blue when an item is selected
      disabledBackground: blue[50], // Light blue background for disabled items
      disabled: grey[400], // Disabled text color
    },
    divider: blue[100], // Light blue for dividers and borders
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      color: blue[800], // Dark blue for headings
    },
    h2: {
      fontWeight: 700,
      color: blue[700], // Slightly lighter for sub-headings
    },
  },
  spacing :[0,2,4,6,8,10],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover': {
            backgroundColor: blue[700], // Darker blue on hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: blue[800], // Darker shade for AppBar
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: blue[50], // Very light blue for paper components
        },
      },
    },
    // Add more component customizations as needed
  },
});

export default theme;
