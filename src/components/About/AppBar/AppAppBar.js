import React from "react";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
// import { Link } from "react-router-dom";
import AppBar from "./AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./AppAppBar.css";
import { useSelector } from "react-redux";

const rightLink = {
  fontSize: 18,
  color: "common.white",
  ml: 3,
};
function AppAppBar() {
  const { isAuthed, user } = useSelector((state) => state.auth);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#5375db",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
            }}
          >
            <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
              <Link
                className="aabHeader"
                variant="h6"
                underline="none"
                color={"inherit"}
                href="/about"
                sx={{
                  fontSize: 24,
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "'Braah One', sans-serif",
                }}
              >
                {"IDOL CARD SHOP"}
              </Link>
            </Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              {!isAuthed && (
                <>
                  <Link
                    className="aabRightLink"
                    color={"inherit"}
                    variant="h6"
                    underline="none"
                    href="/signup"
                    sx={rightLink}
                    fontFamily={"'Braah One', sans-serif"}
                  >
                    {"Đăng ký"}
                  </Link>
                  <Link
                    className="aabRightLink"
                    color={"inherit"}
                    variant="h6"
                    underline="none"
                    href="/login"
                    sx={rightLink}
                    fontFamily={"'Braah One', sans-serif"}
                  >
                    {"Đăng nhập"}
                  </Link>
                </>
              )}
              {isAuthed && (
                <Link
                  variant="h6"
                  color="inherit"
                  fontFamily={"'Braah One', sans-serif"}
                  href="/"
                >
                  {user.username}
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppAppBar;
