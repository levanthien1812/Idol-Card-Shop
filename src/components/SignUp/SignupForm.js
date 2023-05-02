import React, { useState } from "react";
import "./SignupForm.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { IconButton, Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import {
  Person,
  Visibility,
  VisibilityOff,
  Lock,
  EmailRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function SignupForm() {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  return (
    <div className="signup">
      <h1>Đăng ký</h1>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Person sx={{ mr: 2, fontSize: "2.2em" }} />
        <FormControl>
          <InputLabel htmlFor="username">Tên đăng nhập</InputLabel>
          <Input id="username" type="text" sx={{ width: "17em" }} />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Lock sx={{ mr: 2, fontSize: "2.2em" }} />
        <FormControl>
          <InputLabel htmlFor="password">Mật khẩu</InputLabel>
          <Input
            sx={{ width: "17em" }}
            id="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></Input>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Lock sx={{ mr: 2, fontSize: "2.2em" }} />
        <FormControl>
          <InputLabel htmlFor="confirmPassword">Nhập lại mật khẩu</InputLabel>
          <Input
            sx={{ width: "17em" }}
            id="password"
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          ></Input>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <EmailRounded sx={{ mr: 2, fontSize: "2.2em" }} />
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" type="email" sx={{ width: "17em" }} required />
        </FormControl>
      </Box>

      <div className="signup-btn" onClick={popup}>
        Đăng ký
      </div>
      <p>
        Đã có tài khoản?
        <Link to="/login">
          <Button
            variant="text"
            style={{
              color: "red",
              fontStyle: "italic",
            }}
          >
            Đăng nhập ngay
          </Button>
        </Link>
      </p>

      <div className={popupStyle}>
        <h3>Signup Failed</h3>
        <p>Username or password incorrect</p>
        {/* Temp */}
      </div>
    </div>
  );
}

export default SignupForm;
