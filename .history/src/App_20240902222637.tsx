import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box display="flex" width="100%" >
      <Box flexGrow = {1} >
      <Sidebar  />
      </Box>
      <Box display="flex" border = "1px solid red" flexGrow = {5} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
