import { Box, styled, Typography } from '@mui/material'
import React from 'react'

import { SlLike } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";




function CustomCard({img, price, item, likes, heart, share}) {

    const DishBox = styled(Box)(({theme}) => ({
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        maxWidth: 350,
        backgroundColor: '#fff',
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]: {
            margin: theme.spacing(2, 0, 2, 0)
        },
        "&:hover": {
            backgroundColor: "#f5f5f5",
            boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease-in-out',
        }
    }))

    const ImgContainer = styled(Box)(() => ({
        width: '100%',
    }))

    const InfoBox = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }))

  return (
    <DishBox>
        <ImgContainer>
        <img src={img} alt={item} style={{maxWidth: '100%'}} />
        </ImgContainer>

        <Box sx={{
            padding: '1rem'
        }}>
            <Typography variant='body2' sx={{
                fontWeight: '700'
            }}>
            ₹ {price}
            </Typography>
            <Typography variant='body2' sx={{my: 2}}>
                {item}
            </Typography>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <InfoBox>
                    <SlLike color="#E50046" />
                    <Typography variant='body2' sx={{mt: 1}}>
                        {likes}
                    </Typography>
                </InfoBox>

                <InfoBox>
                <CiHeart color="#E50046" size={20} />
                    <Typography variant='body2' sx={{mt: 1}}>
                        {heart}
                    </Typography>
                </InfoBox>

                <InfoBox>
                    <CiShare2 color="#E50046"  size={20}/>
                    <Typography variant='body2' sx={{mt: 1}}>
                        {share}
                    </Typography>
                </InfoBox>

            </Box>
        </Box>
    </DishBox>
  )
}

export default CustomCard