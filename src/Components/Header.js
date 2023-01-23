import React from 'react';
import {Box, Fade, Popover, Typography} from "@mui/material";
import '../Styles/Header.css'
import MintTicketImg from '../Images/Tickets/Mint Ticket.png';
import ToggleButtons from "./ToggleButtons";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import GoToIcon from "../Images/goToIcon.svg";
import {SocialLinks} from "./SocialLinks";

export const Header = ({isLoggedIn, view, setView, menuOpen}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenWinning = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseWinning = () => {
    setAnchorEl(null);
  };

  const openWinning = Boolean(anchorEl);
  const id = openWinning ? 'simple-popover' : undefined;

  return (
    <>
      <Box sx={{display: {xs: 'flex', md: 'none'}, flexDirection: 'column', alignItems: 'center'}}>
        <Box className='mobHeaderCont' sx={{mt: '12px'}}>
          <SocialLinks menuOpen={menuOpen} />
          <Box className='mobHeaderText'>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "26px",
              color: "#F8F8F8",
              mb: '12px',
              display: 'flex',
              justifyContent: 'center',
            }}>First in the world transparent and honest</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "48.6px",
              lineHeight: "32px",
              color: "#FFFFFF",
              mb: '44px'
            }}>NFT LOTTERY</Box>
            <Box className='prizeFund mobile'>
              <Box sx={{
                fontFamily: 'Epilogue',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16.5px",
                lineHeight: '31px',
                background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}>Prize fund</Box>
              <Box sx={{
                fontFamily: 'Epilogue',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "22px",
                lineHeight: '31px',
                color: '#FFD057',
              }}>247.500 USTD</Box>
            </Box>
          </Box>
          <Box component={"img"} src={MintTicketImg} width={354} height={541} onClick={handleOpenWinning}/>
          <Popover
            id={id}
            open={openWinning}
            anchorEl={anchorEl}
            onClose={handleCloseWinning}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent !important'
            }}
          >
            <Fade in={openWinning}>
              <Box className='headerModalCont' sx={{
                width: '343px',
                height: '88px',
                background: '#101010',
                border: '1px solid #00DF74',
                borderRadius: '16px',
                display: 'flex',
              }}>
                <Box className="headerModalBody">
                  <CheckCircleOutlineRoundedIcon sx={{color: '#00DF74', mr: '15px', pl: '24px',}}/>
                  <Box>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '14px',
                      lineHeight: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                    }}>WINNER</Typography>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#F8F8F8',
                    }}>0x038467..33</Typography>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                      opacity: '0.7',
                    }}>View on Etherscan <img src={GoToIcon} alt='arrow' height={8} width={8}
                                              style={{marginLeft: '5px'}}/></Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    margin: '0 5px 20px 20px'
                  }}>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      display: 'flex',
                      lineHeight: '22px',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                      opacity: '0.7',
                    }}>4 min ago</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '20px',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                    }}>50 USDT</Box>
                  </Box>
                </Box>

                <Box className='headerModalHeader'>
                  <CloseIcon onClick={handleCloseWinning} cursor='pointer'/>
                </Box>
              </Box>
            </Fade>
          </Popover>
        </Box>
        <ToggleButtons isLoggedIn={isLoggedIn} view={view} setView={setView} menuOpen={menuOpen}/>
      </Box>
      <Box sx={{display: {xs: 'none', md: 'flex'}, flexDirection: 'column', alignItems: 'center'}}>
        <Box className='headerCont'>
          <Box className='headerText'>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "43px",
              color: "#F8F8F8",
              mb: '12px'
            }}>First in the world transparent and honest</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "82.5px",
              lineHeight: "55px",
              color: "#FFFFFF",
              mb: '44px'
            }}>NFT LOTTERY</Box>
            <Box className='prizeFund'>
              <Box sx={{
                fontFamily: 'Epilogue',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "27.8px",
                lineHeight: '52px',
                background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}>Prize fund</Box>
              <Box sx={{
                fontFamily: 'Epilogue',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "37.1px",
                lineHeight: '52px',
                color: '#FFD057',
              }}>247.500 USTD</Box>
            </Box>
          </Box>
          <Box component={"img"} src={MintTicketImg} onClick={handleOpenWinning}/>
          <Popover
            id={id}
            open={openWinning}
            anchorEl={anchorEl}
            onClose={handleCloseWinning}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent !important'
            }}
          >
            <Fade in={openWinning}>
              <Box className='headerModalCont' sx={{
                width: '343px',
                height: '88px',
                background: '#101010',
                border: '1px solid #00DF74',
                borderRadius: '16px',
                display: 'flex',
              }}>
                <Box className="headerModalBody">
                  <CheckCircleOutlineRoundedIcon sx={{color: '#00DF74', mr: '15px', pl: '24px',}}/>
                  <Box>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '14px',
                      lineHeight: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                    }}>WINNER</Typography>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '16px',
                      lineHeight: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      color: '#F8F8F8',
                    }}>0x038467..33</Typography>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                      opacity: '0.7',
                    }}>View on Etherscan <img src={GoToIcon} alt='arrow' height={8} width={8}
                                              style={{marginLeft: '5px'}}/></Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    margin: '0 5px 20px 20px'
                  }}>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      display: 'flex',
                      lineHeight: '22px',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                      opacity: '0.7',
                    }}>4 min ago</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '20px',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                    }}>50 USDT</Box>
                  </Box>
                </Box>

                <Box className='headerModalHeader'>
                  <CloseIcon onClick={handleCloseWinning} cursor='pointer'/>
                </Box>
              </Box>
            </Fade>
          </Popover>
        </Box>
        <ToggleButtons isLoggedIn={isLoggedIn} view={view} setView={setView}/>
      </Box>
    </>
  )
}