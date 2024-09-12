import { AppBar, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const StyledToolBar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
})
const Appbar = () => {
  return (
    <AppBar>
        <Typography sx={{display : {sm : "block", xs : "none"}}}>Office Tools</Typography>
        <Typography sx={{display : {sm : "none", xs : "block"}
        }} ><HomeRepairServiceIcon/></Typography>
    </AppBar>
  )
}

export default Appbar
