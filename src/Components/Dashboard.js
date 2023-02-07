import React, {useRef} from "react";
import {Box, Button, Icon, Link} from "@mui/material";
import '../Styles/Dashboard.css';
import GoToIcon from "../Images/goToIcon.svg";
import GoDown from "../Images/goDown.svg";

export const Dashboard = ({ticketsRef, mobileTicketsRef, userHistory}) => {
  const dataRef = useRef(null);
  const mobileDataRef = useRef(null);

  const convertToDate = (timestamp) => {
    let date = new Date(timestamp * 1000);
    date = date.getDate() +
      "/" + (date.getMonth() + 1) +
      "/" + date.getFullYear() +
      " " + date.getHours() +
      ":" + date.getMinutes()
    return date;
  }

  const scrollToBottom = () => {
    dataRef.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }
  const mobileScrollToBottom = () => {
    mobileDataRef.current?.scrollIntoView({block: 'nearest', inline: 'start'})
  }

  return (
    <>
      <Box className='dashboardCont' ref={mobileTicketsRef} sx={{
        display: {xs: 'flex', md: 'none'}
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: '28px',
          background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}>YOUR DASHBOARD</Box>
        <Box sx={{
          width: '289px',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: '22px',
          color: '#F8F8F8',
          textAlign: 'center',
          mt: '32px',
        }}>Here you can find the information about our your tickets! </Box>
        <Box sx={{
          width: '90%',
          height: '128px',
          borderRadius: '10px',
          mt: '23px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          padding: '35px 0 0 32px',
          boxSizing: 'border-box',
        }}>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: '22px',
            color: '#F8F8F8',
            textAlign: 'left',
          }}>Total tickets: <Box component='span'
                                 sx={{
                                   color: '#FFAC33',
                                   fontSize: '14px',
                                   ml: '10px'
                                 }}>{userHistory.totalTickets || 0}</Box>
          </Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: '22px',
            color: '#F8F8F8',
            textAlign: 'left',
            mt: '13px',
          }}>Total winnings USDT: <Box component='span' sx={{
            color: '#FFAC33',
            fontSize: '14px',
            ml: '10px'
          }}>{userHistory.totalSum || 0} USDT</Box> </Box>
        </Box>
        <Box sx={{
          width: '90%',
          height: '214px',
          borderRadius: '10px',
          mt: '23px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: '28px',
            color: '#F8F8F8',
            textAlign: 'center',
            height: '57px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1.3px solid #FFD057'
          }}>
            Your History
          </Box>
          <Box sx={{
            width: '100%',
            height: '156px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box sx={{
              width: '100%',
              height: '100px',
              overflow: 'scroll',
              display: 'flex',
              justifyContent: 'center',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              }}}>
              <table className='history' style={{width: '85%'}}>
                <tbody>
                {
                  userHistory.txns?.map((h, index) => (
                    <tr style={{
                      display: "flex",
                      marginTop: '0px',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <Box component='td' className='historyRows'
                           sx={{
                             textAlign: 'left',
                             width: '4%',
                             marginRight: '15px',
                             fontSize: {xs: '14px', md: '18px'},
                             lineHeight: {xs: '28px', md: '35px'}
                           }}>{index + 1}</Box>
                      <Box component='td' className='historyRows bold'
                           sx={{
                             textAlign: 'left',
                             width: '60%',
                             fontSize: {xs: '16px', md: '20px'},
                             lineHeight: {xs: '22px', md: '28px'}
                           }}>{h.sum} USTD</Box>
                      <Box component={'td'} className='historyRows'
                           sx={{
                             textAlign: 'left',
                             width: '80%',
                             marginLeft: '30px',
                             fontSize: {xs: '14px', md: '18px'},
                             lineHeight: {xs: '28px', md: '35px'},
                           }}>{convertToDate(h.timestamp)}<Link href={h.link}><Icon sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#FFFFFF',
                        ml: '10px',
                        '&:hover': {filter: 'brightness(0) saturate(100%) invert(98%) sepia(64%) saturate(6121%) hue-rotate(314deg) brightness(103%) contrast(104%);'}
                      }}><img alt='arrow'
                              src={GoToIcon} height={10} width={10}/></Icon></Link></Box>
                    </tr>
                  ))
                }
                <div ref={mobileDataRef}/>
                </tbody>
              </table>
            </Box>
            <Button sx={{
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              mt: '10px',
            }}>
              <Icon sx={{width: '30px', height: '30px'}} onClick={mobileScrollToBottom}><img alt='arrow' src={GoDown} height={30} width={30}/></Icon>
            </Button>
          </Box>
        </Box>
        <div className='blankSpace'></div>
      </Box>


      {/*  Desktop */}


      <Box className='dashboardCont' ref={ticketsRef} sx={{
        display: {xs: 'none', md: 'flex'}
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: '35px',
          background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}>YOUR DASHBOARD</Box>
        <Box sx={{
          width: '365px',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '28px',
          color: '#F8F8F8',
          textAlign: 'center',
          mt: '32px',
        }}>Here you can find the information about our your tickets! </Box>
        <Box sx={{
          width: '435px',
          height: '128px',
          borderRadius: '10px',
          mt: '23px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          padding: '35px 0 0 32px',
          boxSizing: 'border-box',
          transitionDuration: '.3s',
          '&:hover': {
            boxShadow: '0px 0px 30px #fff8e6',
          }
        }}>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: '28px',
            color: '#F8F8F8',
            textAlign: 'left',
          }}>Total tickets: <Box component='span'
                                 sx={{
                                   color: '#FFAC33',
                                   fontSize: '18px',
                                   ml: '10px'
                                 }}>{userHistory.totalTickets || 0}</Box>
          </Box>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: '28px',
            color: '#F8F8F8',
            textAlign: 'left',
            mt: '13px',
          }}>Total winnings USDT: <Box component='span' sx={{
            color: '#FFAC33',
            fontSize: '18px',
            ml: '10px'
          }}>{userHistory.totalSum || 0} USTD</Box> </Box>
        </Box>
        <Box sx={{
          width: '435px',
          height: '214px',
          borderRadius: '10px',
          mt: '23px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          transitionDuration: '.3s',
          '&:hover': {
            boxShadow: '0px 0px 30px #fff8e6',
          }
        }}>
          <Box sx={{
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: '35px',
            color: '#F8F8F8',
            textAlign: 'center',
            height: '57px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '1.3px solid #FFD057'
          }}>
            Your History
          </Box>
          <Box sx={{
            width: '100%',
            height: '156px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box sx={{
              width: '100%',
              height: '100px',
              overflow: 'scroll',
              display: 'flex',
              justifyContent: 'center',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              }}}>
              <table className='history' style={{width: '75%'}}>
                <tbody>
                {
                  userHistory.txns?.map((h, index) => (
                    <tr style={{
                      display: "flex",
                      marginTop: '0px',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <td className='historyRows'
                          style={{textAlign: 'left', width: '4%', marginRight: '15px'}}>{index + 1}</td>
                      <td className='historyRows bold'
                          style={{textAlign: 'center', width: '62%',}}>{h.sum} USTD
                      </td>
                      <td className='historyRows'
                          style={{textAlign: 'left', width: '95%', marginLeft: '30px'}}>{convertToDate(h.timestamp)}
                        <Link
                          href={h.link}><Icon sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#FFFFFF',
                          ml: '10px',
                          '&:hover': {filter: 'brightness(0) saturate(100%) invert(98%) sepia(64%) saturate(6121%) hue-rotate(314deg) brightness(103%) contrast(104%);'}
                        }}><img alt='arrow'
                                src={GoToIcon} height={10} width={10}/></Icon></Link></td>
                    </tr>
                  ))
                }
                <div ref={dataRef}/>
                </tbody>
              </table>
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              cursor: 'pointer',
              mt: '10px',
            }}>
              <Icon sx={{width: '30px', height: '30px'}} onClick={scrollToBottom}><img alt='arrow' src={GoDown} height={30} width={30}/></Icon>
            </Box>
          </Box>
        </Box>
        <div className='blankSpace'></div>
      </Box>
    </>
  )
}