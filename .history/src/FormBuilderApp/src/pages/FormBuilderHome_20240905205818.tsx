import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/common/sidebar/Sidebar'

const FormBuilderHome = () => {
  return (
    <Box width={"100%"}>
      <Sidebar/>
        <Outlet />
        </Box>
  )
}

export default FormBuilderHome
