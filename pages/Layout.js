import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Box >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};