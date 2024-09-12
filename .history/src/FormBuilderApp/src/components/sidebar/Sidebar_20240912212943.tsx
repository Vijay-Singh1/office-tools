


import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Home } from '@mui/icons-material';
import { SidebarItem } from '../../pages/formTypes';
import TextFieldsIcon from '@mui/icons-material/TextFields';
const sideBarItem :SidebarItem[] = [
  {
    text :"Text Field",
    icon :<TextFieldsIcon/>
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

const FormSidebar:React.FC<SidebarItem> = () => {
  return (
    <Box bgcolor="lightBlue" flex={1}>
      <List>
      {sideBarItem?.map((item, idx) =>(
        <ListItem disablePadding key={idx}>
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

