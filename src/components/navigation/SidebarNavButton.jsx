/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  text: {
    marginLeft: theme.spacing.unit,
  }
});

const SidebarNavButton = React.memo(({
  classes, extended, label, icon, url
}) => (
  <Tooltip title={label}>
    <Button
      variant={extended ? 'contained' : 'fab'}
      color={extended ? 'secondary' : 'primary'}
      component="a"
      href={url}
      key={url}
      aria-label={label}
      className={classes.button}
      mini={!extended}
    >
      <FontAwesomeIcon icon={icon} />
      {extended ? (<span className={classes.text}>{label}</span>) : null}
    </Button>
  </Tooltip>
));

SidebarNavButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.node,
  extended: PropTypes.bool
};

SidebarNavButton.defaultProps = {
  extended: false,
};

export default withStyles(styles)(SidebarNavButton);
