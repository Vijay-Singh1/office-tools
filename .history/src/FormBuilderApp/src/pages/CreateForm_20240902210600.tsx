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

  )
}

export default CreateForm
