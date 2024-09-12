import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FormBuilderHome = () => {
  return (
    <Box flex ={1} bgcolor={"lightgray"} display={"flex"} alignItems={"center"} justifyContent={"center"} width = "100%" minHeight="calc(100vh - 60px)">
    <Link to={"/form-builder/Create-Form"}> <Button variant="contained">Create Form</Button></Link>
    </Box>
  )
}

export default FormBuilderHome
