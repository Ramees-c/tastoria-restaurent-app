import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'

import CoustomButton from "../../components/CoustomButton/CoustomButton"

import welcome_img from "../../assets/images/welcome_bg.png"

function Welcome() {

    const CustomBox = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }))

    const Title = styled(Typography)(({theme}) => ({
        fontSize: '64px',
        color: '#fff',
        fontWeight: 'bold',
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        }
    }))

  return (
    <Box sx={{backgroundColor: '#E50046', minHeight: '80vh',}}>
        <Container>
            <CustomBox>
                <Box sx={{flex: '2.25'}}>
                    <Typography
                    variant='body2'
                    sx={{
                        fontSize: '18px',
                        color: '#fff',
                        fontWeight: '500',
                        mt: 10,
                        mb: 4,
                    }}
                    >
                        Welcome to tastoria Restaurent
                    </Typography>
                    <Title variant='h1'>
                        Discover a place where you'll love to Eat.
                    </Title>
                    <Typography variant='body2' sx={{fontSize: '18px', color: '#fff', my: 4}}>
                        Immerse yourself in the elegent ambiance as you savor each bite, accompanied by our extensive selection 
                        of hand-picked wines and carefully curated cocktails.
                    </Typography>
                    <CoustomButton backgroundColor="#0F1B4c" color="#fff" buttonText="More About Us" welcomeBtn={true} />
                </Box>
                <Box sx={{flex: '1'}}>
                    <img src={welcome_img} alt="welcome" style={{maxWidth: '100%', marginBottom: '2rem'}} />
                </Box>
            </CustomBox>
        </Container>
    </Box>
  )
}

export default Welcome