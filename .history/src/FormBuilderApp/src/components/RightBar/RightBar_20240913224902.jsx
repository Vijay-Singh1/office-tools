import { Box } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box flex={1}  width="250px" 
    overflowY="auto" 
    bgcolor="white"
    
    sx={{
      mb: 2,
      height: 700,
      overflow: "hidden",
      overflowY: "scroll",
     // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    }} >
      Right bar
    </Box>
  )
}

export default RightBar
