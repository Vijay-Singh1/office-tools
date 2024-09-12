import { Box } from '@mui/material'
import React from 'react'
import FormSidebar from '../sidebar/Sidebar'
import { Home } from '@mui/icons-material'

const sideBarItem = [
    {
      text :"Docs",
      icon :<Home/>
    },
    {
      text :"Docs",
      icon :<Home/>
    },
    {
      text :"Docs",
      icon :<Home/>
    },
  ]
const CenterComponent = () => {
  return (
    <Box flex={1}>
      <FormSidebar items = {sideBarItem}/>
    </Box >
  )
}

export default CenterComponent
