import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
      },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class OutlinedTextFields extends React.Component {
  state = {
    name: '',
    mac: '',
    mail: '',
    message: '',

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = mac => event => {
    this.setState({
      [mac]: event.target.value,
    });
  };

  handleChange = mail => event => {
    this.setState({
      [mail]: event.target.value,
    });
  };

  handleChange = message => event => {
    this.setState({
      [message]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
    
        
        <Button variant="contained" color="primary" className={classes.button} >
        Maila oss nu
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
        </Button>


    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);
