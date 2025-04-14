import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import CoustomButton from '../../components/CoustomButton/CoustomButton'

import delivery_img from '../../assets/images/delivery_img.png'

function Delivery() {
    const CustomBox = styled(Box)(({theme}) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down('md')]: {
            padding: "0",
        }
    }))

    const CustomContainer = styled(Container)(({theme}) => ({
        backgroundColor: '#E50046',
        height: '416px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(3, 3, 0, 3),
            width: '90%'
        }
    }))
  return (
    <CustomBox>
        <CustomContainer>
            <Box>
                <Typography sx={{
                    fontSize: '35px',
                    color: '#fff',
                    fontWeight: '700',
                    fontFamily: 'monospace',
                }}>
                    Super Fast Home Delivery
                </Typography>

                <Typography sx={{
                    fontSize: '16px',
                    color: 'white',
                    fontWeight: '800',
                    my: 3,
                    fontFamily: 'monospace'
                }}>
                    Door to Door Delivery!
                </Typography>

                <CoustomButton 
                backgroundColor="#fff"
                color="#17275F"
                buttonText="Order Now!!"
                />
            </Box>

            <img src={delivery_img} alt="delivery" style={{maxWidth: '100%'}} />
        </CustomContainer>
    </CustomBox>
  )
}

export default Delivery