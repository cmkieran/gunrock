/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  avatar: {
    // alignSelf: 'end',
    height: theme.spacing.unit * 14,
    width: theme.spacing.unit * 14,
    marginBottom: theme.spacing.unit * 2,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing.unit * 8,
    // alignItems: 'end'
  },
  icon: {
    marginLeft: '0.25em'
  }
});

const Bio = React.memo(({
  avatar, classes, name, location
}) => (
  <section className={classes.wrapper}>
    <Avatar src={avatar} alt={`${name}'s avatar`} className={classes.avatar} />
    <Typography variant="h4">
      {name}
    </Typography>
    {location ? (
      <Typography>
        {location}
      </Typography>
    ) : null }
  </section>
));

Bio.propTypes = {
  avatar: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string
};

Bio.defaultProps = {
  location: null,
};

export default withStyles(styles)(Bio);
