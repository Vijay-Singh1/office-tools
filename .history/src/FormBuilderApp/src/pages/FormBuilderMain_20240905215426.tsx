import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/common/sidebar/Sidebar'
import { Home } from '@mui/icons-material'


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
const FormBuilderMain = () => {
  return (
    <Box width={"100%"}>
      <Stack direction="row" spacing={2}>
        <Sidebar sideBarItem ={sideBarItem}/>
          <Outlet />
        </Stack>
        </Box>
  )
}

export default FormBuilderMain
