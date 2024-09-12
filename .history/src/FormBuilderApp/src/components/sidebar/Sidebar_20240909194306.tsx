


import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { SidebarProps } from '../../../../types';

const FormSidebar:React.FC<SidebarProps> = ({items  }) => {
  return (
    <Box bgcolor="lightBlue" flex={2}>
      <List>
      {items?.map((item) =>(
        <ListItem disablePadding>
          <ListItemButton component = "a" href='/form-builder'>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText >{item.text}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    </Box>
  )
}

export default FormSidebar

