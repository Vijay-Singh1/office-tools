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


const Appbar = () => {
  return (
    <AppBar>
        <StyledToolBar>
        <Typography sx={{display : {sm : "block", xs : "none"}}}>Office Tools</Typography>
            <HomeRepairServiceIcon sx={{display : {sm : "none", xs : "block"}}}/>
            <NavItems>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/form-builder">Form Builder</NavLink>
            <NavLink to="/Docs-editor">Image Editor</NavLink>
            <NavLink to="/docs-editor">Docs Editor</NavLink>
        </NavItems>
        </StyledToolBar>
        
    </AppBar>
  )
}

export default Appbar
