import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'// Import Tailwind CSS
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from "./appTheme/appTheme.ts"
import AppRoutes from './routes.js';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppRoutes />
    </ThemeProvider>
  </StrictMode>,
)
