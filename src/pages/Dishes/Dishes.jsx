import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import CustomCard from '../../components/CustomCard/CustomCard'

import {data} from "../../staticData/data"

function Dishes() {

  const PropertiesTextBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  }))

  const DishesBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  }))
  
  
  return (
   <Box sx={{
    mt: 5,
    backgroundColor: '#F5FAFE',
    py: 10
   }}>  
    <Container>
      <PropertiesTextBox>
        <Typography sx={{
          color: "black",
          fontSize: '35px',
          fontWeight: 'bold',
          ml: '13px'
        }}>
          Featured Dishes
        </Typography>

        <Typography sx={{
          color: 'black',
          fontSize: '16px',
          mt: 1,
          ml: '13px'
        }}>
          Explore Variety of South Indian Dishes!!
        </Typography>
      </PropertiesTextBox>

      <DishesBox>
        {
          data.map((item) => (
            <CustomCard 
            key={item.id}
            img={item.img}
            price={item.price}
            item={item.item}
            likes={item.likes}
            heart={item.heart}
            share={item.share}
            />
          ))
        }
      </DishesBox>
    </Container>
   </Box>
  )
}

export default Dishes