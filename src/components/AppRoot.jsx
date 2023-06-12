import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import AppAppBar from "./About/AppBar/AppAppBar";
import { Stack } from "@mui/material";

function AppRoot() {
  return (
    <>
      <AppAppBar />
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
}

export default AppRoot;
