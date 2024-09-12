import { Box, Button } from '@mui/material'
import React from 'react'

const FormBuilderHome = () => {
  return (
    <Box flex ={1} bgcolor={"lightgray"} display={"flex"} alignItems={"center"} justifyContent={"center"} width = "100%" minHeight="calc(100vh - 60px)">
     <Button variant="contained">Create Form</Button>
    </Box>
  )
}

export default FormBuilderHome
