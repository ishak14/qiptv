import React, { Component } from 'react';
import logo from '../logo.svg';

import Section from "../components/Section";
import Header from "../components/Header";
import startsida from "../img/startsida.jpg";
import styled from 'styled-components';
import Provagratis from './Provagratis';
import Commerce from '../components/Commerce';
import NavbarPage from '../components/Navbar';
var styles = {
  image: {
    flex: 1,
    alignSelf: 'fit',
    width: '100vw',
    height: '60vh',
    backgroundImage: 'url('+startsida+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
},
  navbar:{
    backgroundColor: '#fff'
  }
};
const StyledFirstSection = styled.div`
  display:flex;

`;
const StyledH1 = styled.h1`
  color:#000;
  font-size: 1.4em;
  margin: 0em 2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 2em;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (min-width: 768px) and (max-width: 1224px) {
    font-size: 0.5em;
    line-height: 1em;
  }
`;
const StyledH1InImage = styled.h1`
  color:#000;
  font-size: 1.4em;
  margin: 0em 2em;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 2em;
  text-align: center;
  background-color: rgba(255,255,255,0.3);
  padding: 0em 1em;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (min-width: 768px) and (max-width: 1224px) {
    font-size: 0.5em;
    line-height: 1em;
  }
`;


const StyledBlackOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display:flex;
  align-items: center;
  text-align:center;
`;
const TopBackground = styled.div`
  width:100vw;
  height:40vh;
  background-color: #ffe01b;
  position: relative;
  z-index: 1;
  display:flex;
  align-items: center;
`;
export default class Home extends Component {
  render() {
    return (
<div>
        <TopBackground>
           <StyledH1>
            Vi har över 16.000+ IPTV kanaler,
           oavsett om det är Svensk TV eller Utländsk du är ute efter.
            Vi har även massa filmer (VOD) i ett och samma paket. Du har rätten till att prova våra tjänster helt GRATIS i 24 timmar.
             Vi samarbeter med den ledande IPTV leverantören i Sverige, Norge, Finland och Danmark.
              Mest prisvärda IPTV i Sverige.
              </StyledH1>
        </TopBackground>
        <StyledFirstSection style={styles.image}>
        <StyledBlackOverlay>

              <StyledH1InImage style={{color:"white",fontWeight: "600"}}>Du får över 16.000+ IPTV kanaler och massa filmer (VOD) för endast 1300:-/år</StyledH1InImage>

          </StyledBlackOverlay>
        </StyledFirstSection>
        <Commerce></Commerce>
        <Provagratis/>
        </div>
    )
  }
}
