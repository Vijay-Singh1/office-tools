import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import React from 'react'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const CreateForm : React.FC = () => {
  return (
<Grid container spacing={3}>
  <Grid item xs="auto">
    <Item>variable width content</Item>
  </Grid>
  <Grid item xs={6}>
    <Item>xs=6</Item>
  </Grid>
  <Grid item xs>
    <Item>xs</Item>
  </Grid>
</Grid>
  )
}

export default CreateForm
