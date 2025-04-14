import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

import ambience_img from "../../assets/images/ambience_img.png";

function Ambience() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "black",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  const TextFlexBox = styled(Box)(({theme}) => ({
    marginTop: theme.spacing(7),
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        gap: theme.spacing(5),
    }
  }))



  const LargeText = styled(Typography)(({theme}) => ({
    fontSize: '64px',
    color: 'black',
    fontWeight: '700',
    [theme.breakpoints.down("md")]: {
        fontSize: '32px'
    }
  }))

  const SmallText = styled(Typography)(({theme}) => ({
    fontSize: '18px',
    color: 'black',
    fontWeight: '500',
    [theme.breakpoints.down('md')]: {
        fontSize: '14px'
    }
  }))
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img
              src={ambience_img}
              alt="ambience"
              style={{ maxWidth: '100%' }}
            />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "black",
                fontWeight: "700",
                my: 3,
              }}
            >
              You've found a ambience you love.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "black",
                lineHeight: "27px",
              }}
            >
              Discover the epitome of culinary excellence at Savoria, where
              every visit is an enchanting rendezvous with the art of dining.
            </Typography>
          </Box>
        </CustomBox>
        <TextFlexBox>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <LargeText>250+</LargeText>
                <SmallText>Dishes</SmallText>
              </Box>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <LargeText>300+</LargeText>
                <SmallText>Trusted Clients</SmallText>
              </Box>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <LargeText>350+</LargeText>
                <SmallText>Delivery Per Day</SmallText>
              </Box>
        </TextFlexBox>
      </Container>
    </Box>
  );
}

export default Ambience;
