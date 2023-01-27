import React from "react";
import '../Styles/Navbar.css';
import {AppBar, Box, Button, Container, IconButton, Toolbar,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Images/VERITTY.svg';
import {Link} from "react-router-dom";
import {SocialLinks} from "./SocialLinks";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Navbar = ({isLoggedIn, faqRef, mobileFaqRef, setMenuOpen, menuOpen, winnersRef, mobileWinnersRef, mobileTicketsRef, ticketsRef}) => {

  const handleOpenNavMenu = () => setMenuOpen(!menuOpen);

  const scrollToWinners = () => {
    winnersRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }
  const mobileScrollToWinners = () => {
    mobileWinnersRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }
  const scrollToTickets = () => {
    ticketsRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }

  const mobileScrollToTickets = () => {
    mobileTicketsRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }
  const scrollToFaq = () => {
    faqRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }

  const mobileScrollToFaq = () => {
    mobileFaqRef?.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }

  return (
    <div className='navbar'>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{padding: 0}}>
          <Toolbar disableGutters sx={{alignItems: {xs: 'start', md: 'center'},}}>
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
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <Link to='#' style={{textDecoration: 'none', display: 'flex', justifyContent: 'center',}}>
                      {/*<Button className='connectButton mobileMenu'><Box sx={{*/}
                      {/*  fontFamily: 'Epilogue',*/}
                      {/*  fontStyle: 'normal',*/}
                      {/*  fontWeight: '700',*/}
                      {/*  fontSize: '9.6px',*/}
                      {/*  lineHeight: '17px',*/}
                      {/*  background: 'linear-gradient(174.11deg, #CE9400 4.67%, #FFD057 75.94%)',*/}
                      {/*  textFillColor: 'transparent',*/}
                      {/*  backgroundClip: 'text',*/}
                      {/*  flex: 'none',*/}
                      {/*  order: 1,*/}
                      {/*  flexGrow: 0,*/}
                      {/*  textTransform: 'none',*/}
                      {/*}}>{!isLoggedIn ? 'Connect Wallet' : '0x008475..55c55'}</Box></Button>*/}
                      <ConnectButton />
                    </Link>
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
                        transitionDuration: '.3s'
                      }}
                    >
                      <MenuIcon/>
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{
                  display: menuOpen ? 'flex' : 'none',
                  width: '100%',
                  height: '100vh',
                  background: 'black',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  zIndex: 999,
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    mb: '42px',
                  }}>
                    <Link to='/leaderboard' style={{textDecoration: 'none'}}
                          className='mobMenuItem' onClick={() => {
                            mobileScrollToWinners();
                            handleOpenNavMenu();
                          }}>Winners</Link>
                    <Link to='/dashboard' style={{textDecoration: 'none'}}
                          className='mobMenuItem' onClick={() => {
                            mobileScrollToTickets();
                            handleOpenNavMenu();
                    }}>Tickets</Link>
                    <Link to='#' style={{textDecoration: 'none'}} className='mobMenuItem'
                          onClick={() => {
                            mobileScrollToFaq();
                            handleOpenNavMenu();
                          }}>FAQ</Link>
                  </Box>
                  <SocialLinks menuOpen={menuOpen}/>
                  <Link to='#' style={{textDecoration: 'none', justifyContent: 'center', mt: '30px'}}
                        className='mobMenuItem'>Smart Contract</Link>
                  <Link to='#'
                        style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', marginTop: '100px'}}>
                    {/*<Button className='connectButton'><Box sx={{*/}
                    {/*  fontFamily: 'Epilogue',*/}
                    {/*  fontStyle: 'normal',*/}
                    {/*  fontWeight: '700',*/}
                    {/*  fontSize: '16px',*/}
                    {/*  lineHeight: '28px',*/}
                    {/*  background: 'linear-gradient(174.11deg, #CE9400 4.67%, #FFD057 75.94%)',*/}
                    {/*  textFillColor: 'transparent',*/}
                    {/*  backgroundClip: 'text',*/}
                    {/*  flex: 'none',*/}
                    {/*  order: 1,*/}
                    {/*  flexGrow: 0,*/}
                    {/*  textTransform: 'none',*/}
                    {/*}}>{!isLoggedIn ? 'Connect Wallet' : '0x008475..55c55'}</Box></Button>*/}
                    <ConnectButton />

                  </Link>
                </Box>
              </Box>

            </Box>

            {/*desktop*/}

            <Box sx={{
              flexGrow: 1,
              display: {xs: 'none', md: 'flex'},
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Box component="img" sx={{height: 16, width: 113}} alt="Veritty Logo" src={Logo}/>
              <Box display='flex' alignItems='center' justifyContent='center' ml='19em'>
                <Link to='/leaderboard' style={{marginRight: '40px', textDecoration: 'none'}}
                      className='menuItem' onClick={() => {scrollToWinners()}}>WINNERS</Link>
                <Link to='/dashboard' style={{marginRight: '40px', textDecoration: 'none'}}
                      className='menuItem' onClick={() => {scrollToTickets()}}>TICKETS</Link>
                <Link to='#' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'
                      onClick={scrollToFaq}>FAQ</Link>
                <Link to='#' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'>AUDIT</Link>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <SocialLinks/>
                <Link to='#' style={{textDecoration: 'none'}}>
                  {/*<Button className='connectButton'><Box sx={{*/}
                  {/*  fontFamily: 'Epilogue',*/}
                  {/*  fontStyle: 'normal',*/}
                  {/*  fontWeight: '700',*/}
                  {/*  fontSize: '16px',*/}
                  {/*  lineHeight: '28px',*/}
                  {/*  background: 'linear-gradient(174.11deg, #CE9400 4.67%, #FFD057 75.94%)',*/}
                  {/*  textFillColor: 'transparent',*/}
                  {/*  backgroundClip: 'text',*/}
                  {/*  flex: 'none',*/}
                  {/*  order: 1,*/}
                  {/*  flexGrow: 0,*/}
                  {/*  textTransform: 'none',*/}
                  {/*}}>{!isLoggedIn ? 'Connect Wallet' : '0x008475..55c55'}</Box></Button>*/}
                  <ConnectButton />

                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}