import React from "react";
import {Box, Divider, Typography} from "@mui/material";
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
      classic: 'Fake winnings - there is no information as to who won and how',
      nft: 'EtherScanner smart contract. We use the classic minting smart contract and distribute tickets randomly'
    },
    {
      classic: 'Possibility of machinations. Additional tickets may be issued during the Classic Lottery draw',
      nft: 'Machinations are not possible due to the use of blockchain and the clear identification of participants and winners'
    },
    {
      classic: 'The way to take the winnings is not clear',
      nft: 'A winner’s wallet is credited with the money within one hour'
    },
    {
      classic: 'Payments are not guaranteed',
      nft: 'We have an open Discord channel for all participants. If the first payment isn’t made, we will lose our reputation immediately. This gives you a guarantee'
    },
    {
      classic: 'No confidentiality',
      nft: 'Full confidentiality'
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
        <Box className='whyHeader' sx={{mb: '40px'}}>
          <Box sx={{display: 'flex', justifyContent: 'space-around', width: '100%', mb: '20px'}}>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15.5px",
              lineHeight: '21px',
              color: '#FCFCFC',
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
            }}>Classic Lottery</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "15.5px",
              lineHeight: '21px',
              color: '#FCFCFC',
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
            }}>NFT Lottery</Box>
          </Box>

          <Divider sx={{width: '90%', borderStyle: 'dashed', borderColor: '#FFD057',}}/>
          <Divider orientation='vertical' sx={{
            height: '680px',
            borderStyle: 'dashed',
            borderColor: '#FFD057',
            position: 'absolute',
            mb: '20px'
          }}/>
          <Box sx={{mb: '20px'}}>
            {
              diffs.map((d, index) => (
                <Box key={index} sx={{
                  display: "flex",
                  marginTop: '30px',
                  justifyContent: 'space-around',
                  maxHeight: '110px'
                }}>
                  <Box className='diffsRow mobileRows'
                       sx={{textAlign: 'right', width: '150px', marginRight: '20px'}}>{d.classic}</Box>
                  <Box className='diffsRow mobileRows'
                       sx={{textAlign: 'left', width: '150px', marginLeft: '20px'}}>{d.nft}</Box>
                </Box>
              ))
            }
          </Box>
          <Divider sx={{
            width: '50%',
            borderStyle: 'dashed',
            borderColor: '#FFD057',
          }}/>
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
          <Box sx={{display: 'flex', mb: '20px'}}>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: '33px',
              color: '#FCFCFC',
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}>Classic Lottery</Box>
            <Box sx={{
              fontFamily: 'Epilogue',
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: '33px',
              color: '#FCFCFC',
              width: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}>NFT Lottery</Box>
          </Box>
          <Divider sx={{width: '900px', borderStyle: 'dashed', borderColor: '#FFD057',}}/>
          <Divider orientation='vertical' sx={{
            height: '700px',
            borderStyle: 'dashed',
            borderColor: '#FFD057',
            position: 'absolute',
            mb: '200px'
          }}/>
          <table className='diffs' style={{width: '100%', marginBottom: '40px'}}>
            <tbody>
            {
              diffs?.map((d, index) => (
                <tr key={index} style={{
                  display: "flex",
                  marginTop: '40px',
                  justifyContent: 'center',
                  maxHeight: '110px'
                }}>
                  <td className='diffsRow'
                      style={{textAlign: 'right', width: '500px', marginRight: '50px'}}>{d.classic}</td>
                  <td className='diffsRow' style={{textAlign: 'left', width: '500px', marginLeft: '50px'}}>{d.nft}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          {/*<div className='divider bottomDiv'></div>*/}
          <Divider sx={{width: '500px', borderStyle: 'dashed', borderColor: '#FFD057', mb: '180px'}}/>

        </Box>
      </Box>
    </>
  )
}