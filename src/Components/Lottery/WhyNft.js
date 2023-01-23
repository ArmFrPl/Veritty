import React from "react";
import {Box} from "@mui/material";
import '../../Styles/WhyNft.css';

export const WhyNft = () => {

  const diffs = [
    {
      classic: 'Unknown amount of tickets',
      nft: 'In total 10.000 tickets in NFT '
    },
    {
      classic: 'Unknown amount of winning tickets',
      nft: '910 winning spots. Watch all winnings on OpenSea in Real Time. '
    },
    {
      classic: 'Подставные выигрыши - неизвестно кто выиграл и как.',
      nft: 'Смарт контракт на EtherScanner. Мы используем классический смарт контракт минтинга. Все билеты раздаються в случайном порядке.'
    },
    {
      classic: 'Возможность махинаций. Классическая лотерея может довыпускать билеты во время розыгрыша.',
      nft: 'Благодаря использованию блокчейн и четко заявленного количества участников и победителей возможность махинаций отсутсвует.'
    },
    {
      classic: 'Не понятно как забирать выигрыш',
      nft: 'Деньги поступают на кошелек с которого была сминчесна выигрышная НФТ в течении одного часа.'
    },
    {
      classic: 'Нет гарантии выплаты',
      nft: 'У нас открытый Дискорд канал для всех участников. В случае первой не выплаты - мы потеряем репутацию моментально . Это и есть ваша гарантия'
    },
    {
      classic: 'Отсутсиве кониденциальности',
      nft: 'Полная конфиденциальность'
    },
  ]

  return (
    <>
      <Box className='whyCont' sx={{
        display: {xs: 'flex', md: 'none'},
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: '42px',
          color: '#FCFCFC',
          mb: '35px',
        }}>Why NFT Lottery?</Box>
        <Box className='whyHeader'>
          <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%',}}>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15.5px",
              lineHeight: '21px',
              color: '#FCFCFC',
              mr: '20px',
              mb: '20px'
            }}>Classic Lottery</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15.5px",
              lineHeight: '21px',
              color: '#FCFCFC',
              ml: '20px',
            }}>NFT Lottery</Box>
          </Box>
          <div className='divider mobileDiv'></div>
          <div className='divider mobileHor'></div>

          {/*<table className='diffs' style={{marginTop: '29px', width: '100%'}}>*/}
          {/*  <tbody>*/}
          {/*  {*/}
          {/*    diffs?.map((d, index) => (*/}
          {/*      <tr key={index} style={{*/}
          {/*        display: "flex",*/}
          {/*        marginTop: '40px',*/}
          {/*        // marginLeft: '3%',*/}
          {/*        justifyContent: 'space-around',*/}
          {/*        maxHeight: '110px'*/}
          {/*      }}>*/}
          {/*        <td className='diffsRow mobileRows'*/}
          {/*            style={{textAlign: 'right', width: '40%', marginRight: '0%'}}>{d.classic}</td>*/}
          {/*        <td className='diffsRow mobileRows' style={{textAlign: 'left', width: '40%', marginLeft: '0%'}}>{d.nft}</td>*/}
          {/*      </tr>*/}
          {/*    ))*/}
          {/*  }*/}
          {/*  </tbody>*/}
          {/*</table>*/}
          <Box sx={{
            position: 'relative',
            bottom: '150px',
          }}>
          {
            diffs.map((d, index) => (
              <Box key={index} sx={{
                display: "flex",
                marginTop: '50px',
                justifyContent: 'space-around',
                maxHeight: '110px'
              }}>
                <Box className='diffsRow mobileRows' sx={{textAlign: 'right', width: '35%', marginRight: '0%'}}>{d.classic}</Box>
                <Box className='diffsRow mobileRows' sx={{textAlign: 'left', width: '35%', marginLeft: '0%'}}>{d.nft}</Box>
              </Box>
            ))
          }
          </Box>
          <div className='divider bottomDiv mobileDiv'></div>

        </Box>
      </Box>

      {/*  desktop  */}
      <Box className='whyCont' sx={{
        display: {xs: 'none', md: 'flex'},
      }}>
        <Box sx={{
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "28px",
          lineHeight: '42px',
          color: '#FCFCFC',
          mb: '35px',
        }}>Why NFT Lottery?</Box>
        <Box className='whyHeader'>
          <Box sx={{display: 'flex'}}>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: '33px',
              color: '#FCFCFC',
              mr: '50px',
              mb: '20px'
            }}>Classic Lottery</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: '33px',
              color: '#FCFCFC',
              ml: '50px',
            }}>NFT Lottery</Box>
          </Box>
          <div className='divider'></div>
          <div className='divider dividerHor'></div>

          <table className='diffs' style={{marginTop: '29px', width: '100%'}}>
            <tbody>
            {
              diffs?.map((d, index) => (
                <tr key={index} style={{
                  display: "flex",
                  marginTop: '40px',
                  marginLeft: '3%',
                  justifyContent: 'center',
                  maxHeight: '110px'
                }}>
                  <td className='diffsRow'
                      style={{textAlign: 'right', width: '28%', marginRight: '3%'}}>{d.classic}</td>
                  <td className='diffsRow' style={{textAlign: 'left', width: '28%', marginLeft: '3%'}}>{d.nft}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          <div className='divider bottomDiv'></div>

        </Box>
      </Box>
    </>
  )
}