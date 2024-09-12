import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react'
import { Stack } from '@mui/material';
import FormSidebar from '../components/sidebar/Sidebar';
import { Home } from '@mui/icons-material';
import CenterComponent from '../components/centerComponent/centerComponent';


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
    <Box border={"1px solid red"} flex ={1} bgcolor={"lightgray"}   minHeight="calc(100vh - 60px)">
      <Stack direction="row" spacing={2}  justifyContent={"space-between"}>
      <FormSidebar items = {sideBarItem}/>
      <CenterComponent/>
      <FormSidebar items = {sideBarItem}/>
</Stack>
    </Box>
  )
}

export default CreateForm
