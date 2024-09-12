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
    gap: theme.spacing(3)
}))

const StyledNavLink = styled(NavLink)(({theme})=>({
    width : "40%",
    color : theme.palette.primary.contrastText,
    textDecoration : "none",
    margin : theme.spacing(2),
    fontSize :theme.
}))

const Appbar = () => {
  return (
    <AppBar>
        <StyledToolBar>
        <Typography sx={{display : {sm : "block", xs : "none"}}}>Office Tools</Typography>
            <HomeRepairServiceIcon sx={{display : {sm : "none", xs : "block"}}}/>
            <NavItems>
            <StyledNavLink to="/home"> <Typography variant='subtitle1'>HOME</Typography></StyledNavLink>
            <StyledNavLink to="/form-builder">FORMSBUILDER</StyledNavLink>
            <StyledNavLink to="/Docs-editor">IMAGEEDITOR</StyledNavLink>
            <StyledNavLink to="/docs-editor">DOCSEDITOR</StyledNavLink>
        </NavItems>
        </StyledToolBar>
        
    </AppBar>
  )
}

export default Appbar
