import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>

      <Navbar />
      <Outlet />
      {/* <Menu /> */}
    </>
  );
};

export default Layout;
