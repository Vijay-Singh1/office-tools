


import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio } from '@mui/material'
import React from 'react'
import { ArrowDropDownCircle, CheckBox, FormatColorText, HMobiledata, Home, InsertPageBreak, PhoneAndroid, RadioButtonChecked, SmartButton } from '@mui/icons-material';
import { SidebarItem } from '../../pages/formTypes';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';
import NumbersIcon from '@mui/icons-material/Numbers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const sideBarItem :SidebarItem[] = [
  {
    text :"Text Field",
    icon :<TextFieldsIcon/>
  },
  {
    text :"Password Field",
    icon :<PasswordIcon/>
  },
  {
    text :"Email Field",
    icon :<EmailIcon/>
  },
  {
    text :"Text Input",
    icon :<CreateIcon/>
  },
  {
    text :"Number Input",
    icon :<NumbersIcon/>
  },
  {
    text :"File Upload",
    icon :<CloudUploadIcon/>
  },
  {
    text :"Paragraph",
    icon :<FormatColorText/>
  },
  {
    text :"Checkbox",
    icon :<CheckBox/>
  },
  {
    text :"Radio Button",
    icon :<RadioButtonChecked/>
  },
  {
    text :"Header",
    icon :<HMobiledata/>
  },
  {
    text :"Phone Input",
    icon :<PhoneAndroid/>
  },
  {
    text :"Dropdown",
    icon :<ArrowDropDownCircle/>
  },
  {
    text :"Page Break",
    icon :<InsertPageBreak/>
  },
  {
    text :"Button",
    icon :<SmartButton/>
  },
]

const FormSidebar:React.FC<SidebarItem> = () => {
  return (
    <Box bgcolor="lightBlue" flex={1} overflowY="scroll">
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

