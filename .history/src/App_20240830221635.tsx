

import './App.css'
import Index from "./FormBuilderApp/src/index.js"

import { Button, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Welcome to My MUI Themed App
      </Typography>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="contained" color="secondary" sx={{ marginLeft: 2 }}>
        Secondary Button
      </Button>
    </Container>
  );
};


export default App
