/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';

const MockComponent = ({ children }) => <div>{children}</div>;

MockComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MockComponent;
