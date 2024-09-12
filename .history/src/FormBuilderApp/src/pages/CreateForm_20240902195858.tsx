import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const CreateForm : React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs= {3}>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs = {3}>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CreateForm
