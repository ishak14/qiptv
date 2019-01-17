import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Home from './pages/Home';
import Provagratis from './pages/Provagratis';
import Header from './components/Header';
import Channels from './pages/Channels';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import ButtonAppBar from './components/material-ui/menu/AppBar';
import SwipeableTemporaryDrawer from './components/material-ui/menu/Drawer';
const Index =  Home;
const TestFreePage = Provagratis;
const ChannelsPage = Channels;

const AppRouter = () => (
  <Router>
    <div>
   <ButtonAppBar/>


      <Route path="/" exact component={Index} />
      <Route path="/prova-gratis/" component={TestFreePage} />
      <Route path="/kanaler/" component={ChannelsPage} />
      <Route path="/regler/" component={Rules} />
      <Route path="/kontakt/" component={Contact}/>
    </div>
  </Router>
);

export default AppRouter;