import { Box, Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'



const FormBuilderMain = () => {
  return (
      <Box width={"100%"}>
        <Stack direction="row" spacing={2}>s
            <Outlet />
          </Stack>
          </Box>
  )
}

export default FormBuilderMain
