import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from '../../Header';

const styles = {
  root: {
    flexGrow: 1,
    top: 0,
    position: 'fixed',
    width: '100vw',
    zIndex: 100000,

  },
  menu: {
    background: 'transparent',
    boxShadow: 'none',


  },
  grow: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginLeft: "80vw",
    marginRight: 20,
    color: "black",
  },
  list: {
    width: 250,
    
  },
  fullList: {
    width: 'auto',
    backgroundColor: "#ff0045",
    marginTop: "0em"
    
  },
  text: {
    color: "#fff",
    textDecoration: "none"
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    top: false,
    left: false,
    bottom: false,
    right: false,
  };
  toggleDrawer = (side, open) => () => {
    console.log("toggleDrawer")
    console.log("side: " + side)
    console.log("open: " + open)
    this.setState({
      [side]: open,
    });
  };
  handleChange = event => {
    console.log("handleChange")
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    console.log("handleMenu")
    this.setState({ anchorEl: event.currentTarget });
    this.toggleDrawer('top', true)
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const fullList = (
      <div className={classes.fullList}>
        <List>
            {[['Hem','/'], ['Prova gratis 24h','/prova-gratis/'], ['Kanaler','/kanaler/'], ['Betalningsalternativ','/betalningsalternativ/']].map((text, index) => (
              <Link to={text[1]}>
              <ListItem button key={text[0]}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={ {fill: 'white'}}/> : <MailIcon style={ {fill: 'white'}}/>}</ListItemIcon>
                <ListItemText classes={{primary: classes.text}} primary={text[0]} />
              </ListItem>
              </Link>
            ))}
        </List>
        <Divider />
        <List>
          {[['Regler och FAQ','/regler/'],['Kontakt','/kontakt/']].map((text, index) => (
            <Link to={text[1]}>
            <ListItem button key={text[0]}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon style={ {fill: 'white'}}/> : <MailIcon style={ {fill: 'white'}}/>}</ListItemIcon>
              <ListItemText classes={{primary: classes.text}} primary={text[0]} />
            </ListItem>
            </Link>
          ))}
        </List>
      </div>
    );
    return (
      <div className={classes.root}>
<Header/>
        <AppBar position="static" className={classes.menu}>
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('top', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
            
            </Typography>
            
            {auth && (
              <div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
          onOpen={this.toggleDrawer('top', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);