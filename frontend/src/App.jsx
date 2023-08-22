import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/main.scss";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default App;
