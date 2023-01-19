import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../Styles/ToggleButtons.css';

export default function ToggleButtons() {
  const [view, setView] = useState('lottery');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <ToggleButtonGroup
      sx={{color: 'white', backgroundColor:'#FFFFFF1A', border:'1.5px solid #958C9F', borderRadius: '13px', width:'fit-content', height:'65px', boxShadow: '0px 0px 15px 0px #958c9f80'}}
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
        LOTTERY
      </ToggleButton>
      <ToggleButton value="results" aria-label="Results" sx={{
        color:'white',
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight:'33px',
        borderRight: '2px solid #958C9F',
        padding: '0 31px'
      }}>
        RESULTS
      </ToggleButton>
      <ToggleButton value="leaderboard" aria-label="Leaderboard" sx={{
        color:'white',
        fontFamily: 'Epilogue',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "20px",
        lineHeight:'33px',
        borderRight: isLoggedIn ? '2px solid #958C9F' : null,
        borderBottomRightRadius: isLoggedIn ? null : '13px',
        borderTopRightRadius: isLoggedIn ? null : '13px',
        padding: '0 18px'
      }}>
        LEADERBOARD
      </ToggleButton>
      {!isLoggedIn ? null :
        <ToggleButton value="dashboard" aria-label="Dashboard" sx={{
          color:'white',
          fontFamily: 'Epilogue',
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "20px",
          margin:'0 !important',
          lineHeight:'33px',
          borderBottomRightRadius: '13px',
          borderTopRightRadius: '13px',
        }}>
          DASHBOARD
        </ToggleButton>
      }
    </ToggleButtonGroup>
  );
}