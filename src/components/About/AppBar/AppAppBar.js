import React from "react";
import Box from "@mui/material/Box";
import AppBar from "./AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./AppAppBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const rightLink = {
  fontSize: 18,
  color: "white",
  ml: 3,
  fontFamily: "'Braah One', sans-serif",
  cursor: "pointer",
};
function AppAppBar() {
  const { isAuthed, user } = useSelector((state) => state.auth);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundImage: "linear-gradient(to right, #008DD6, #00C2BD",
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
            }}
          >
            <Box sx={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
              <Link variant="h6" underline="none" to={"/about"}>
                <label
                  className="aabHeader"
                  style={{
                    color: "white",
                    fontSize: 22,
                    fontFamily: "'Braah One', sans-serif",
                    cursor: "pointer",
                  }}
                >
                  CoolBreeze Solutions
                </label>
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
                    to="/signup"
                  >
                    <label style={rightLink}>Đăng ký</label>
                  </Link>
                </>
              )}
              {isAuthed && (
                <Link variant="h6" to="/">
                  <label style={rightLink}>{user.username}</label>
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
