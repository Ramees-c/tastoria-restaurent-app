import { ArrowRightAlt } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import React from "react";

import { CiShoppingCart, CiHome, CiMoneyCheck1    } from "react-icons/ci";
import CoustomButton from "../../components/CoustomButton/CoustomButton";

function Booking() {

    const CustomBox = styled(Box)(({theme}) => ({
        width: '30%',
        [theme.breakpoints.down("md")]: {
            width: '85%'
        }
    }))

    const GuidesBox = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0',
            flexDirection: 'column',
        }
    }))

    const GuideBox = styled(Box)(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2, 0, 2, 0),
        }
    }))

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
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
        my: 3, 
      }}>
        How to Book
      </Typography>

      <CustomBox>
        <Typography variant="body2" sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'black',
            textAlign: 'center',
        }}>
            Everything you need to known when you book for advance slot
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
            <CiShoppingCart color="#E50046" size={70} />
            <Typography variant="body2" sx={{
                fontWeight: '500',
                fontSize: '20px',
                color: 'black',
                my: 1,
            }}>
                Order Guides
            </Typography>
            <Box sx={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="body2" sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#0689FF'
                }}>
                    How to order
                </Typography>
                <ArrowRightAlt  style={{color: '#0668FF'}} />
            </Box>
        </GuideBox>

        <GuideBox>
            <CiHome color="#E50046" size={70} />
            <Typography variant="body2" sx={{
                fontWeight: '500',
                fontSize: '20px',
                color: 'black',
                my: 1,
            }}>
                Booking Guides
            </Typography>
            <Box sx={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="body2" sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#0689FF'
                }}>
                    How to book
                </Typography>
                <ArrowRightAlt  style={{color: '#0668FF'}} />
            </Box>
        </GuideBox>

        <GuideBox>
            <CiMoneyCheck1 color="#E50046" size={80} />
            <Typography variant="body2" sx={{
                fontWeight: '500',
                fontSize: '20px',
                color: 'black',
                my: 1,
            }}>
                Payment Guides
            </Typography>
            <Box sx={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="body2" sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: '#0689FF'
                }}>
                    Payment methods
                </Typography>
                <ArrowRightAlt  style={{color: '#0668FF'}} />
            </Box>
        </GuideBox>
      </GuidesBox>

      <CoustomButton 
      backgroundColor="#0F1B4C"
      color= '#fff'
      buttonText="See Full Guides"
      guideBtn={true}

      />
    </Box>
  );
}

export default Booking;
