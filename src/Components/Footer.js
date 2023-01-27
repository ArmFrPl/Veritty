import React, {useState} from "react";
import Logo from "../Images/VERITTY.svg";
import {Box, Button, Fade, Modal} from "@mui/material";
import {SocialLinks} from "./SocialLinks";
import CloseIcon from '@mui/icons-material/Close';
import '../Styles/Footer.css';

export const Footer = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const handleOpenPrivacy = () => setOpenPrivacy(true);
  const handleClosePrivacy = () => setOpenPrivacy(false);

  const [openTerms, setOpenTerms] = useState(false);
  const handleOpenTerms = () => setOpenTerms(true);
  const handleCloseTerms = () => setOpenTerms(false);

  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Box className='footer' sx={{
        display: {xs: 'flex', md: 'none'},
      }}>
        <Box className='mobileFooterCont'>
          <Box component="img" sx={{height: 23, width: 149}} alt="Veritty Logo" src={Logo}/>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            width: '90%',
            mt: '20px',
            alignItems: 'baseline'
          }}>
            <SocialLinks/>
            <Box display='flex' alignItems='flex-end' justifyContent='center' flexDirection='column'>
              <Button sx={{color: 'white', textDecoration: 'none'}} className='mobileFooterItem'
                      onClick={handleOpenPrivacy}>Privacy Policy</Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openPrivacy}
                onClose={handleClosePrivacy}
                closeAfterTransition
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Fade in={openPrivacy}>
                  <Box className='footerModalCont' sx={{
                    width: {xs: '80%', md:'820px'},
                    height: '721.11px',
                    background: '#101010',
                    border: '1.20991px solid #5900EB',
                    borderRadius: '29.0379px',
                    padding: '25px 0 61px 45px',
                  }}>
                    <Box className='footerModalHeader'>
                      Privacy Policy
                      <CloseIcon onClick={handleClosePrivacy} cursor='pointer'/>
                    </Box>
                    <Box className="footerModalBody">
                      Welcome to Veritty.com, a webssite of Veritty LLC (“Veritty”, “we”, “our”, or “us”).
                      <br/><br/>
                      1.1 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      1.2 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      1.3 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      1.4 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      1.5 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      2.1 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      2.2 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      2.3 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      2.4 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      2.5 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                    </Box>
                  </Box>
                </Fade>
              </Modal>
              <Button style={{color: 'white', textDecoration: 'none'}} className='mobileFooterItem' onClick={handleOpenTerms}>Terms
                Of Use</Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openTerms}
                onClose={handleCloseTerms}
                closeAfterTransition
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Fade in={openTerms}>
                  <Box className='footerModalCont' sx={{
                    width: {xs: '80%', md:'820px'},
                    height: '721.11px',
                    background: '#101010',
                    border: '1.20991px solid #5900EB',
                    borderRadius: '29.0379px',
                    padding: '25px 0 61px 45px',
                  }}>
                    <Box className='footerModalHeader'>
                      Terms of Use
                      <CloseIcon onClick={handleCloseTerms} cursor='pointer'/>
                    </Box>
                    <Box className="footerModalBody">
                      Welcome to Veritty.com, a website of Veritty LLC (“Veritty”, “we”, “our”, or “us”).
                      <br/><br/>
                      1.1 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      1.2 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      1.3 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      1.4 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      1.5 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      2.1 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      2.2 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      2.3 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                      <br/><br/>
                      2.4 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                      make unilateral modifications to these terms and will provide notice of these changes as described
                      below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                      <br/><br/>
                      2.5 Title
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify
                      <br/><br/>
                      This page explains the terms by which you may use our website (the “Site”). By accessing or using
                      the
                      Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                      Agreement
                      (“Agreement”), whether or not you are a
                    </Box>
                  </Box>
                </Fade>
              </Modal>
              <Button sx={{color: 'white', textDecoration: 'none'}} className='mobileFooterItem'>SmartContract</Button>
            </Box>
          </Box>
        </Box>
        <Box className='copyright' sx={{borderTop: '1px solid #DCDCDC'}}>
          <Box sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '20px',
          }}>© {year} Veritty</Box>
        </Box>
      </Box>


      {/*  Desktop */}


      <Box className='footer' sx={{
        display: {xs: 'none', md: 'flex'},
      }}>
        <Box className='footerCont'>
          <Box component="img" sx={{height: 16, width: 113}} alt="Veritty Logo" src={Logo}/>
          <SocialLinks/>
          <Box display='flex' alignItems='flex-end' justifyContent='center' flexDirection='column'>
            <Button style={{color: 'white', textDecoration: 'none'}} className='footerItem' onClick={handleOpenPrivacy}>Privacy
              Policy</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openPrivacy}
              onClose={handleClosePrivacy}
              closeAfterTransition
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Fade in={openPrivacy}>
                <Box className='footerModalCont' sx={{
                  width: '820px',
                  height: '721.11px',
                  background: '#101010',
                  border: '1.20991px solid #5900EB',
                  borderRadius: '29.0379px',
                  padding: '25px 0 61px 45px',
                }}>
                  <Box className='footerModalHeader'>
                    Privacy Policy
                    <CloseIcon onClick={handleClosePrivacy} cursor='pointer'/>
                  </Box>
                  <Box className="footerModalBody">
                    Welcome to Veritty.com, a webssite of Veritty LLC (“Veritty”, “we”, “our”, or “us”).
                    <br/><br/>
                    1.1 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    1.2 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    1.3 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    1.4 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    1.5 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    2.1 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    2.2 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    2.3 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    2.4 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    2.5 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                  </Box>
                </Box>
              </Fade>
            </Modal>
            <Button style={{color: 'white', textDecoration: 'none'}} className='footerItem' onClick={handleOpenTerms}>Terms
              Of Use</Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={openTerms}
              onClose={handleCloseTerms}
              closeAfterTransition
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Fade in={openTerms}>
                <Box className='footerModalCont' sx={{
                  width: '820px',
                  height: '721.11px',
                  background: '#101010',
                  border: '1.20991px solid #5900EB',
                  borderRadius: '29.0379px',
                  padding: '25px 0 61px 45px',
                }}>
                  <Box className='footerModalHeader'>
                    Terms of Use
                    <CloseIcon onClick={handleCloseTerms} cursor='pointer'/>
                  </Box>
                  <Box className="footerModalBody">
                    Welcome to Veritty.com, a website of Veritty LLC (“Veritty”, “we”, “our”, or “us”).
                    <br/><br/>
                    1.1 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    1.2 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    1.3 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    1.4 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    1.5 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    2.1 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    2.2 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    2.3 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                    <br/><br/>
                    2.4 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a registered user of our Site. Veritty reserves the right to
                    make unilateral modifications to these terms and will provide notice of these changes as described
                    below. This Agreement applies to all visitors, users, and others who access the Site (“Users”).
                    <br/><br/>
                    2.5 Title
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify
                    <br/><br/>
                    This page explains the terms by which you may use our website (the “Site”). By accessing or using
                    the
                    Site, you signify that you have read, understood, and agree to be bound by this Terms of Use
                    Agreement
                    (“Agreement”), whether or not you are a
                  </Box>
                </Box>
              </Fade>
            </Modal>
            <Button style={{color: 'white', textDecoration: 'none'}} className='footerItem'>SmartContract</Button>
          </Box>
        </Box>
        <Box className='copyright' sx={{borderTop: '1px solid #DCDCDC'}}>
          <Box sx={{
            color: 'white',
            fontFamily: 'Epilogue',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '18px',
            lineHeight: '20px',
          }}>© {year} Veritty</Box>
        </Box>
      </Box>
    </>
  )
}