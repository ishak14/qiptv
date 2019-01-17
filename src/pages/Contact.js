import React, { Component } from 'react'
import Header from '../components/Header';
import Section from '../components/Section';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import OutlinedTextFields from '../components/material-ui/Form';

const StyledFirstSection = styled.div`
  display:flex;
  background-color: #ffe01b;
  height: 60vh;  
`;
const StyledH1 = styled.h1`
  color:#333;
  font-size: 3em;
  margin: 0em 5em;
  font-family: 'Roboto', sans-serif;
`;

const StyledH2 = styled.h2`
  color:#333;
  font-size: 2em;
  margin: 0em 5em;
  font-family: 'Roboto', sans-serif;
`;


const StyledBlackOverlay = styled.div`
  //background-color: rgba(0, 0, 0, 0.5);
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
const Columns = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2em;
    text-align: center;
`;
const LeftColumn = styled.div`

width: 40vw;
`;
const RightColumn = styled.div`

width: 40vw;
`;
const ColumnTitle = styled.h2`
    font-size: 1.5em;
`;
const ColumnText = styled.p`
    
`;
const Ul = styled.ul`
    margin: 5em;
`;
const UlTitle = styled.h2``;
const Li = styled.li``;
const QuestionBox = styled.div`
    margin: 7em;
`;
const QuestionsTitle = styled.h2``;
const Question = styled.h3``;
const Answer = styled.p``;

export default class Contact extends Component {
  render() {
    return (
    <div>
    <StyledFirstSection >
      <StyledBlackOverlay>
        <StyledH1>ALLT SOM KRÄVS ÄR INTERNET!</StyledH1>

        <StyledH2>Med över 8000+ kanaler från över 50 olika länder är vi ett av Nordens ledande IPTV leverantör</StyledH2>
      </StyledBlackOverlay>
    </StyledFirstSection>
        <Columns>
            <LeftColumn>
                <ColumnText>
                För direkt kontakt med oss så rekommenderar vi att du vänder dig till vår chatt som är redo att ta emot dina frågor eller din beställning.
Normalt så besvarar vi dina frågor inom 5 minuter men vid hög belastning så kan det ta upp till 60 minuter.
Vi hoppas på att du har överseende med detta. Vårt mål är att alla kunder ska vara mer än nöjda med oss som leverantör.
                </ColumnText>
            </LeftColumn>
            <RightColumn>
                <ColumnText>
                Kontakta oss genom att klicka på knappen nedan eller skicka ett mail till queeniptv@protonmail.com med namn och macadress. Vet ni inte hur man hittar macadressen? fråga oss!
                </ColumnText>
            </RightColumn>
        </Columns>
        <Columns>
            <LeftColumn>
                <ColumnTitle>LÅT OSS FÖRKLARA IPTV</ColumnTitle>
                <ColumnText>
                IPTV Är ett helt nytt sätt att titta på TV. Du behöver ingen antenn, ingen parabol eller någon annan form utav utrustning. Det enda du behöver är en internetuppkoppling på minst 30mbit/s för att du ska komma igång.Du kan titta på IPTV genom att du ansluta din SmartTV, Dator, Surfplatta osv. Möjligheterna är oändliga
                </ColumnText>
            </LeftColumn>
            <RightColumn>
                <OutlinedTextFields></OutlinedTextFields>
            </RightColumn>
        </Columns>
      </div>
    )
  }
}
