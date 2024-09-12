import { Box } from '@mui/material'
import React from 'react'
import FormSidebar from '../sidebar/Sidebar'

const centerComponent = () => {
  return (
    <Box flex={4}>
      <FormSidebar items = {sideBarItem}/>
    </Box >
  )
}

export default centerComponent
