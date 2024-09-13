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
    padding: '8px',
    border: '1px solid #ccc',
    marginBottom: '8px',
    cursor: 'grab',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <ListItem disablePadding >
          <ListItemButton  component = "a" href='/form-builder'>         
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText >{text}</ListItemText>
            
          </ListItemButton>
        </ListItem>
    </div>
  );
};


const FormSidebar:React.FC<SidebarItem> = () => {
  return (
    <Box flex={1} overflowY="scroll" bgcolor = "white">
      <List>
      {sideBarItem?.map((item, idx) =>(
        <Draggable key={idx}  icon = {item.icon}  text  = {item.text} id={idx} label="Input Field" />
      ))}
      </List>
    </Box>
  )
}

export default FormSidebar

