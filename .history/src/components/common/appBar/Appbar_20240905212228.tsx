import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { NavLink } from 'react-router-dom';

const StyledToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
})

const NavItems = styled(Box)(({theme}) =>({
    color : theme.palette.primary.contrastText,
    display: "flex",
    // border : "1px solid red",
    gap: theme.spacing(5)
}))

const StyledNavLink = styled(NavLink)(({theme})=>({
    width : "40%",
    color : theme.palette.primary.contrastText,
    textDecoration : "none",
    
   
}))

const Appbar = () => {
  return (
    <AppBar position='sticky' flex ={1} >
        <StyledToolBar>
        <Typography variant='subtitle1' sx={{display : {sm : "block", xs : "none"}}}>OFFICE TOOLS</Typography>
            <HomeRepairServiceIcon sx={{display : {sm : "none", xs : "block"}}}/>
            <NavItems>
            <StyledNavLink to="/home"><Typography variant='subtitle1'>HOME</Typography> </StyledNavLink>
            <StyledNavLink to="/form-builder"><Typography variant='subtitle1'>FORMS</Typography></StyledNavLink>
            <StyledNavLink to="/Docs-editor"><Typography variant='subtitle1'>IMAGEEDITOR</Typography></StyledNavLink>
            <StyledNavLink to="/docs-editor"><Typography variant='subtitle1'>TEXTEDITOR</Typography></StyledNavLink>
        </NavItems>
        </StyledToolBar>
        
    </AppBar>
  )
}

export default Appbar
