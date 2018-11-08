/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@material-ui/core';

import SideBar from './SideBar';
import NavBar from './NavBar';

export const navigationPropTypes = {
  bio: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    contact: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.arrayOf(PropTypes.string).isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }))
  }).isRequired,
  copyright: PropTypes.string.isRequired,
  sidebarImg: PropTypes.string,
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

const NavigationInner = ({
  bio, copyright, navLinks, sidebarImg
}) => (
  <div>
    <noscript>
      <SideBar bio={bio} copyright={copyright} navLinks={navLinks} sidebarImg={sidebarImg} />
    </noscript>
    <Hidden mdUp>
      <NavBar bio={bio} copyright={copyright} navLinks={navLinks} />
    </Hidden>
    <Hidden smDown>
      <SideBar bio={bio} copyright={copyright} navLinks={navLinks} sidebarImg={sidebarImg} />
    </Hidden>
  </div>
);

NavigationInner.propTypes = navigationPropTypes;

NavigationInner.defaultProps = {
  sidebarImg: null,
};

export default NavigationInner;
