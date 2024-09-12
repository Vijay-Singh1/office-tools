import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { NavLink } from 'react-router-dom';

const StyledToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
})

const NavItems = styled(Box)(({theme}) =>({
    color : theme.palette.primary.contrastText
}))

const NavLinks = styled("NavLink")((theme)=>({
color: "white"
}))
const Appbar = () => {
  return (
    <AppBar>
        <StyledToolBar>
        <Typography sx={{display : {sm : "block", xs : "none"}}}>Office Tools</Typography>
            <HomeRepairServiceIcon sx={{display : {sm : "none", xs : "block"}}}/>
            <NavItems>
            <NavLinks to="/home">Home</NavLinks>
            <NavLinks to="/form-builder">Form Builder</NavLinks>
            <NavLinks to="/Docs-editor">Image Editor</NavLinks>
            <NavLinks to="/docs-editor">Docs Editor</NavLinks>
        </NavItems>
        </StyledToolBar>
        
    </AppBar>
  )
}

export default Appbar
