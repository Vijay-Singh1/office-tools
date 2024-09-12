import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import { AppBar, Box, IconButton, Toolbar, Typography, MenuIcon } from "@mui/material";

const App: React.FC = () => {
  
  return (
    <Box display="flex" width="100%" >
      <Box >
      <AppBar position="static" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              { marginRight: 5 },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      </Box>
      <Box display="flex" border = "1px solid red"flexGrow = {1} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
