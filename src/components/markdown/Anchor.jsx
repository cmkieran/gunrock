/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const Anchor = (props) => (
  // eslint-disable-next-line react/destructuring-assignment
  props.className === 'button'
    ? <Button component="a" variant="contained" color="primary" {...props} />
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    : <a {...props} />
);

Anchor.propTypes = {
  className: PropTypes.string,
};

Anchor.defaultProps = {
  className: null,
};

export default Anchor;
