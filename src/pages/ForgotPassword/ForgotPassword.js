import React from "react";
import "./ForgotPassword.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { Container, Input } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { EmailRounded } from "@mui/icons-material";

function ForgotPassword() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "10em",
      }}
    >
      <div className="forgotPass">
        <Box display="flex" flexDirection="column" textAlign="center">
          <h1>Quên mật khẩu</h1>
          <p style={{ fontStyle: "italic" }}>
            Nhập địa chỉ mail bạn dùng khi đăng ký để nhận mật khẩu mới.
          </p>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <EmailRounded sx={{ mr: 2, fontSize: "2.2em" }} />
          <FormControl>
            <InputLabel htmlFor="email">Email *</InputLabel>
            <Input id="email" type="text" className="email" />
          </FormControl>
        </Box>

        <div className="send-btn">Đổi mật khẩu</div>
      </div>
    </Container>
  );
}

export default ForgotPassword;
