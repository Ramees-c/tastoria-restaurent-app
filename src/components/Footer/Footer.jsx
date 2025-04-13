import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'

import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';



function Footer() {


    const footerLinkTitlesFeatured = [
        {
            id: 0,
            display: 'Guides'
        },
        {
            id: 1,
            display: 'Services'
        },
        {
            id: 2,
            display: 'Contact Us'
        },
    ]

    const footerLinkTitlesOverview = [
        {
            id: 0,
            display: 'Location'
        },
        {
            id: 1,
            display: 'Partnerships'
        },
        {
            id: 2,
            display: 'Terms of use & Privacy Policies'
        },
    ]

    const CustomContainer = styled(Container)(({theme}) => ({
        display: 'flex',
        justifyContent: 'space-around',
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        }
    }))

    const FooterLink = styled("span")(({theme}) => ({
        fontsize: '16px',
        color: '#fff',
        fontWeight: '300',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
        "&:hover" : {
            color: "#0F184C"
        }
    }))

    const IconBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
        }
    }))

  return (
    <Box sx={{py: 10, backgroundColor: '#E50046'}} >
        <CustomContainer>
            <Box>
                <Typography sx={{
                    fontSize: '20px',
                    color: '#fff',
                    fontWeight: '700',
                    mb:2,
                }}>
                    Featured
                </Typography>
                {
                    footerLinkTitlesFeatured.map((item) => (
                        <FooterLink key={item.id}>
                    {item.display} 
                </FooterLink>
                
                    ))
                }
            </Box>
            <Box>
                <Typography sx={{
                    fontSize: '20px',
                    color: '#fff',
                    fontWeight: '700',
                    mb:2,
                }}>
                    Overview
                </Typography>
                {
                    footerLinkTitlesOverview.map((item) => (
                        <FooterLink key={item.id}>{item.display}</FooterLink>
                    ))
                }
            </Box>
            <Box>
                <Typography sx={{
                    fontsize: '20px',
                    color: '#fff',
                    fontWeight: '700',
                    mb: 2,
                }}>
                    Get in touch
                </Typography>

                <Typography sx={{
                    fontsize: '16px',
                    color: '#fff',
                    fontWeight: '500,',
                    mb: 2,
                }}>
                    Keep in touch with our social media pages.
                </Typography>

                <IconBox>
                <FaFacebook color="#fff" size={30} />
                <FaInstagram color="#fff" size={30} />
                <FaLinkedin color="#fff" size={30} />
                </IconBox>
            </Box>
        </CustomContainer>
    </Box>
  )
}

export default Footer