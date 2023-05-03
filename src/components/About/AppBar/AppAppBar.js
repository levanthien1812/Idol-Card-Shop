import React from "react";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import AppBar from "./AppBar";
import Toolbar from "@mui/material/Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};
function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#2091c6",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Link
              variant="h6"
              underline="none"
              color={"inherit"}
              href="/about"
              sx={{ fontSize: 24, alignItems: "center" }}
            >
              {"Idol Card Shop"}
            </Link>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Link
                color={"inherit"}
                variant="h6"
                underline="none"
                href="/signup"
                sx={rightLink}
              >
                {"Đăng ký"}
              </Link>
              <Link
                color={"inherit"}
                variant="h6"
                underline="none"
                href="/login"
                sx={rightLink}
              >
                {"Đăng nhập"}
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
