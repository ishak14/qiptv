import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
import ButtonAppBar from './material-ui/menu/AppBar';
const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1224px) {
      display:none;
    }
    top: 0;
    position: fixed;
    width: 100vw;
    z-index: 100000;
    margin-top: 0em;
    transition: background-color 1s;
    padding: 0.5em;
    &:hover{
      background-color: white !important;
    }
`;
const StyledLink = styled.p`
    color: white important!;
    font-family: 'Roboto', sans-serif;
    color:#000;
    a{
      text-decoration:none;
    }
    a:visited{
      color:black;
    }
    margin: 0em 1em;
    &:hover{
      text-decoration: underline;
      transition: 1s text-decoration;
    }
`;
const RightLink = styled.div`
 background-color:  #33c692;

 padding: 0.8em 0.5em;
 margin-top:0.4em;
 margin-right: 1em;
 &:hover{
   background-color: #3df7b5;
   transition: 1s background-color;
 }
`;
const LeftLink = styled.div`
  display:flex;
  width: 50vw;
  flex-direction: row;
  justify-conent: space-evenly;

`;
export default class Header extends Component {
constructor(props) {
  super(props)

  this.state = {
     scrollColor: "transparent"
  }
}

  
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);

}

componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);

}

handleScroll = () => {
console.log(window.scrollY)
      if (window.scrollY > 100){
        this.setState({scrollColor: "white"})
      }
      else{
        this.setState({scrollColor: "transparent"})
      }

}
  render() {
    
    console.log(this.state.scrollColor)
    return (
      <StyledHeader style={{backgroundColor: this.state.scrollColor}}>

        <LeftLink>
          <StyledLink><Link to="/" >Hem</Link></StyledLink>
          <StyledLink><Link to="/kanaler/" >Kanaler</Link></StyledLink>
          <StyledLink><Link to="/regler/" >Regler och FAQ</Link></StyledLink>
         {/*<StyledLink><Link to="/" >Betalningsalternativ</Link></StyledLink>*/}
          <StyledLink><Link to="/kontakt/" >Kontakt</Link></StyledLink>
        </LeftLink>
        <Link to="/prova-gratis/" >
          <RightLink>
            <StyledLink>
              Prova gratis 24h
            </StyledLink>
          </RightLink>
        </Link>
      </StyledHeader>
      
    )
  }
}
