import React, {useEffect, useState} from 'react';
import {Box, Button, Fade, Icon, Link, Popover, Snackbar, Typography} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import ToggleButtons from "./ToggleButtons";
import {SocialLinks} from "./SocialLinks";
import '../Styles/Header.css'
import MintTicketImg from '../Images/Tickets/Ticket MINT.svg';
import MintTicketWinner from '../Images/Tickets/Winner Ticket MINT.svg';
import MintTicketFront from '../Images/mintTickertFront.png';
import MintTicketZero from '../Images/Tickets/0.png';
import MintTicketHundred from '../Images/Tickets/100.png';
import MintTicketTwoHundred from '../Images/Tickets/200.png';
import MintTicketFiveHundred from '../Images/Tickets/500.png';
import MintTicketThousand from '../Images/Tickets/1000.png';
import MintTicketTwoThousand from '../Images/Tickets/2500.png';
import MintTicketFiveThousand from '../Images/Tickets/5000.png';
import MintTicketTenThousand from '../Images/Tickets/10000.png';
import MintTicketTwentyThousand from '../Images/Tickets/20000.png';
import MintTicketFiftyThousand from '../Images/Tickets/50000.png';
import GoToIcon from "../Images/goToIcon.svg";
import TryAgainImg from '../Images/Tickets/redo.svg'
import {useSigner} from "wagmi";
import {ethers} from "ethers";
import RaffleImpl from "../RaffleImpl.json";
import {ethAddress} from "../constants";
import {useWeb3Modal} from "@web3modal/react";
import axios from "axios";

export const Header = ({isLoggedIn, view, setView, menuOpen, ticketCounts, userHistory, winningSum, setWinningSum, loading, setLoading}) => {
  const [isWinnerOpen, setWinnerOpen] = useState(false);
  const [winners, getWinners] = useState({});
  const [minted, setMinted] = useState(false);
  const [count, setCount] = useState(0);
  const [tokenId, setTokenId] = useState(0);

  const {isOpen, open, close} = useWeb3Modal();
  const signer = useSigner();
  const abi = RaffleImpl.abi;
  const contract = new ethers.Contract(ethAddress, abi, signer.data);
  // const isContractOpen = contract.isOpen();

  useEffect(() => {
    const fetchWinnings = async () => {
      const response = await axios.get('https://veritty-backend.herokuapp.com/lastTxns');
      getWinners(response.data);
    }
    fetchWinnings();
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count >= winners.length-1) {
        setCount(0);

      } else {
        setCount(count + 1);
      }
      setWinnerOpen(true);

    },   10  * 1000); // 3 minutes in milliseconds
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  const convertToTime = (timestamp) => {
    let date = new Date(timestamp);
    date =date.getHours()+
      ":"+date.getMinutes()
    return date;
  }

  const handleCloseWinner = () => {
    setWinnerOpen(false)
  };
  const handleCloseMobileWinner = () => {
    setWinnerOpen(false)
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setMinted(false);
    }
  }, [minted])

  const getTicketImage = () => {
    switch (winningSum) {
      case 100:
        return MintTicketHundred;
      case 200:
        return MintTicketTwoHundred;
      case 500:
        return MintTicketFiveHundred;
      case 1000:
        return MintTicketThousand;
      case 2500:
        return MintTicketTwoThousand;
      case 5000:
        return MintTicketFiveThousand;
      case 10000:
        return MintTicketTenThousand;
      case 20000:
        return MintTicketTwentyThousand;
      case 50000:
        return MintTicketFiftyThousand;
    }
  }


  const getWinningTicketsCount = () => {
    let winningTicketsCount = 0;
    for (let i = 0; i < ticketCounts.length - 1; i++) {
      winningTicketsCount += parseInt(ticketCounts[i]);
    }
    return (winningTicketsCount.toString().split(''));
  }

  const winningTickets = getWinningTicketsCount();
  if (winningTickets.length === 2) {
    winningTickets.unshift('0')
  } else if (winningTickets.length === 1) {
    winningTickets.unshift('0')
    winningTickets.unshift('0')
  }

  const mintTicket = async () => {
    setLoading(true);
    const entranceFee = await contract.entranceFee();
    const txResponse = await contract.enterRaffle({value: entranceFee, gasLimit: 800000})
    const txReceipt = await txResponse.wait(1)
    const event = txReceipt?.events?.filter(event => event.event === 'WinnerChosen');
    setTokenId(event['0'].args['tokenId'].toNumber());
    console.log(event)
    setWinningSum(event['0'].args['sum'].toNumber());
    setMinted(true);
    setLoading(false);
  }

  return (
    <>
      <Box sx={{display: {xs: 'flex', md: 'none'}, flexDirection: 'column', alignItems: 'center'}}>
        <Box className='mobHeaderCont' sx={{mt: '12px'}}>
          <SocialLinks menuOpen={menuOpen}/>
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
          <Box sx={{
            position: 'relative',
            boxShadow: '0px 0px 63.4864px #5900EB',
            borderRadius: '24px',
            mt: '37px',
            mb: '81px',
          }}>
            {
              !minted &&
              <>
                <Button onClick={isLoggedIn ? mintTicket : open} sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(93.96deg, #FFAC33 4.32%, #FFE53B 44.39%, #FAA933 103.38%), linear-gradient(94.1deg, #FFE53B 17.43%, #FFE53B 56.82%, #FAA933 96.21%)',
                  borderRadius: '8px',
                  width: '234px',
                  height: '40px',
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#000000',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  zIndex: 50,
                  position: 'absolute',
                  bottom: '110px',
                  left: '22px',
                }}> MINT TICKET 0.059 ETH </Button>
                <Box component='span' sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#F8F8F8',
                  position: 'absolute',
                  left: '25px',
                  top: '25px',
                  zIndex: 10,
                  width: '227px',
                  textAlign: 'center',
                }}>Mint NFT and get money to your wallet during 1 hour</Box>
                <Box component={"img"} src={MintTicketFront} className={'mintTicketFront' && loading ? 'animate' : null}
                     sx={{
                       position: 'absolute',
                       left: '15px',
                       top: '45px',
                       width: '254px'
                     }}/>
                <Box sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#F8F8F8',
                  display: 'flex',
                  position: 'absolute',
                  top: '430px',
                  left: '32px',
                }}>{winningTickets[0]}</Box>
                <Box sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#F8F8F8',
                  display: 'flex',
                  position: 'absolute',
                  top: '430px',
                  left: '72px',
                }}>{winningTickets[1]}</Box>
                <Box sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#F8F8F8',
                  display: 'flex',
                  position: 'absolute',
                  top: '430px',
                  left: '112px',
                }}>{winningTickets[2]}</Box>
              </>
            }
            {
              minted &&
              <>
                {winningSum === 0 ?
                  <>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '22px',
                      color: '#FFD057',
                      position: 'absolute',
                      top: '22px',
                      width: '100%',
                      textAlign: 'center',
                    }}>YOU WIN 0 USTD</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#F8F8F8',
                      position: 'absolute',
                      top: '45px',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      zIndex: 10,
                    }}><Box component='span' sx={{width: '211px', display: 'flex',}}>You have a chance to win on the 2nd
                      Round! </Box></Box>
                    <Box component={"img"} src={MintTicketZero}
                         className={'mintTicketFront' && loading ? 'animate' : null} sx={{
                      position: 'absolute',
                      left: '15px',
                      top: '35px',
                      width: '254px',
                      transition: '.2s ease-in-out',
                      "&:hover": {
                        transform: 'scale(1.1)',
                      }
                    }}/>
                  </>
                  : <>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '22px',
                      color: '#FFD057',
                      position: 'absolute',
                      top: '22px',
                      width: '100%',
                      textAlign: 'center',
                    }}>YOU WIN!</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '32px',
                      lineHeight: '36px',
                      color: '#FFD057',
                      position: 'absolute',
                      top: '45px',
                      width: '100%',
                      textAlign: 'center',
                      zIndex: 10,
                    }}>{winningSum} <Box component='span' sx={{fontSize: '24px'}}>USTD</Box></Box>
                    <Box component={"img"} src={getTicketImage()}
                         className={'mintTicketFront' && loading ? 'animateWin' : null} sx={{
                      position: 'absolute',
                      left: '15px',
                      top: '35px',
                      width: '254px',
                      transition: '.2s ease-in-out',
                      "&:hover": {
                        transform: 'scale(1.1)',
                      }
                    }}/>
                  </>
                }
                <Button onClick={isLoggedIn ? mintTicket : open} className='mintButton' sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(93.96deg, #FFAC33 4.32%, #FFE53B 44.39%, #FAA933 103.38%), linear-gradient(94.1deg, #FFE53B 17.43%, #FFE53B 56.82%, #FAA933 96.21%)',
                  borderRadius: '8px',
                  width: '234px',
                  height: '40px',
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#000000',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  position: 'absolute',
                  bottom: '150px',
                  left: '22px',
                  zIndex: 10,
                  textTransform: 'none',
                }}> <Icon><img src={TryAgainImg} alt='tryAgain'/></Icon> Try Again </Button>
                <Link href={`https://testnets.opensea.io/assets/goerli/0x3cc6c2fb7b837eb2c100285a3aca108d245b178e/${tokenId}`}><Button className='openSeaButton' sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  borderRadius: '8px',
                  width: '234px',
                  height: '40px',
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#FCFCFC',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  position: 'absolute',
                  bottom: '105px',
                  left: '22px',
                  zIndex: 10,
                  textTransform: 'none',
                }}> Look on OpenSea </Button></Link>

                <Box component='span' sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '73px',
                  color: '#FFD057',
                  position: 'absolute',
                  top: '410px',
                  left: '80px'
                }}>
                  Ticket # {('00000' + userHistory.totalTickets).slice(-5)}
                </Box>
              </>
            }
            <Box component={"img"} sx={{width: '278px'}} src={!minted ? MintTicketImg : MintTicketWinner} className='mintTicket'/>
          </Box>
          <Snackbar
            className='popupMobile'
            open={isWinnerOpen}
            onClose={handleCloseWinner}
            autoHideDuration={150000}
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
            sx={{
              display: {xs: 'flex', md: 'none'},
              width: '252px',
              '> .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root': {
                width: '252px'
              }
            }}
            message={
              <Box className='headerModalCont' sx={{
                width: '252px',
                height: '65px',
                background: '#101010',
                border: '1px solid #00DF74',
                borderRadius: '16px',
                display: 'flex',
              }}>
                <Box className="headerModalBody">
                  <CheckCircleOutlineRoundedIcon
                    sx={{color: '#00DF74', mr: '14px', pl: '10px', width: '22px', height: '22px'}}/>
                  <Box>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '10px',
                      lineHeight: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                    }}>WINNER</Typography>
                    <Typography sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '12px',
                      lineHeight: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      color: winners[count]?.sum < 500 ? '#F8F8F8' : '#00DF74',
                    }}>{winners[count]?.userId.slice(0, 10) + "…"}</Typography>
                    <Link href={winners[count]?.link} sx={{textDecoration: 'none', color: '#F8F8F8', opacity: '0.7',}}><Typography sx={{
                      "&:hover": {color: '#FFD057 !important'},
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '8px',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                    }}>View on Etherscan <img src={GoToIcon} alt='arrow' height={8} width={8}
                                              style={{marginLeft: '5px'}}/></Typography></Link>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'end',
                    margin: '0 5px 20px 8px'
                  }}>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '10px',
                      display: 'flex',
                      lineHeight: '22px',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: '#F8F8F8',
                      opacity: '0.7',
                    }}>{convertToTime(winners[count]?.timestamp)}</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: '700',
                      fontSize: '15px',
                      lineHeight: '1',
                      display: 'flex',
                      alignItems: 'center',
                      letterSpacing: '0.01em',
                      color: winners[count]?.sum < 500 ? '#F8F8F8' : '#00DF74',
                    }}>{winners[count]?.sum} USDT</Box>
                  </Box>
                </Box>

                <Box className='headerModalHeader'>
                  <CloseIcon onClick={handleCloseWinner} cursor='pointer'/>
                </Box>
              </Box>
            }
          />
        </Box>
        <ToggleButtons isLoggedIn={isLoggedIn} view={view} setView={setView} menuOpen={menuOpen}/>
      </Box>

      {/*desktop*/}

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
          <Box sx={{
            position: 'relative',
            boxShadow: '0px 0px 63.4864px #5900EB',
            borderRadius: '24px',
            transitionDuration: '.5s',
            '&:hover': {
              boxShadow: '0px 0px 130.4864px #5900EB',
            }
          }}>
            {
              !minted &&
              <>
                <Button onClick={isLoggedIn ? mintTicket : open} className='mintButton' sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(93.96deg, #FFAC33 4.32%, #FFE53B 44.39%, #FAA933 103.38%), linear-gradient(94.1deg, #FFE53B 17.43%, #FFE53B 56.82%, #FAA933 96.21%)',
                  borderRadius: '8px',
                  width: '234px',
                  height: '40px',
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#000000',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  position: 'absolute',
                  bottom: '110px',
                  left: '22px',
                  zIndex: 10,
                  transition: '.2s ease-in-out',
                  "&:hover": {
                    transform: 'scale(1.1)',
                  }
                }}> MINT TICKET 0.059 ETH </Button>

                <Box component='span' sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#F8F8F8',
                  position: 'absolute',
                  left: '25px',
                  top: '25px',
                  zIndex: 10,
                  width: '227px',
                  textAlign: 'center',
                }}>Mint NFT and get money to your wallet during 1 hour</Box>
                <Box component={"img"} src={MintTicketFront} className={'mintTicketFront' && loading ? 'animate' : null}
                     sx={{
                       position: 'absolute',
                       left: '15px',
                       top: '45px',
                       width: '254px',
                       transition: '.2s ease-in-out',
                       "&:hover": {
                         transform: 'scale(1.1)',
                       }
                     }}/>
                <Box sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#F8F8F8',
                  display: 'flex',
                  position: 'absolute',
                  top: '430px',
                  left: '32px',
                }}>{winningTickets[0]}</Box>
                <Box sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#F8F8F8',
                  display: 'flex',
                  position: 'absolute',
                  top: '430px',
                  left: '72px',
                }}>{winningTickets[1]}</Box>
                <Box sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#F8F8F8',
                  display: 'flex',
                  position: 'absolute',
                  top: '430px',
                  left: '113px',
                }}>{winningTickets[2]}</Box>
              </>
            }
            {
              minted &&
              <>
                {winningSum === 0 ?
                  <>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '22px',
                      color: '#FFD057',
                      position: 'absolute',
                      top: '22px',
                      width: '100%',
                      textAlign: 'center',
                    }}>YOU WIN 0 USTD</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#F8F8F8',
                      position: 'absolute',
                      top: '45px',
                      width: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      zIndex: 10,
                    }}><Box component='span' sx={{width: '211px', display: 'flex',}}>You have a chance to win on the 2nd
                      Round! </Box></Box>
                    <Box component={"img"} src={MintTicketZero}
                         className={'mintTicketFront' && loading ? 'animateWin' : null} sx={{
                      position: 'absolute',
                      left: '15px',
                      top: '35px',
                      width: '254px',
                      transition: '.2s ease-in-out',
                      "&:hover": {
                        transform: 'scale(1.1)',
                      }
                    }}/>
                  </>
                  : <>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '20px',
                      lineHeight: '22px',
                      color: '#FFD057',
                      position: 'absolute',
                      top: '22px',
                      width: '100%',
                      textAlign: 'center',
                    }}>YOU WIN!</Box>
                    <Box sx={{
                      fontFamily: 'Epilogue',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '32px',
                      lineHeight: '36px',
                      color: '#FFD057',
                      position: 'absolute',
                      top: '45px',
                      width: '100%',
                      textAlign: 'center',
                      zIndex: 10,
                    }}>{winningSum} <Box component='span' sx={{fontSize: '24px'}}>USTD</Box></Box>
                    <Box component={"img"} src={getTicketImage()}
                         className={'mintTicketFront' && loading ? 'animateWin' : null} sx={{
                      position: 'absolute',
                      left: '15px',
                      top: '35px',
                      width: '254px',
                      transition: '.2s ease-in-out',
                      "&:hover": {
                        transform: 'scale(1.1)',
                      }
                    }}/>
                  </>
                }
                <Button onClick={isLoggedIn ? mintTicket : open} className='mintButton' sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(93.96deg, #FFAC33 4.32%, #FFE53B 44.39%, #FAA933 103.38%), linear-gradient(94.1deg, #FFE53B 17.43%, #FFE53B 56.82%, #FAA933 96.21%)',
                  borderRadius: '8px',
                  width: '234px',
                  height: '40px',
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#000000',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  position: 'absolute',
                  bottom: '150px',
                  left: '22px',
                  zIndex: 10,
                  textTransform: 'none',
                  transition: '.2s ease-in-out',
                  "&:hover": {
                    transform: 'scale(1.1)',
                  }
                }}> <Icon><img src={TryAgainImg} alt='tryAgain'/></Icon> Try Again </Button>
                <Link href={`https://testnets.opensea.io/assets/goerli/0x3cc6c2fb7b837eb2c100285a3aca108d245b178e/${tokenId}`}><Button className='openSeaButton' sx={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  borderRadius: '8px',
                  width: '234px',
                  height: '40px',
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '28px',
                  color: '#FCFCFC',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  position: 'absolute',
                  bottom: '105px',
                  left: '22px',
                  zIndex: 10,
                  textTransform: 'none',
                  transition: '.2s ease-in-out',
                  "&:hover": {
                    transform: 'scale(1.1)',
                  }
                }}> Look on OpenSea </Button></Link>

                <Box component='span' sx={{
                  fontFamily: 'Epilogue',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '73px',
                  color: '#FFD057',
                  position: 'absolute',
                  top: '410px',
                  left: '80px'
                }}>
                  Ticket # {('00000' + userHistory.totalTickets).slice(-5)}
                </Box>
              </>
            }
            <Box component={"img"} sx={{width: '278px'}} src={!minted ? MintTicketImg : MintTicketWinner} className='mintTicket'/>
          </Box>
          {
            winners.length &&
            <Snackbar
              className='popup'
              open={isWinnerOpen}
              onClose={handleCloseWinner}
              autoHideDuration={60 * 1000}
              anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
              sx={{
                display: {xs: 'none', md: 'flex'},
                width: '343px',
                padding: 0,
                '> .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root': {
                  width: '343px',
                  borderRadius: '16px',
                  padding: 0,
                }
              }}
              message={
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
                        color: winners[count]?.sum < 500 ? '#F8F8F8' : '#00DF74',
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
                      }}>{winners[count]?.userId.slice(0, 10) + "…"}</Typography>
                      <Link href={winners[count]?.link} sx={{textDecoration: 'none', color: '#F8F8F8', opacity: '0.7',}}><Typography sx={{
                        fontFamily: 'Epilogue',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                        letterSpacing: '0.01em',
                      }}>View on Etherscan <img src={GoToIcon} alt='arrow' height={8} width={8} style={{marginLeft: '5px'}}/></Typography></Link>
                    </Box>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      margin: '0 5px 20px 8px'
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
                      }}>{convertToTime(winners[count]?.timestamp)}</Box>
                      <Box sx={{
                        fontFamily: 'Epilogue',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '19px',
                        lineHeight: '1',
                        display: 'flex',
                        alignItems: 'center',
                        letterSpacing: '0.01em',
                        color: winners[count]?.sum < '500' ? '#F8F8F8' : '#00DF74',
                      }}>{winners[count]?.sum} USDT</Box>
                    </Box>
                  </Box>

                  <Box className='headerModalHeader'>
                    <CloseIcon onClick={handleCloseWinner} cursor='pointer'/>
                  </Box>
                </Box>
              }
            />
          }
        </Box>
        <ToggleButtons isLoggedIn={isLoggedIn} view={view} setView={setView}/>
      </Box>
    </>
  )
}