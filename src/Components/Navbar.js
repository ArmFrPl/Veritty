import React, {useEffect} from "react";
import '../Styles/Navbar.css';
import {AppBar, Box, Container, IconButton, Toolbar,} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Images/VERITTY.svg';
import {Link, useLocation} from "react-router-dom";
import {SocialLinks} from "./SocialLinks";
import {Web3Button} from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";

export const Navbar = ({isLoggedIn, faqRef, mobileFaqRef, setMenuOpen, menuOpen, winnersRef, mobileWinnersRef, mobileTicketsRef, ticketsRef}) => {

  const {pathname} = useLocation();

  const { isOpen, open, close } = useWeb3Modal();

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

  useEffect(() => {
    if(pathname === '/dashboard'){
      scrollToTickets();
    }else if(pathname === '/leaderboard'){
      scrollToWinners();
    }
  }, [pathname])

  return (
    <Box className='navbar' sx={{height: '64px'}}>
      <AppBar position="fixed">
        <Container maxWidth="xl" sx={{padding: 0}}>
          <Toolbar disableGutters sx={{alignItems: {xs: 'center', md: 'center'},}}>
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
                    <Web3Button />
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
                    <Link to='#dashboard' style={{textDecoration: 'none'}}
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
                    <Web3Button />
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
                <Link to='/leaderboard' replace style={{marginRight: '40px', textDecoration: 'none'}}
                      className='menuItem'>WINNERS</Link>
                {
                  isLoggedIn ? <Link to='/dashboard' replace style={{marginRight: '40px', textDecoration: 'none'}}
                                     className='menuItem'>TICKETS</Link> : <Link to='#' onClick={open} replace style={{marginRight: '40px', textDecoration: 'none'}}
                                                                                 className='menuItem'>TICKETS</Link>
                }
                {/*<Link to='/dashboard' replace style={{marginRight: '40px', textDecoration: 'none'}}*/}
                {/*      className='menuItem'>TICKETS</Link>*/}
                <Link to='#' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'
                      onClick={scrollToFaq}>FAQ</Link>
                <Link to='#' style={{marginRight: '40px', textDecoration: 'none'}} className='menuItem'>AUDIT</Link>
              </Box>
              <Box sx={{display: 'flex', alignItems: 'center'}}>
                <SocialLinks/>
                <Link to='#' style={{textDecoration: 'none', marginLeft: '43px'}}>
                  <Web3Button />
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}