/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  ListItem, ListItemIcon, ListItemText, withStyles
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = (theme) => ({
  faIcon: {
    width: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
  }
});

const NavListItem = memo(({
  classes, to, icon, label
}) => (
  <ListItem component={Link} to={to} button>
    { icon ? (
      <ListItemIcon className={classes.faIcon}>
        <FontAwesomeIcon icon={icon} />
      </ListItemIcon>
    ) : null }
    <ListItemText primary={label} />
  </ListItem>
));

NavListItem.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NavListItem.defaultProps = {
  icon: null,
};

export default withStyles(styles)(NavListItem);
