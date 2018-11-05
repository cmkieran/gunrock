/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, withStyles } from '@material-ui/core';

import Bio from '../user/Bio';
import SidebarNavButton from './SidebarNavButton';
import { navigationPropTypes } from './NavigationInner';

const styles = (theme) => ({
  sidebar: {
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.light,
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  copyright: {
    color: theme.palette.grey['50'],
    padding: theme.spacing.unit,
    textAlign: 'center'
  },
  listItem: {
    backgroundColor: theme.palette.secondary
  }
});

const SideBar = ({
  bio: {
    avatar, name, location, contact = []
  },
  classes,
  copyright,
  navLinks,
  sidebarImg
}) => (
  <Grid container justify="center" style={{ backgroundImage: `url(${sidebarImg})` }} className={classes.sidebar}>
    <Grid item xs={10} className={classes.container}>
      <Bio avatar={avatar} name={name} location={location} />
      <section className={classes.wrapper}>
        <div className={classes.container}>
          {navLinks.map((c) => (
            <SidebarNavButton icon={c.icon} label={c.label} url={c.url} key={JSON.stringify(c)} extended />
          ))}
        </div>
        <div className={classes.buttonWrapper}>
          {contact.map((c) => (
            <SidebarNavButton icon={c.icon} label={c.label} url={c.url} key={JSON.stringify(c)} />
          ))}
        </div>
        <Typography variant="caption" className={classes.copyright}>
          {copyright}
        </Typography>
      </section>
    </Grid>
  </Grid>
);

SideBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  ...navigationPropTypes,
};

export default withStyles(styles)(SideBar);
