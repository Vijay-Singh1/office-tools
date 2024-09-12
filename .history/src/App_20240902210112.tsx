import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box display={"flex"} width={"100%"} >
      <Box >
      <Sidebar />
      </Box>
      <Box display={"flex"} border = "1px solid red" flexGrow = {1} >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
