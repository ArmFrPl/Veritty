import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../Styles/ToggleButtons.css';
import {Link} from "react-router-dom";

export default function ToggleButtons({isLoggedIn, view, setView}) {

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <>
      <ToggleButtonGroup
        sx={{
          color: 'white',
          backgroundColor: '#FFFFFF1A',
          border: '1.5px solid #958C9F',
          borderRadius: '13px',
          width: '80%',
          height: '42px',
          boxShadow: '0px -6px 15px 0px #958c9f80',
          display: {xs: 'flex', md: 'none'},
          flexDirection: 'column',
        }}
        value={view}
        exclusive
        onChange={handleView}
        aria-label="page view"
        className='pageView'
      >
        <ToggleButtonGroup
          sx={{
            display: 'flex',
            mb: '12px',
            height: '42px',
          }}
          onChange={handleView}
          aria-label="page view"
          className='pageView'
          value={view}
        >
          <ToggleButton value="lottery" aria-label="Lottery" sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: '22px',
            borderRight: '2px solid #958C9F',
            borderBottomLeftRadius: '13px',
            borderTopLeftRadius: '13px',
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'inherit',
          }}>
            <Link to='/lottery' style={{
              width: 'inherit',
              height: 'inherit',
              position: 'absolute',
            }}></Link>
            LOTTERY
          </ToggleButton>
          <ToggleButton value="results" aria-label="Results" sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: '22px',
            borderRight: '2px solid #958C9F',
            padding: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'inherit',
          }}>
            <Link to='/results' style={{
              width: 'inherit',
              height: 'inherit',
              position: 'absolute',
            }}></Link>
            RESULTS
          </ToggleButton>
          <ToggleButton value="leaderboard" aria-label="Leaderboard" sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: '22px',
            borderRight: null,
            borderBottomRightRadius: '13px',
            borderTopRightRadius: '13px',
            padding: '0px 10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'inherit',
          }}>
            <Link to='/leaderboard' style={{
              width: 'inherit',
              height: 'inherit',
              position: 'absolute',
            }}></Link>
            LEADERBOARD
          </ToggleButton>
        </ToggleButtonGroup>

        {!isLoggedIn ? null :
          <ToggleButton value="dashboard" aria-label="Dashboard" sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            margin: '0 !important',
            lineHeight: '33px',
            borderBottomRightRadius: '13px',
            borderTopRightRadius: '13px',
            display: {xs: 'flex', md: 'none'},
            backgroundColor: '#FFFFFF1A',
            border: '1.5px solid #958C9F',
            borderRadius: '13px',
            width: '100%',
            height: '42px',
            padding: '11px 11px 8px 11px',
            boxShadow: '0px 6px 15px 0px #958c9f80',
          }}>
            <Link to='/dashboard' style={{
              width: 'inherit',
              height: 'inherit',
              position: 'absolute',
            }}></Link>
            DASHBOARD
          </ToggleButton>
        }
      </ToggleButtonGroup>


      {/*Desktop*/}

      <ToggleButtonGroup
        sx={{
          color: 'white',
          backgroundColor: '#FFFFFF1A',
          border: '1.5px solid #958C9F',
          borderRadius: '13px',
          width: 'fit-content',
          height: '65px',
          boxShadow: '0px 0px 15px 0px #958c9f80',
          display: {xs: 'none', md: 'flex'},
        }}
        value={view}
        exclusive
        onChange={handleView}
        aria-label="page view"
        className='pageView'
      >
        <ToggleButton value="lottery" aria-label="Lottery" sx={{
          color: 'white',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '33px',
          borderRight: '2px solid #958C9F',
          borderBottomLeftRadius: '13px',
          borderTopLeftRadius: '13px',
          padding: '0 26px',
          '&:hover': {
            color: '#ffd057 !important;'
          }
        }}>
          <Link to='/lottery' style={{
            width: '142px',
            height: '65px',
            position: 'absolute',
          }}></Link>
          LOTTERY
        </ToggleButton>
        <ToggleButton value="results" aria-label="Results" sx={{
          color: 'white',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '33px',
          borderRight: '2px solid #958C9F',
          padding: '0 31px',
          '&:hover': {
            color: '#ffd057 !important;'
          }
        }}>
          <Link to='/results' style={{
            width: '151px',
            height: '65px',
            position: 'absolute',
          }}></Link>
          RESULTS
        </ToggleButton>
        <ToggleButton value="leaderboard" aria-label="Leaderboard" sx={{
          color: 'white',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: '33px',
          borderRight: isLoggedIn ? '2px solid #958C9F' : null,
          borderBottomRightRadius: isLoggedIn ? null : '13px',
          borderTopRightRadius: isLoggedIn ? null : '13px',
          padding: '0 18px',
          '&:hover': {
            color: '#ffd057 !important;'
          }
        }}>
          <Link to='/leaderboard' style={{
            width: '183px',
            height: '65px',
            position: 'absolute',
          }}></Link>
          LEADERBOARD
        </ToggleButton>
        {!isLoggedIn ? null :
          <ToggleButton value="dashboard" aria-label="Dashboard" sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "20px",
            margin: '0 !important',
            lineHeight: '33px',
            borderBottomRightRadius: '13px',
            borderTopRightRadius: '13px',
            '&:hover': {
              color: '#ffd057 !important;'
            }
          }}>
            <Link to='/dashboard' style={{
              width: '148px',
              height: '65px',
              position: 'absolute',
            }}></Link>
            DASHBOARD
          </ToggleButton>
        }
      </ToggleButtonGroup>
    </>
  )
    ;
}