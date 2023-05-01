import React, { useState } from "react";
import "./LoginForm.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { IconButton, Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Person, Visibility, VisibilityOff, Lock } from "@mui/icons-material";

function LoginForm() {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="login">
      <h1>Đăng nhập</h1>
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

      <div className="login-btn" onClick={popup}>
        Đăng nhập
      </div>

      <div className={popupStyle}>
        <h3>Login Failed</h3>
        <p>Username or password incorrect</p>
      </div>
    </div>
  );
}

export default LoginForm;
