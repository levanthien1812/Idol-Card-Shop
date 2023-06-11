import React, { useRef, useState } from "react";
import "./SignupForm.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { IconButton, Input, Container, Alert } from "@mui/material";
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
import { Link, useNavigate } from "react-router-dom";
import AppAppBar from "../../components/About/AppBar/AppAppBar";
import { useDispatch } from "react-redux";
import { authActions } from "../../stores/auth";

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState(null);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const signupHandler = () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (!username || !email || !password || !passwordConfirm) {
      return setError("Vui lòng điền đầy đủ các thông tin đăng ký!");
    }

    if (password.length < 8 || password.length > 20) {
      return setError("Độ dài mật khẩu phải từ 8 đến 20 ký tự!");
    }

    if (password !== passwordConfirm) {
      return setError("Mật khẩu xác nhận không khớp!");
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(email)) {
      return setError("Vui lòng dùng email hợp lệ!");
    }
    // sign up successfully
    setError(null);
    const newUser = {
      username,
      email,
      password,
    };
    dispatch(authActions.setAuth(newUser));
    navigate("/about");
  };

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
      <div className="signup">
        <h1>Đăng ký</h1>
        {error && (
          <Alert style={{ width: "80%" }} severity="error">
            {error}
          </Alert>
        )}

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Person sx={{ mr: 2, fontSize: "2.2em" }} />
          <FormControl>
            <InputLabel htmlFor="username">Tên đăng nhập *</InputLabel>
            <Input
              id="username"
              type="text"
              className="username"
              inputRef={usernameRef}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Lock sx={{ mr: 2, fontSize: "2.2em" }} />
          <FormControl>
            <InputLabel htmlFor="password">Mật khẩu *</InputLabel>
            <Input
              className="password"
              id="password"
              type={showPassword ? "text" : "password"}
              inputRef={passwordRef}
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
            <InputLabel htmlFor="confirmPassword">
              Nhập lại mật khẩu *
            </InputLabel>
            <Input
              className="confirmPassword"
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              inputRef={passwordConfirmRef}
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
            <InputLabel htmlFor="email">Email *</InputLabel>
            <Input
              id="email"
              type="email"
              className="email"
              inputRef={emailRef}
              required
            />
          </FormControl>
        </Box>

        <div className="signup-btn" onClick={signupHandler}>
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
      </div>
    </Container>
  );
}

export default SignupForm;
