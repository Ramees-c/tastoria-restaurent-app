import { Box, styled, Typography } from "@mui/material";
import React from "react";

function PageNotFound() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        mt: "65px",
        mb: "100px",
        py: '60px'
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "black",
          margin: "0 auto",
        }}
      ></div>

      <Typography variant="h3" sx={{
        fontSize: '35px',
        fontWeight: 'bold',
        color: 'black',
        my: 3
      }}>
        404 : Page Not Found
      </Typography>

      <CustomBox>
        <Typography variant="body2" sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'black',
            textAlign: 'center'
        }}>
            We could not find what you were looking for.
        </Typography>
      </CustomBox>
    </Box>
  );
}

export default PageNotFound;
