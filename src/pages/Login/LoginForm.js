import React, { useState } from "react";
import "./LoginForm.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Container, IconButton, Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Person, Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AppAppBar from "../../components/About/AppBar/AppAppBar";

function LoginForm() {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "10em",
      }}
    >
      <AppAppBar />
      <div className="login">
        <h1>Đăng nhập</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Person sx={{ mr: 2, fontSize: "2.2em" }} />
          <FormControl>
            <InputLabel htmlFor="username">Tên đăng nhập *</InputLabel>
            <Input id="username" type="text" className="username" />
          </FormControl>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "1.2em",
            }}
          >
            <Lock sx={{ mr: 2, fontSize: "2.2em" }} />
            <FormControl>
              <InputLabel htmlFor="password">Mật khẩu *</InputLabel>
              <Input
                id="password"
                className="password"
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

          <FormControlLabel
            control={<Checkbox />}
            label="Nhớ tên tài khoản"
            sx={{ marginLeft: "0.5em" }}
          />
          <Link
            to={"/forgotpassword"}
            style={{
              textDecoration: "none",
              textAlign: "right",
              color: "rgb(27, 144, 207)",
              fontStyle: "italic",
            }}
          >
            Quên mật khẩu?
          </Link>
        </Box>

        <div className="login-btn" onClick={popup}>
          Đăng nhập
        </div>
        <p>
          Chưa có tài khoản?{" "}
          <Link to={"/signup"}>
            <Button
              variant="text"
              style={{
                color: "red",
                fontStyle: "italic",
              }}
            >
              Đăng ký ngay
            </Button>
          </Link>
        </p>

        {/* Hiển thị pop up thông báo (ví dụ tạm thời) */}
        <div className={popupStyle}>
          <h3>Login Failed</h3>
          <p>Username or password incorrect</p>
        </div>
      </div>
    </Container>
  );
}

export default LoginForm;
