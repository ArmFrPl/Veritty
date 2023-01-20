import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../Styles/ToggleButtons.css';
import {Link} from "react-router-dom";

export default function ToggleButtons({isLoggedIn}) {
  const [view, setView] = useState('lottery');

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <ToggleButtonGroup
      sx={{
        color: 'white',
        backgroundColor: '#FFFFFF1A',
        border: '1.5px solid #958C9F',
        borderRadius: '13px',
        width: 'fit-content',
        height: '65px',
        boxShadow: '0px 0px 15px 0px #958c9f80'
      }}
      value={view}
      exclusive
      onChange={handleView}
      aria-label="page view"
      className='pageView'
    >
      <ToggleButton value="lottery" aria-label="Lottery" sx={{
        color:'white',
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight:'33px',
        borderRight: '2px solid #958C9F',
        borderBottomLeftRadius: '13px',
        borderTopLeftRadius: '13px',
        padding: '0 26px'
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
        padding: '0 31px'
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
        padding: '0 18px'
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
  );
}