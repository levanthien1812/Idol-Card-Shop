import React from "react";
import styled from "@emotion/styled";
import { Container, Box } from "@mui/material";
import PropTypes from "prop-types";

const GetStartedLayoutRoot = styled("section")({
  color: "white",
  position: "relative",
  display: "flex",
  alignItems: "center",
  height: "85vh",
  minHeight: 500,
  maxHeight: 1300,
  marginTop: "3em",
});

const Background = styled(Box)({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -2,
});

function GetStartedLayout(props) {
  const { sxBackground, children } = props;
  return (
    <GetStartedLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
        <Box
          sx={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        <Box
          component="img"
          src={require("../../../assets/images/double-down.png")}
          height="12"
          width="12"
          alt="arrow down"
          sx={{ position: "absolute", bottom: 25 }}
        />
      </Container>
    </GetStartedLayoutRoot>
  );
}

GetStartedLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default GetStartedLayout;
