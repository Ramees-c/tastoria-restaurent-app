import {
  Box,
  styled,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CoustomButton from "../CoustomButton/CoustomButton";

import logo from "../../assets/images/tastoria_logo.png";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

function Header() {
  const [mobileMenu, setMobileMenu] = useState({ left: false });

  const toogleDrawer = (anchor, open) => (event) => {
    if(event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
        return;
    }
    setMobileMenu({...mobileMenu, [anchor]:open})
  }

  const list = (anchor) => (
    <Box sx={{
        width: anchor === "top" || anchor === "bottom" ? 'auto' : 250
    }}
    role="presentation"
    onClick={toogleDrawer(anchor, false)}
    onKeyDown={toogleDrawer(anchor, false)}
    >
         <List>
            {
                nav_titles.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 && <HomeIcon />
                                }
                                {
                                    index === 1 && <FeaturedPlayListIcon />
                                }
                                {
                                    index === 2 && <MiscellaneousServicesIcon />
                                }
                                {
                                    index === 3 && <ContactsIcon />
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                        </ListItemButton>
                    </ListItem>
                ))
            }
         </List>
    </Box>
  )

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About us",
    },
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(({theme}) => ({
    fontSize: "18px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#0F184C",
    },
    [theme.breakpoints.down('md')]:{
        fontSize: '14px'
    }
  }));

  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    width: "120px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CoustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    color: '#fff',
    fontSize: '30px',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "40px",
        maxWidth: "auto",
        marginLeft: "0px",
        marginBottom: "-24px",
        backgroundColor: "#E50046",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CoustomMenuIcon onClick={toogleDrawer("left", true)} />
          <Drawer 
          anchor="left"
          open={mobileMenu["left"]}
          onClose={toogleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>


          <NavBarLogo src={logo} alt="logo" />
        </Box>

        <NavBarLinksBox>
          {nav_titles.map((title, index) => (
            <NavBarLink key={index} variant="body2">
              {title.display}
            </NavBarLink>
          ))}
        </NavBarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavBarLink variant="body2">Sign Up</NavBarLink>
        <CoustomButton
          backgroundColor="#0F184C"
          color="#fff"
          buttonText="Register"
        />
      </Box>
    </Box>
  );
}

export default Header;
