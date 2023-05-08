import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import AppAppBar from "./About/AppBar/AppAppBar";

function AppRoot() {
  return (
    <>
      <AppAppBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default AppRoot;
