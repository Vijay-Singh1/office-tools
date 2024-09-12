import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box display={"flex"} >
      <Box display={"flex"} sx = {{flexGrow : 1}}>
      <Sidebar />
      </Box>
      <Box  display={"flex"} border = "1px solid red">
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
