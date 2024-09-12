import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar";

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
