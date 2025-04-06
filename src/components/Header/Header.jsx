import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import CoustomButton from '../CoustomButton/CoustomButton'

import logo from "../../assets/images/tastoria_logo.png"

function Header() {
    const nav_titles = [
        {
            path:'/',
            display: 'Home'
        },
        {
            path:'/dishes',
            display: 'Dishes'
        },
        {
            path:'/services',
            display: 'Services'
        },
        {
            path:'/about',
            display: 'About us'
        },
    ]


    const NavBarLinksBox = styled(Box)(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            display: "none"
        }
    }))

    const NavBarLink = styled(Typography)(() => ({
        fontSize: '18px',
        color: '#fff',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover':{
            color: '#0F184C'
        }
    }))

    const NavBarLogo = styled('img')(({theme}) => ({
        cursor: 'pointer',
        width: '120px',
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    }))

  return (
    <Box 
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px',
        maxWidth: 'auto',
        marginLeft: '0px',
        marginBottom: '-24px',
        backgroundColor: '#E50046'
    }}
    >
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem'
        }}>


        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <NavBarLogo src={logo} alt="logo" />
        </Box>

            <NavBarLinksBox>
               {
                nav_titles.map((title, index) => (
                <NavBarLink key={index} variant='body2'>
                    {title.display}
                </NavBarLink>
                ))
               }
            </NavBarLinksBox>
        </Box>

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem'
        }}>
        <NavBarLink variant='body2'>
                   Sign Up
                </NavBarLink>
                <CoustomButton backgroundColor='#0F184C' color='#fff' buttonText='Register' />
        </Box>
    </Box>
  )
}

export default Header