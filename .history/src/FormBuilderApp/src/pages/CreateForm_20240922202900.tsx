
import Box from '@mui/material/Box';
import React from 'react'
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import CenterComponent from '../components/centerComponent/centerComponent';
import RightBar from '../components/RightBar/RightBar';



const CreateForm : React.FC = () => {
  return (
    <Box  border={"1px solid green"} flex ={1} sx={{
      mb: 2,
      height: "100%",
      overflow: "hidden",
      // overflowY: "scroll",
     // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    }}  >
      <Stack direction="row" spacing={4}  justifyContent={"space-between"} sx={{ height: '100%' }}  >
      <FormSidebar/>
      <CenterComponent/>
      <RightBar/>
</Stack>
    </Box>
  )
}

export default CreateForm
