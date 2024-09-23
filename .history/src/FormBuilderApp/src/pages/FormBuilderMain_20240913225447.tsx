import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'



const FormBuilderMain = () => {
  return (
      <Box width={"100%"} sx={{height:"calc(100vh - 70px)"}}  >
        <Stack direction="row" spacing={2} sx={{height:"100%"}}>
            <Outlet />
          </Stack>
          </Box>
  )
}

export default FormBuilderMain
