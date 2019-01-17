import React, { Component } from 'react'
import styled from 'styled-components';
import HDIcon from '@material-ui/icons/Hd';
import MailIcon from '@material-ui/icons/MailOutline';
import WalletIcon from '@material-ui/icons/AccountBalanceWalletSharp';
const StyledSection = styled.section`

    display:flex;
    width: 100vw;
    height:50vh;
    background-color:#hhh;
    flex-direction:row;
    justify-content:space-evenly;
    @media (max-width: 768px) {
        font-size: 0.7em;
        flex-direction:column;
      }
      @media (min-width: 768px) and (max-width: 1224px) {
        font-size: 0.5em;
        line-height: 1em;
        flex-direction:column;
      }
`;
const CommerceContainer = styled.div`
    width:inherit;
    height:inherit;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    :hover {
        box-shadow: -1px 0px 52px -19px rgba(46,46,46,1);
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
    }
`;


const StyledZoomableContainer = styled.div``;
const StyledInnerContainer = styled.div``; 
const StyledTitle = styled.h2`
    color: #000
    text-align:center;
`;
const StyledText = styled.p`
    font-size: 0.8em;
    margin: 0em 3em;
`;
const CommerceChannelsFromWorld = styled.div`
`;
export default class Commerce extends Component {
  render() {
    return (
      <StyledSection>
        <CommerceContainer>
            <MailIcon style={{fontSize:"50px"}}/>
            <StyledTitle>Prova Gratis</StyledTitle>
            <StyledText>Prova vår tjänst kostnadsfritt i 24 timmar. Bättre än så kan det inte bli! Kontakta oss via mejl så hjälper vi dig igång.</StyledText>
        </CommerceContainer>
        <CommerceContainer>
            <HDIcon style={{fontSize:"50px"}}/>
        <StyledTitle>Över 16000 kanaler från 80 länder</StyledTitle>
        <StyledText>Få tillgång till både film och sport i HD</StyledText>
        </CommerceContainer>

        <CommerceContainer>
            <WalletIcon style={{fontSize:"50px"}}/>
             <StyledTitle>IPTV till Sveriges lägsta priser</StyledTitle>
             <StyledText>Ta chansen att bli kund idag. Vi erbjuder dig att testa kanalpaketet helt gratis i 24h</StyledText>
             </CommerceContainer>
      </StyledSection>
    )
  }
}
