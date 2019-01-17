import React, { Component } from 'react'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
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


const styles = theme => ({
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });

export default class CollapseComponent extends Component {
  render() {
    const {classes} = this.props;
    return (
            <Collapse in={!this.props.open} timeout="auto" unmountOnExit>
            <List component="div" >
                <ListItem >
                <ListItemText inset primary={this.props.label} />
                </ListItem>
            </List>
            </Collapse>

    )
  }
}
CollapseComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
withStyles(styles)(CollapseComponent);