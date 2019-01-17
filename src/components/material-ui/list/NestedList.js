import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ListItem from './ListItem';
import styled from "styled-components";

var data = require('../../../data/channels.json');

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: '5em',
    fontSize: '24px'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
    color:'white'
  },
  font: {
    fontSize: '5em',
  }
});

const StyledH1 = styled.h1`
  text-align: center;
  margin: 3em;
`;
const Background = styled.div`
background-color: #f6f6f6;
`;

class NestedList extends React.Component {
 
render() {
  const { classes } = this.props;
   
return (
  <Background>
  <div><StyledH1>Här hittar ni en del av vårt utbud(Sidan är under utveckling. Kanallistan är inte uppdaterad)</StyledH1></div>
  <List
  component="nav"
  className={classes.root}
>
       {data.map((list) => {
         
        return (
       <ListItem label={list.country} channels={list.channels} container={classes.font} dense={true}/>
      )})}
</List>
</Background>
    );
  }
}

export default withStyles(styles)(NestedList);