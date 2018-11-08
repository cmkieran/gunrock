/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
  noScript: {
    backgroundColor: theme.palette.error.main,
    padding: theme.spacing.unit,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: theme.palette.error.contrastText,
  }
});

const NoScript = React.memo(({ classes }) => (
  <div className={classes.noScript}>
    <Typography variant="h6" className={classes.text}>
      JavaScript is disabled
    </Typography>
    <Typography variant="subtitle1" className={classes.text}>
      {'Some parts of the site may not work properly. For instructions on how to enable Javascript '}
      <a href="http://www.enable-javascript.com/" target="_blank" rel="noopener noreferrer" className={classes.text}>
        click here
      </a>
      .
    </Typography>
  </div>
));

NoScript.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(NoScript);
