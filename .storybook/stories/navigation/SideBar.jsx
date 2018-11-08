/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import SideBar from '../../../src/components/navigation/SideBar';
import avatar from '../../resources/robot.jpg';
import sidebarImg from '../../resources/grass-field-during-sunset.jpeg';

const props = {
  bio: {
    avatar,
    name: 'John Doe',
    location: 'Somewhere, Else',
  },
  copyright: 'Copyright all the things!',
  navLinks: []
};

const bio = Object.assign({}, props.bio, { contact: [
    { "label": "Github", "url": "https://github.com/ucdavis", "icon": ["fab", "github"] },
    { "label": "LinkedIn", "url": "https://www.linkedin.com/in/advancedgraduate", "icon": ["fab", "linkedin"] },
    { "label": "Phone", "url": "tel:5305552233", "icon": ["fas", "phone"] },
    { "label": "e-mail", "url": "mailto:adgraduate@ucdavis.edu", "icon": ["fas", "envelope"] }
  ]});

const navLinks = [
  { label: 'Home', icon: 'home', url: '/'},
  { label: 'Curriculum Vitae', icon: 'file-alt', url: '/cv'},
  { label: 'My Research', icon: 'newspaper', url: '/research'}
];

storiesOf('navigation/SideBar', module)
  .add('Much Empty', () => (<SideBar {...props} />))
  .add('With background image', () => (<SideBar {...Object.assign({}, props, { sidebarImg })} />))
  .add('With navigation links', () => (<SideBar {...Object.assign({}, props, { navLinks })} />))
  .add('With contact links', () => (<SideBar {...Object.assign({}, props, { bio })} />))
  .add('With everything', () => (<SideBar {...Object.assign({}, props, { navLinks, sidebarImg, bio })} />));

