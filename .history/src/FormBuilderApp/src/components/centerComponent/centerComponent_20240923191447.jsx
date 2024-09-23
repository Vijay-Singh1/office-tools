import { Box, Stack } from '@mui/material'
import React from 'react'
import FormSidebar from '../sidebar/Sidebar'
import { Home } from '@mui/icons-material'
import { useDroppable } from '@dnd-kit/core'


const CenterComponent = ({props}) => {
console.log(props)
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };
  return (
    <Box ref={setNodeRef} style={style} flex={4} bgcolor={"white"} 
    sx={{
    
      height: 1000,
      overflow: "hidden",
      overflowY: "scroll",
     // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    }} >
      <Stack direction={'column'} spacing={6}>
        <Box bgcolor={"white"} flex ={1} display={"flex"} justifyContent={"center"} >Header</Box>
        <Box>Body</Box>
      </Stack>
    </Box >
  )
}

export default CenterComponent
