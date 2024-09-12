import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import React from 'react'
import { Stack } from '@mui/material';



const CreateForm : React.FC = () => {
  return (
    <Box border={"1px solid red"} flex ={1} bgcolor={"lightgray"} display={"flex"} alignItems={"center"} justifyContent={"center"} width = "100%" minHeight="calc(100vh - 60px)">
      <Stack direction="row" spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack>
    </Box>
  )
}

export default CreateForm
