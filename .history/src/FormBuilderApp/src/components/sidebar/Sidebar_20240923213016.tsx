import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { SidebarItem } from '../../pages/formTypes';
import { useDraggable } from '@dnd-kit/core';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import PasswordIcon from '@mui/icons-material/Password';
import EmailIcon from '@mui/icons-material/Email';
import CreateIcon from '@mui/icons-material/Create';
import NumbersIcon from '@mui/icons-material/Numbers';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CheckBox, FormatColorText, ArrowDropDownCircle, RadioButtonChecked, PhoneAndroid, InsertPageBreak, HMobiledata, SmartButton } from '@mui/icons-material';

// Sidebar item list
const sideBarItems: SidebarItem[] = [
  { text: "Text Field", icon: <TextFieldsIcon /> },
  { text: "Password Field", icon: <PasswordIcon /> },
  { text: "Email Field", icon: <EmailIcon /> },
  { text: "Text Input", icon: <CreateIcon /> },
  { text: "Number Input", icon: <NumbersIcon /> },
  { text: "File Upload", icon: <CloudUploadIcon /> },
  { text: "Paragraph", icon: <FormatColorText /> },
  { text: "Checkbox", icon: <CheckBox /> },
  { text: "Radio Button", icon: <RadioButtonChecked /> },
  { text: "Header", icon: <HMobiledata /> },
  { text: "Phone Input", icon: <PhoneAndroid /> },
  { text: "Dropdown", icon: <ArrowDropDownCircle /> },
  { text: "Page Break", icon: <InsertPageBreak /> },
  { text: "Button", icon: <SmartButton /> },
];

// Draggable item component
const DraggableItem: React.FC<{ id: string, text: string, icon: React.ReactNode }> = ({ id, text, icon }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: `translate3d(${transform?.x || 0}px, ${transform?.y || 0}px, 0)`,
    border: '1px solid #ccc',
    marginBottom: '8px',
    cursor: 'grab',
  };

  return (
    <ListItem disablePadding ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText>{text}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

// Sidebar component
const FormSidebar: React.FC = () => {
  return (
    <Box zIndex={1} flex={1} bgcolor="white" height={"100%"} sx={{ mb: 2, height: 700,  }}>
      <List sx={{height : "100%", overflowY : "auto"}}>
        {sideBarItems.map((item, idx) => (
          <DraggableItem key={idx} id={`item-${idx}`} icon={item.icon} text={item.text} />
        ))}
      </List>
    </Box>
  );
};

export default FormSidebar;
