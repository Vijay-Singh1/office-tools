import { Box, Stack } from '@mui/material'
import React from 'react'
import FormSidebar from '../sidebar/Sidebar'
import { Home } from '@mui/icons-material'


const CenterComponent = () => {
  return (
    <Box flex={4} bgcolor={"green"}>
      <Stack direction={'column'} spacing={2}>
        <Box bgcolor={"blue"} flex ={1} display={"flex"} justifyContent={"center"} >Header</Box>
        <Box>Body</Box>
      </Stack>
    </Box >
  )
}

export default CenterComponent
