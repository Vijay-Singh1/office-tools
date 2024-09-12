import { Box } from '@mui/material'
import React from 'react'
import FormSidebar from '../sidebar/Sidebar'

const CenterComponent = () => {
  return (
    <Box flex={4}>
      <FormSidebar items = {sideBarItem}/>
    </Box >
  )
}

export default CenterComponent
