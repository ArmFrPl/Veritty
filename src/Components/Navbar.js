import React from "react";
import '../Styles/Navbar.css';
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Images/VERITTY.png';
import ConnectWalletOutline from '../Images/ConnectWallet.png';
import {Link} from "react-router-dom";
import {SocialLinks} from "./SocialLinks";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const pages = ['WINNERS', 'TICKETS', 'FAQ', 'AUDIT'];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className='navbar'>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon/>
              </IconButton>
              {/*<Menu*/}
              {/*  id="menu-appbar"*/}
              {/*  anchorEl={anchorElNav}*/}
              {/*  anchorOrigin={{*/}
              {/*    vertical: 'bottom',*/}
              {/*    horizontal: 'left',*/}
              {/*  }}*/}
              {/*  keepMounted*/}
              {/*  transformOrigin={{*/}
              {/*    vertical: 'top',*/}
              {/*    horizontal: 'left',*/}
              {/*  }}*/}
              {/*  open={Boolean(anchorElNav)}*/}
              {/*  onClose={handleCloseNavMenu}*/}
              {/*  sx={{*/}
              {/*    display: {xs: 'block', md: 'none'},*/}
              {/*  }}*/}
              {/*>*/}
              {/*  {pages.map((page) => (*/}
              {/*    <MenuItem key={page} onClick={handleCloseNavMenu}>*/}
              {/*      <Typography textAlign="center">{page}</Typography>*/}
              {/*    </MenuItem>*/}
              {/*  ))}*/}
              {/*</Menu>*/}
            </Box>

            <Box sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'flex'},
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <Box component="img" sx={{height: 16, width: 113}} alt="Veritty Logo" src={Logo}/>
              <Box display='flex' alignItems='center' justifyContent='center' ml='19em'>
                {pages?.map((page, index) => (
                  <Link to='/' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'
                        key={index}>{page}</Link>
                ))}
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <SocialLinks/>
                {/*<Button className='connectButton'><Typography className='buttonText'>Connect Wallet</Typography></Button>*/}
                <Link to='/'>
                  <Box component='img' src={ConnectWalletOutline}/>
                  <Box sx={{
                    fontFamily: 'Epilogue',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '28px',
                    background: 'linear-gradient(174.11deg, #CE9400 4.67%, #FFD057 75.94%)',
                    textFillColor: 'transparent',
                    backgroundClip: 'text',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                    textTransform: 'none',
                    position: 'absolute',
                    right: '3.4em',
                    top: '1.1em'
                  }}>Connect Wallet</Box>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}