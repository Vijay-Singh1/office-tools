import { Home } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/common/sidebar/Sidebar'


const sideBarItem = [
    {
      text :"Home",
      icon :<Home/>
    },
    {
      text :"Home",
      icon :<Home/>
    },
    {
      text :"Home",
      icon :<Home/>
    },
    {
      text :"Home",
      icon :<Home/>
    },
  ]
const ImageEditorMain = () => {
  return (
    <Box width={"100%"}>
      <Stack direction="row" spacing={2}>
        <Sidebar items ={sideBarItem}/>
          <Outlet />
        </Stack>
        </Box>
  )
}

export default ImageEditorMain
