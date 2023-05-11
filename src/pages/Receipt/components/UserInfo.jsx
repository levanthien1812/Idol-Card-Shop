import { Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function UserInfo() {
  const bgWhite = { backgroundColor: "white" };

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
          <TextField size="small" label="Họ" style={bgWhite} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" label="Tên" style={bgWhite} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" label="Email" style={bgWhite} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" label="Số điện thoại" style={bgWhite} />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default UserInfo;
