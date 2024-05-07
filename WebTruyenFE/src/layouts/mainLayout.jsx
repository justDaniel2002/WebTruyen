import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
