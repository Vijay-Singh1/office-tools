import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'



const FormBuilderMain = () => {
  return (
      <Box width={"100%"} minHeight  = {"100%"}>
        <Stack direction="row" spacing={2}>
            <Outlet />
          </Stack>
          </Box>
  )
}

export default FormBuilderMain
