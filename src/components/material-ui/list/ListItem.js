import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import CollapseComponent from './Collapse';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4,
    },
  });
export default class ListItemComponent extends Component {
    constructor(props) {
    super(props)

    this.state = {
        open: true
    }
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };
    
  render() {
    const { classes } = this.props
    return (
        <div>
            <ListItem button onClick={this.handleClick}>
                <ListItemText inset primary={this.props.label} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {this.props.channels.map((channel) => {
                return(
                <CollapseComponent label={channel} open={this.state.open}></CollapseComponent>
                )
            })}
        </div>
    )
  }
}
ListItemComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };
