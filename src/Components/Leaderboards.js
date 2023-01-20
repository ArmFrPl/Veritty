import React, {useRef, useState} from "react";
import {Box, Icon, InputBase} from "@mui/material";
import '../Styles/Leaderboards.css';
import GoDown from '../Images/goDown.svg';
import {TableRow} from "./TableRow";
import {TableRowWithAvatar} from "./TableRowWithAvatar";

export const Leaderboards = () => {
  const [inputText, setInputText] = useState("");
  const leadersRef = useRef(null)

  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  }

  const scrollToBottom = () => {
    leadersRef.current?.scrollIntoView({behavior: "smooth", block: 'nearest', inline: 'start'})
  }


  const leaders = [
    {
      winning: '20.000 USTD',
      id: '0x017849..671st'
    },
    {
      winning: '10.000 USTD',
      id: '0x017849..672nd'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..673rd'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..674th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..675th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..676th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..677th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..678th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..679th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..6710th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..6711th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..6712th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..6713th'
    },
    {
      winning: '5.000 USTD',
      id: '0x017849..6714th'
    },
    {
      winning: '2.500 USTD',
      id: '0x017849..6715th'
    },
    {
      winning: '2.500 USTD',
      id: '0x017849..6716th'
    },
    {
      winning: '2.500 USTD',
      id: '0x017849..6717th'
    },
    {
      winning: '1.500 USTD',
      id: '0x017849..6718th'
    },
    {
      winning: '1.500 USTD',
      id: '0x017849..6719th'
    },
    {
      winning: '1.000 USTD',
      id: '0x017849..6720th'
    },
    {
      winning: '500 USTD',
      id: '0x017849..6721st'
    },
    {
      winning: '200 USTD',
      id: '0x017849..6722nd'
    },
    {
      winning: '100 USTD',
      id: '0x017849..6723rd'
    },
    {
      winning: '50 USTD',
      id: '0x017849..6724th'
    },
    {
      winning: '50 USTD',
      id: '0x017849..6725th'
    },
  ];

  const filteredLeaders = leaders.filter((el) => {
    console.log(el.id.toLowerCase())
    return inputText === '' ? el : el.id.toLowerCase().includes(inputText);
  })

  return (
    <Box className='leadersCont'>
      <Box sx={{
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "28px",
        lineHeight: '28px',
        background: 'linear-gradient(180deg, #FF9700 0%, #FFD057 66.15%), #FFD057',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      }}>LOTTERY RESULTS</Box>
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
      }}>Here you can find the information about our best players! They are already playing, earning and enjoying! Feel
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
            padding: '0 28px 0 30px',
            margin: '19px 0 17px 0',
            boxSizing: 'border-box',
          }}>
            {
              filteredLeaders?.map((l, index) => {
                if (index + 1 === 1) {
                  return (
                  <TableRowWithAvatar data={l} index={index} frameColor='#FFD057' />
                )
                } else if (index + 1 === 2) {
                  return (
                    <TableRowWithAvatar data={l} index={index} frameColor='#D9D9D9' />
                  )
                } else if (index + 1 === 3) {
                  return (
                    <TableRowWithAvatar data={l} index={index} frameColor='#C18640' />
                  )
                } else {
                  return (
                    <TableRow data={l} index={index} />
                  )
                }
              })
            }
            <div ref={leadersRef}/>
          </div>
          </tbody>
        </table>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={scrollToBottom}>
          <Icon sx={{width: '30px', height: '30px'}}><img src={GoDown} height={30} width={30}/></Icon>
        </Box>
      </Box>

      <div className='blankSpace'></div>
    </Box>
  )
}