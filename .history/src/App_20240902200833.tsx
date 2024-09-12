import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box>
      <Sidebar />
      <Box >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
