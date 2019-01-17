import React, { Component } from 'react'
import Header from '../components/Header';
import Section from '../components/Section';
import styled from 'styled-components';
import realmadridarena from "../img/realmadridarena.jpg";

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
    color: #333333
`;
const LeftColumn = styled.div`

width: 40vw;
`;
const RightColumn = styled.div`

width: 40vw;
`;
const ColumnTitle = styled.h2`
    font-size: 1.5em;
    color: #333333;
    font-weight: 400;
`;
const ColumnText = styled.p`
    color: #333333;
    font-weight: 300;
`;
const Ul = styled.ul`
    margin: 5em;
    color: #333333
    font-weight: 400;
`;
const UlTitle = styled.h2`
font-weight: 400;`;
const Li = styled.li`
font-weight: 300;
font-size: 0.9em`;
const QuestionBox = styled.div`
    margin: 7em;
`;
const QuestionsTitle = styled.h2`
font-weight: 500;`;
const Question = styled.h3`
font-weight: 500;`;
const Answer = styled.p`
font-weight: 400;`;
export default class Rules extends Component {
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
                <ColumnTitle>LÅT OSS FÖRKLARA VÅR IPTV</ColumnTitle>
                <ColumnText>
                    IPTV Är ett helt nytt sätt att titta på TV. Du behöver ingen antenn, ingen parabol eller någon annan form utav utrustning. Det enda du behöver är en internetuppkoppling på minst 30mbit/s för att du ska komma igång.Du kan titta på IPTV genom att du ansluta din SmartTV, Dator, Surfplatta osv. Möjligheterna är oändliga
                </ColumnText>
            </LeftColumn>
            <RightColumn>
                <ColumnTitle>KONTAKTA OSS VIA VÅR MEJL SÅ HJÄLPER VI DIG IGÅNG!</ColumnTitle>
                <ColumnText>
                    Kontakta oss via vår kontaktsida i menyn. Kontakta oss idag så hjälper vi dig att komma igång direkt. Vårt kanalpaket finns till MAG Boxar, TViP S-Box, SmartTV (Samsung/LG/AndroidTV), PC/Mac, Mobiltelefoner och mycket mer. Prova våra smarta lösningar till din önskade enhet, och vi lovar att du blir nöjd.
                </ColumnText>
            </RightColumn>
        </Columns>
        <Ul>
            <UlTitle>Regler</UlTitle>
            <Li>Endast en anslutning per konto. Du får inte använda ditt konto på flera enheter samtidigt, även om det är samma hushåll. Det går bra att använda på flera enheter så länge det aldrig används samtidigt.</Li>
            <Li>Förbjudet att dela med sig av sitt konto till vänner, familj etc</Li>
            <Li>Du ansvarar själv för att se till att kontot inte hamnar i fel händer</Li>
            <Li>INGA favoritlistor skall göras, man går alltid in via det land man önskar och startar kanalen därifrån.</Li>
            <Li>Att hoppa för snabbt mellan IP adresser är förbjudet då detta inte anses som normal användning</Li>
            <Li>Att restreama våra kanaler är totalt förbjudet</Li>
            <Li>Att spela in en kanal medan du tittar på en annan kanal är förbjudet, då du använder dubbel bandbredd och orsakar precis samma skada för oss som om du hade tittat på två enheter samtidigt.</Li>
            <Li>Använd inte VPN då de flesta VPN IP är redan svartlistade hos oss pga missbrukar. Väljer du att använda VPN så ansvarar du själv för detta och vi kan inte hjälpa dig om ditt konto blir avstängt pga missbruk.</Li>
        </Ul>
        <Ul>
            <UlTitle>Regler för Provkonton</UlTitle>
            <h4>Förutom ovanstående gäller även:</h4>
            <Li>Endast en ansökningar per hushåll</Li>
            <Li>Ansök INTE bakom en VPN</Li>
            <Li>Fyll INTE i ansökningsformuläret mer en gång, utan har det blivit ett misstag så maila oss på info@nordiciptv.net så korrigerar vi detta.</Li>
            <Li>Provkontot gäller från den sekund du får den i din Inkorg, samt 24 H framåt. Du ansvarar själv för att titta i din skräppost då det är väldigt vanligt att våra mail hamnar där. Sök inte provkonto om du inte har tid att använda den, du får inget nytt senare för att du missade eller inte hann använda den. Bandbredden kostar oss pengar så vänligen respektera detta.</Li>
            <Li>Använd INTE mail konton avsedda för engångsbruk, mailinator, fakemailgenerator, stromox, zainmax, zain mfl.</Li>
            <Li>Maila oss inte med förfrågningar om när ditt provkonto blir klart</Li>
        </Ul>
        <QuestionBox>
            <QuestionsTitle>Vanliga frågor och svar</QuestionsTitle>
            <Question>Vad krävs för att prova er tjänst?</Question>
            <Answer>Allt som krävs är att du har internetuppkoppling.</Answer>
            <Question>Hur snabbt internet behöver jag?</Question>
            <Answer>Minst 8mbit/s för SD och minst 30mbit/s för HD & FULL HD. Vår rekommendation är att du har minst 30mbit/s för att de ska fungera klockrent.</Answer>
            <Question>Kan jag använda mitt abonnemang på flera enheter?</Question>
            <Answer>Ja det kan du göra, du kan koppla in ditt konto på flera olika enheter men bara köra 1 åt gången. Vill du kunna använda fler samtidigt behöver du köpa antingen tvillingkonto eller trillingkonto. Kontakta oss för pris.</Answer>
            <Question>Kan jag ta med mitt abonnemang eller min box utomlands, till mitt semesterboende?</Question>
            <Answer>Ja absolut, så länge du har en internetuppkoppling.</Answer>
            <Question>Hur lägger jag en beställning?</Question>
            <Answer>Du kontaktar oss via vår mail och inväntar tills nån av oss svarar. Så hjälper vi dig med inbetalningsuppgifter.</Answer>
            <Question>Vilka kanaler ingår? Vad ingår i paketet?</Question>
            <Answer>Över 20.000+ TV kanaler & en massa VOD Filmer (video on demand) ingår för endast 1499kr/år. 

Vi har samtliga svenska kanaler (Cmore, Viasat, Sport, Discovery, Film och underhållning) på ett och samma ställe. Endast hos Nordic IPTV</Answer>
        </QuestionBox>
        
      </div>
    )
  }
}
