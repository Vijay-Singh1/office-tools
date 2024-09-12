import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box display={"flex"} >
      <Box display={"flex"} flexGrow = {1}>
      <Sidebar />
      </Box>
      <Box display={"flex"} flexGrow = {1} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
