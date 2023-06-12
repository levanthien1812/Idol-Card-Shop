import React, { useRef, useState } from "react";
import "./LoginForm.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Alert, Container, IconButton, Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Person, Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AppAppBar from "../../components/About/AppBar/AppAppBar";
import { useDispatch } from "react-redux";
import { authActions } from "../../stores/auth";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  const signinHandler = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!username || !password) {
      return setError("Vui lòng điền đầy đủ các thông tin!");
    }
    // sign up successfully
    setError(null);
    const newUser = {
      username,
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
      <div className="login">
        <h1>Đăng nhập</h1>
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
                inputRef={passwordRef}
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

        <div className="login-btn" onClick={signinHandler}>
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
      </div>
    </Container>
  );
}

export default LoginForm;
