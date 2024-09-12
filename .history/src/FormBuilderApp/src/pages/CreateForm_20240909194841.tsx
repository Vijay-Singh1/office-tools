import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react'
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import { Home } from '@mui/icons-material';
import CenterComponent from '../components/centerComponent/centerComponent';
import RightBar from '../components/RightBar/RightBar';



const CreateForm : React.FC = () => {
  return (
    <Box  flex ={1} bgcolor={"lightgray"}   >
      <Stack direction="row" spacing={2}  justifyContent={"space-between"} minHeight="calc(100vh - 60px)">
      <FormSidebar />
      <CenterComponent/>
      <RightBar/>
</Stack>
    </Box>
  )
}

export default CreateForm
