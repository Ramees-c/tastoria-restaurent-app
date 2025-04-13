import React from 'react'

import logoImg from "../../assets/images/logos.png"
import starsImg from "../../assets/images/Star.png"

import logo from "../../assets/images/tastoria_logo.png"
import { Box, Container, styled, Typography } from '@mui/material'

function Partner() {

    const CoustomContainer = styled(Container)(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',
            textAlign: 'center',
            marginBottom: theme.spacing(4)
        }
    }))

    const CustomBox = styled(Box)(({theme}) => ({
        [theme.breakpoints.down("md")]: {
            marginBottom: theme.spacing(4)
        }
    }))

  return (
    <Box sx={{mt: 10}}>
        <CoustomContainer>
            <CustomBox>
                <Typography variant='h4'>Tasoria</Typography>
                <Typography variant='body2' sx={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    mt: 2,
                }}>
                    More than 45,000 trust Tastoria
                </Typography>
            </CustomBox>

            <Box>
                <img src={starsImg} alt="star" style={{ maxWidth: '100%'}} />
                <Typography variant='body2' sx={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    mt: 2,
                }}>
                    5-Star Rating (2k+ Reviews)
                </Typography>
            </Box>
        </CoustomContainer>

        <Container sx={{display: 'flex', flexDirection: 'column'}}>
                 <img src={logoImg} alt="logos" />
        </Container>
    </Box>
  )
}

export default Partner