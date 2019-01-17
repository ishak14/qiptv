import React, { Component } from 'react'
import Header from '../components/Header';
import Section from '../components/Section';
import styled from 'styled-components';
import realmadridarena from "../img/realmadridarena.jpg";

var styles = {
  image: {
    flex: 1,
    alignSelf: 'fit',
    width: '100vw',
    height: '80vh',
    backgroundImage: 'url('+realmadridarena+')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}

const StyledSection = styled.div`
    display: flex;
    width: 100vw;
    height: 70vh;
    background-color: #fff;
    z-index: -1;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`;
const StyledP = styled.p`
  display: inline-block;
  color:#333;
  font-size: 1.5em;
  width:50vw;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (min-width: 768px) and (max-width: 1224px) {
    font-size: 1em;
  }

`;

const StyledList = styled.ul`
  font-weight: 600;
  color:#333;
  font-size: 1.5em;
  text-decoration:none;
  list-style-type: none;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
  @media (min-width: 768px) and (max-width: 1224px) {
    font-size: 1em;
  }
`;
const StyledListTitle = styled.h2`
  text-align:center;
  
`;
const StyledListItem = styled.li``;

const StyledFirstSection = styled.div`
  display:flex;
  height: 40vh; !important;

`;
const StyledH1 = styled.h1`
  color:#fff;
  font-size: 3em;
  margin: 0em 5em;
  font-family: 'Roboto', sans-serif;
`;

const StyledH2 = styled.h2`
  color:#fff;
  font-size: 2em;
  margin: 0em 5em;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  @media (max-width: 1224px) {
    font-size: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;


const StyledBlackOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
export default class Provagratis extends Component {
  
  render() {
    return (
     <div>
      <StyledFirstSection style={styles.image}>
      <StyledBlackOverlay>
      <StyledH1>ALLT SOM KRÄVS ÄR INTERNET!</StyledH1>

      <StyledH2>Med över 8000+ kanaler från över 50 olika länder är vi ett av Nordens ledande IPTV leverantör</StyledH2>
      </StyledBlackOverlay>
      </StyledFirstSection>

        <StyledSection>
          <StyledP>Kontakta oss idag så hjälper vi dig att komma igång snabbt med din 24h test.
Vårt kanalpaket finns till MAG Boxar, TViP S-Box, SmartTV (Samsung/LG/AndroidTV), PC/Mac, Mobiltelefoner och mycket mer. Prova våra smarta lösningar till din önskade enhet, och vi lovar att du blir nöjd.
 </StyledP>
  <StyledList>
  <StyledListTitle>VARFÖR VÄLJA OSS?</StyledListTitle>

  <StyledListItem>Utbud – Vi har över 16000+ TV-kanaler från över 85 olika länder.</StyledListItem>
  <StyledListItem>Tillgänglighet & Support – Som kund hos oss får du hjälp samma dag.</StyledListItem>
  <StyledListItem>Kvalité – Vi levererar kristall klar bild, alla kanaler i HD samt FULL HD.</StyledListItem>
  <StyledListItem>Svenska utbudet – Vi har över 100+ Svenska kanaler i HD och FULL HD.</StyledListItem>
  </StyledList>
</StyledSection>
</div>
    )
  }
}
