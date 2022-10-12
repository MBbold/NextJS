import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

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