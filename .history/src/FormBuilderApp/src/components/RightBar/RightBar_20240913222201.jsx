import { Box } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box flex={1} bgcolor = "white" width="250px" 
    overflowY="auto" 
    bgcolor="white"
    border="1px solid red"
    sx={{ height: '100%' }}>
      Right bar
    </Box>
  )
}

export default RightBar
