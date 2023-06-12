import React from "react";
import Box from "@mui/material/Box";
import AppBar from "./AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./AppAppBar.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { authActions } from "../../../stores/auth";

const rightLink = {
  fontSize: 18,
  color: "white",
  ml: 3,
  fontFamily: "'Braah One', sans-serif",
  cursor: "pointer",
};
function AppAppBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthed, user } = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSignout = () => {
    setOpen(false);
    dispatch(authActions.logout(user));
    navigate("/about");
  };
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            backgroundColor: "#6963D1",
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
                <Link variant="h6" to="/" onClick={handleClickOpen}>
                  <label style={rightLink}>{user.username}</label>
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Đăng xuất?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có muốn đăng xuất?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Không</Button>
          <Button onClick={handleSignout} autoFocus>
            Có
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AppAppBar;
