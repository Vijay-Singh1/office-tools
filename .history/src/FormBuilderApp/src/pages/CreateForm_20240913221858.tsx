
import Box from '@mui/material/Box';
import React from 'react'
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import CenterComponent from '../components/centerComponent/centerComponent';
import RightBar from '../components/RightBar/RightBar';



const CreateForm : React.FC = () => {
  return (
    <Box  flex ={1}    >
      <Stack direction="row" spacing={4}  justifyContent={"space-between"} sx={{ height: 'calc(100vh - 60px)' }}>
      <FormSidebar/>
      <CenterComponent/>
      <RightBar/>
</Stack>
    </Box>
  )
}

export default CreateForm
