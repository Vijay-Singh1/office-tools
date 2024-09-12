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
    gap: theme.spacing(2)
}))

const StyledNavLink = styled(NavLink)(({theme})=>({
    width : "40%",
    color : theme.palette.primary.contrastText,
    textDecoration : "none",
    gap : 2
}))

const Appbar = () => {
  return (
    <AppBar>
        <StyledToolBar>
        <Typography sx={{display : {sm : "block", xs : "none"}}}>Office Tools</Typography>
            <HomeRepairServiceIcon sx={{display : {sm : "none", xs : "block"}}}/>
            <NavItems>
            <StyledNavLink to="/home">Home</StyledNavLink>
            <StyledNavLink to="/form-builder">Form Builder</StyledNavLink>
            <StyledNavLink to="/Docs-editor">Image Editor</StyledNavLink>
            <StyledNavLink to="/docs-editor">Docs Editor</StyledNavLink>
        </NavItems>
        </StyledToolBar>
        
    </AppBar>
  )
}

export default Appbar
