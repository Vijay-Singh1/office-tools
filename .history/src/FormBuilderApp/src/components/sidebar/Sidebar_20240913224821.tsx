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
import {useDraggable} from '@dnd-kit/core';


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

const Draggable = ({ icon , text, id, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    // padding: '8px',
    // border: '1px solid #ccc',
    marginBottom: '8px',
    cursor: 'grab',
  };

  return (
  
      <ListItem disablePadding ref={setNodeRef} style={style} {...listeners} {...attributes} 
       >
          <ListItemButton  >         
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText >{text}</ListItemText>
            
          </ListItemButton>
        </ListItem>
   
  );
};


const FormSidebar:React.FC<SidebarItem> = () => {
  return (
    <Box 
    width="250px" 
    overflowY="auto" 
    bgcolor="white"
    height={"100%"}
    sx={{
      mb: 2,
      height: 700,
      overflow: "hidden",
      overflowY: "scroll",
     // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
    }} >
      <List>
      {sideBarItem?.map((item, idx) =>(
        <Draggable key={idx}  icon = {item.icon}  text  = {item.text} id={idx}  />
      ))}
      </List>
    </Box>
  )
}

export default FormSidebar

