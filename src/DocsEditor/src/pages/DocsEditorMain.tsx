import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from '../../../components/common/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
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
    {
      text :"Docs",
      icon :<Home/>
    },
  ]
const DocsEditorMain = () => {
  return (
    <Box width={"100%"}>
        <Stack direction="row" spacing={2}>
          <Sidebar items ={sideBarItem}/>
            <Outlet />
          </Stack>
          </Box>
  )
}

export default DocsEditorMain
