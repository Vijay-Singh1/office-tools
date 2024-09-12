import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react'
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import { Home } from '@mui/icons-material';


const sideBarItem = [
  {
    text :"Docs",
    icon :<Home/>
  },
  {
    text :"Docs",
    icon :<Home/>
  },
  {
    text :"Docs",
    icon :<Home/>
  },
  {
    text :"Docs",
    icon :<Home/>
  },
]
const CreateForm : React.FC = () => {
  return (
    <Box border={"1px solid red"} flex ={1} bgcolor={"lightgray"} display={"flex"} alignItems={"center"} justifyContent={"center"} width = "100%" minHeight="calc(100vh - 60px)">
      <Stack direction="row" spacing={2}>
      <FormSidebar items = {sideBarItem}/>
      <FormSidebar items = {sideBarItem}/>
</Stack>
    </Box>
  )
}

export default CreateForm
