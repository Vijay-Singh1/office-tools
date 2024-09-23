import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FormBuilderHome = () => {
  return (
    <Box border={"1px solid red"} flex ={1}  display={"flex"} alignItems={"center"} justifyContent={"center"} width = "100%" >
    <Link to={"/form-builder/Create-Form"}> <Button variant="contained">Create Form</Button></Link>
    </Box>
  )
}

export default FormBuilderHome
