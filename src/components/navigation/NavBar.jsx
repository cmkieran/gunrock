/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Avatar, Divider, Drawer, IconButton, List, Paper, Toolbar, Typography
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavListItem from './NavListItem';
import { navigationPropTypes } from './NavigationInner';

const styles = (theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    backgroundSize: 'cover',
    color: theme.palette.text.secondary,
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px`,
  },
  copyright: {
    marginTop: 'auto',
    padding: theme.spacing.unit,
    alignSelf: 'center'
  },
  bio: {
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing.unit / 2,
    marginLeft: theme.spacing.unit / -2,
    padding: theme.spacing.unit / 2,
    display: 'inline-flex',
  },
});

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.isOpen
    };
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { handleOpen, handleClose } = this;
    const {
      bio, classes, copyright, navLinks, sidebarImg
    } = this.props;
    const { isOpen } = this.state;

    const contacts = bio.contact.map(({ icon, label, url }) => (
      <NavListItem label={label} icon={icon} to={url} component="a" key={url} />
    ));

    const mappedNavLinks = navLinks
      .map(({ icon, label, url }) => (
        <NavListItem label={label} icon={icon} to={url} key={url} />
      ));

    return (
      <AppBar position="static">
        <Toolbar>
          { bio.contact.length || navLinks.length ? (
            <IconButton
              id="hamburger"
              aria-owns={isOpen ? 'appbar-drawer' : null}
              aria-haspopup="true"
              aria-label="Menu"
              onClick={handleOpen}
              color="inherit"
            >
              <FontAwesomeIcon icon="bars" />
            </IconButton>
          ) : null }
          <Typography color="inherit">
            {bio.name}
          </Typography>
        </Toolbar>
        { bio.contact.length || navLinks.length ? (
          <Drawer id="appbar-drawer" anchor="left" open={isOpen} onClose={handleClose}>
            <Paper
              elevation={1}
              className={classes.header}
              style={{ backgroundImage: `url(${sidebarImg})` }}
              square
            >
              <Avatar src={bio.avatar} />
              <Typography className={classes.bio} component="span" color="secondary">
                {bio.name}
              </Typography>
            </Paper>
            <List>
              {mappedNavLinks}
              { mappedNavLinks.length && contacts.length ? <Divider /> : null }
              {contacts}
            </List>
            <Typography variant="caption" className={classes.copyright}>
              {copyright}
            </Typography>
          </Drawer>) : null }
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool,
  ...navigationPropTypes,
};

NavBar.defaultProps = {
  isOpen: false,
};

export default withStyles(styles)(NavBar);
