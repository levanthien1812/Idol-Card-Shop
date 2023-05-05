import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Container } from "@mui/material";
import AppAppBar from "./About/AppBar/AppAppBar";

function AppRoot() {
  return (
    <>
      <AppAppBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default AppRoot;
