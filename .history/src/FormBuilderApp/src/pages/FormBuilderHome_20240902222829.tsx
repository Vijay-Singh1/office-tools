import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const FormBuilderHome = () => {
  return (
    <Box width={"100%"}>
        <Outlet />
        </Box>
  )
}

export default FormBuilderHome
