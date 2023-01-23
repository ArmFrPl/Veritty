import React from "react";
import '../Styles/Navbar.css';
import {AppBar, Box, Button, Container, IconButton, Toolbar,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Images/VERITTY.png';
import {Link} from "react-router-dom";
import {SocialLinks} from "./SocialLinks";

export const Navbar = ({isLoggedIn, faqRef, setMenuOpen, menuOpen}) => {

  const handleOpenNavMenu = () => setMenuOpen(!menuOpen);

  const scrollToFaq = () => {
    console.log(faqRef)
    faqRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }
  return (
    <div className='navbar'>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{padding: 0}}>
          <Toolbar disableGutters sx={{alignItems: {xs: 'start', md: 'center'}, }}>
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'},}}>
              <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                background: menuOpen ? 'black' : 'transparent',
              }}>
                <Box className='menuHeader' sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>

                  <Box component="img" sx={{height: 16, width: 113, padding: '12px'}} alt="Veritty Logo" src={Logo}/>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    sx={{
                      justifyContent: 'end',
                      background: menuOpen ? 'black !important' : 'transparent',
                      borderRadius: '0px',
                    }}
                  >
                    <MenuIcon/>
                  </IconButton>
                </Box>
                <Box sx={{
                  display: menuOpen ? 'flex' : 'none',
                  width: '100%',
                  height: '100vh',
                  background: 'black',
                  justifyContent: 'center',
                  flexDirection:'column',
                  zIndex: 999,
                }}>
                  <Box sx={{
                    display:'flex',
                    alignItems:'center',
                    flexDirection:'column',
                    justifyContent:'center',
                    mb: '42px',
                  }}>
                    <Link to='/leaderboard' style={{ textDecoration: 'none'}}
                          className='mobMenuItem' onClick={handleOpenNavMenu}>Winners</Link>
                    <Link to='/dashboard' style={{textDecoration: 'none'}}
                          className='mobMenuItem' onClick={handleOpenNavMenu}>Tickets</Link>
                    <Link to='#' style={{ textDecoration: 'none'}} className='mobMenuItem'
                          onClick={scrollToFaq && handleOpenNavMenu}>FAQ</Link>
                  </Box>
                  <SocialLinks menuOpen={menuOpen} />
                  <Link to='#' style={{ textDecoration: 'none', justifyContent: 'center', mt: '30px'}} className='mobMenuItem'>Smart Contract</Link>
                  <Link to='#' style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
                    <Button className='connectButton'><Box sx={{
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
                    }}>{!isLoggedIn ? 'Connect Wallet' : '0x008475..55c55'}</Box></Button>
                  </Link>
                </Box>
              </Box>

            </Box>

            <Box sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'flex'},
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Box component="img" sx={{height: 16, width: 113}} alt="Veritty Logo" src={Logo}/>
              <Box display='flex' alignItems='center' justifyContent='center' ml='19em'>
                <Link to='/leaderboard' style={{marginRight: '40px', textDecoration: 'none'}}
                      className='menuItem'>WINNERS</Link>
                <Link to='/dashboard' style={{marginRight: '40px', textDecoration: 'none'}}
                      className='menuItem'>TICKETS</Link>
                <Link to='#' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'
                      onClick={scrollToFaq}>FAQ</Link>
                <Link to='#' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'>AUDIT</Link>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <SocialLinks/>
                <Link to='#' style={{textDecoration: 'none'}}>
                  <Button className='connectButton'><Box sx={{
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
                  }}>{!isLoggedIn ? 'Connect Wallet' : '0x008475..55c55'}</Box></Button>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}