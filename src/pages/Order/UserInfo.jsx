import { Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function UserInfo({ user, setUserInfo }) {
  const [lastName, setLastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [email, setemail] = useState(user.email);
  const [phone, setphone] = useState(user.phone);

  const bgWhite = { backgroundColor: "white" };


  useEffect(() => {
    setUserInfo({ lastName, firstName, email, phone });
  }, [lastName, firstName, email, phone]);

  return (
    <Stack
      style={{ border: "2px solid orange", backgroundColor: "#f1edd955" }}
      padding={3}
      borderRadius={3}
    >
      <Typography fontSize={20} marginBottom={3}>
        Thông tin người đặt hàng
      </Typography>
      <Grid container rowGap={2}>
        <Grid item xs={6}>
          <TextField
            size="small"
            label="Họ"
            style={bgWhite}
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            label="Tên"
            style={bgWhite}
            value={firstName}
            onChange={(event) => {
              setfirstName(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            label="Email"
            style={bgWhite}
            value={email}
            onChange={(event) => {
              setemail(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            size="small"
            label="Số điện thoại"
            style={bgWhite}
            value={phone}
            onChange={(event) => {
              setphone(event.target.value);
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default UserInfo;
