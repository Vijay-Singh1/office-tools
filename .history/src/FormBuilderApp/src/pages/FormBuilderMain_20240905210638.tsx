import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../../components/common/sidebar/Sidebar'

const FormBuilderHome = () => {
  return (
    <Box width={"100%"}>
      <Stack direction="row" spacing={2}>
        <Sidebar/>
        <Outlet />
        </Stack>
        </Box>
  )
}

export default FormBuilderHome
