import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Provagratis from '../pages/Provagratis';

import App from '../App';
export const Routes = (
    <Switch>
        <Route  path="/" component={App} />
        <Route  path="/prova-gratis" component={Provagratis} />
        </Switch>
  );