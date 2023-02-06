import React, {useRef, useState} from "react";
import {Box, Button, Icon, InputBase} from "@mui/material";
import '../Styles/Leaderboards.css';
import GoDown from '../Images/goDown.svg';
import {TableRow} from "./TableRow";
import {TableRowWithAvatar} from "./TableRowWithAvatar";

export const Leaderboards = ({winnersRef, mobileWinnersRef, leaderboard}) => {
  const [inputText, setInputText] = useState("");
  const leadersRef = useRef(null);
  const mobileLeadersRef = useRef(null);

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const scrollToBottom = () => {
    leadersRef.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }
  const mobileScrollToBottom = () => {
    mobileLeadersRef.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }

  const filteredLeaders = leaderboard.filter((el) => {
    return inputText === '' ? el : el.id.toLowerCase().includes(inputText);
  })

  return (
    <>
      <Box className='leadersCont' ref={mobileWinnersRef} sx={{
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
        }}>LEADERBOARD</Box>
        <Box sx={{
          width: '289px',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: '22px',
          color: '#F8F8F8',
          textAlign: 'center',
          mt: '20px',
        }}>Here you can find the information about our best players! They are already playing, earning and enjoying!
          Feel
          free to join them!</Box>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '28px',
          background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057;',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          mt: '20px',
        }}>Top-100 lottery leaders</Box>
        <InputBase id="outlined-search" type="search" placeholder="Search a Wallet" onChange={inputHandler} sx={{
          color: 'white !important',
          width: '90%',
          padding: '12px 14px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          mt: '28px',
        }}/>
        <Box sx={{
          width: '90%',
          height: '665px',
          borderRadius: '10px',
          mt: '23px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
        }}>
          <table className='leaders' style={{width: '100%'}}>
            <tbody>
            <tr style={{
              display: "flex",
              justifyContent: 'space-between',
              height: '55px',
              alignItems: 'center',
              borderBottom: '1.3px solid #FFD057'
            }}>
              <th className='leaderTitle' style={{textAlign: 'center', width: '4%', marginLeft: '30px'}}>#</th>
              <th className='leaderTitle' style={{textAlign: 'center', width: '40%'}}>User address</th>
              <th className='leaderTitle' style={{textAlign: 'right', width: '28%', marginRight: '28px'}}>Won USDT</th>
            </tr>
            <div className='leaderTable' style={{
              height: '515px',
              overflow: 'scroll',
              width: '100%',
              padding: '0 28px 0 15px',
              margin: '19px 0 17px 0',
              boxSizing: 'border-box',
            }}>
              {
                filteredLeaders?.map((l, index) => {
                  if (index + 1 === 1) {
                    return (
                      <TableRowWithAvatar data={l} index={index} frameColor='#FFD057'/>
                    )
                  } else if (index + 1 === 2) {
                    return (
                      <TableRowWithAvatar data={l} index={index} frameColor='#D9D9D9'/>
                    )
                  } else if (index + 1 === 3) {
                    return (
                      <TableRowWithAvatar data={l} index={index} frameColor='#C18640'/>
                    )
                  } else {
                    return (
                      <TableRow data={l} index={index}/>
                    )
                  }
                })
              }
              <div ref={mobileLeadersRef} />
            </div>
            </tbody>
          </table>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <Button><Icon sx={{width: '30px', height: '30px'}} onClick={mobileScrollToBottom}><img alt='arrow' src={GoDown} height={30} width={30}/></Icon></Button>
          </Box>
        </Box>

        <div className='blankSpace'></div>
      </Box>


      {/*Desktop*/}


      <Box className='leadersCont' ref={winnersRef} sx={{
        display: {xs: 'none', md: 'flex'}
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: '28px',
          background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
          backgroundClip: 'text',
          textFillColor: 'transparent',
        }}>LEADERBOARD</Box>
        <Box sx={{
          width: '413px',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '28px',
          color: '#F8F8F8',
          textAlign: 'center',
          mt: '20px',
        }}>Here you can find the information about our best players! They are already playing, earning and enjoying!
          Feel
          free to join them!</Box>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "25.3px",
          lineHeight: '35px',
          background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057;',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          mt: '20px',
        }}>Top-100 lottery leaders</Box>
        <InputBase id="outlined-search" type="search" placeholder="Search a Wallet" onChange={inputHandler} sx={{
          color: 'white !important',
          width: '435px',
          padding: '12px 14px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          mt: '28px',
        }}/>
        <Box sx={{
          width: '435px',
          height: '665px',
          borderRadius: '10px',
          mt: '23px',
          background: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          transitionDuration: '.5s',
          '&:hover': {
            boxShadow: '0px 0px 30px #fff8e6',
          }
        }}>
          <table className='leaders' style={{width: '100%'}}>
            <tbody>
            <tr style={{
              display: "flex",
              justifyContent: 'space-between',
              height: '55px',
              alignItems: 'center',
              borderBottom: '1.3px solid #FFD057'
            }}>
              <th className='leaderTitle' style={{textAlign: 'center', width: '4%', marginLeft: '30px'}}>#</th>
              <th className='leaderTitle' style={{textAlign: 'center', width: '40%'}}>User address</th>
              <th className='leaderTitle' style={{textAlign: 'right', width: '28%', marginRight: '28px'}}>Won USDT</th>
            </tr>
            <Box className='leaderTable' sx={{
              height: '515px',
              overflow: 'scroll',
              width: '100%',
              padding: '0 28px 0 30px',
              margin: '19px 0 17px 0',
              boxSizing: 'border-box',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              }
            }}>
              {
                filteredLeaders?.map((l, index) => {
                  if (index + 1 === 1) {
                    return (
                      <TableRowWithAvatar data={l} index={index} frameColor='#FFD057'/>
                    )
                  } else if (index + 1 === 2) {
                    return (
                      <TableRowWithAvatar data={l} index={index} frameColor='#D9D9D9'/>
                    )
                  } else if (index + 1 === 3) {
                    return (
                      <TableRowWithAvatar data={l} index={index} frameColor='#C18640'/>
                    )
                  } else {
                    return (
                      <TableRow data={l} index={index}/>
                    )
                  }
                })
              }
              <div ref={leadersRef}/>
            </Box>
            </tbody>
          </table>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer'
          }} onClick={scrollToBottom}>
            <Icon sx={{width: '30px', height: '30px'}}><img alt='arrow' src={GoDown} height={30} width={30}/></Icon>
          </Box>
        </Box>

        <div className='blankSpace'></div>
      </Box>
    </>
  )
}