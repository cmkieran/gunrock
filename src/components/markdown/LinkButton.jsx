/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button as MUIButton, Tooltip } from '@material-ui/core';
import { Link } from 'gatsby';

const LinkButton = React.memo((props) => (
  <Tooltip title={props.to}>
    <MUIButton
      variant={props.variant}
      color={props.color}
      component={Link}
      to={props.to}
      {...props}
    />
  </Tooltip>
));

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.string,
};

LinkButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
};

export default LinkButton;
