/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import NavBar from '../../../src/components/navigation/NavBar';
import avatar from '../../resources/robot.jpg';
import sidebarImg from '../../resources/grass-field-during-sunset.jpeg';

const props = {
  bio: {
    avatar,
    name: 'John Doe',
    location: 'Somewhere, Else',
    contact: []
  },
  copyright: 'Copyright all the things!',
  navLinks: []
};

const bio = Object.assign({}, props.bio, { contact: [
    { label: 'Github', url: 'https://github.com/ucdavis', icon: ['fab', 'github'] },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/advancedgraduate', icon: ['fab', 'linkedin'] },
    { label: 'Phone', url: 'tel:5305552233', icon: ['fas', 'phone'] },
    { label: 'e-mail', url: 'mailto:adgraduate@ucdavis.edu', icon: ['fas', 'envelope'] }
  ]});

const navLinks = [
  { label: 'Home', icon: 'home', url: '/'},
  { label: 'Curriculum Vitae', icon: 'file-alt', url: '/cv'},
  { label: 'My Research', icon: 'newspaper', url: '/research'}
];

storiesOf('navigation/NavBar', module)
  .add('Closed', () => (<NavBar {...Object.assign({}, props, { navLinks, sidebarImg, bio })} />))
  .add('Much Empty', () => (<NavBar isOpen {...props} />))
  .add('With navigation links', () => (<NavBar isOpen {...Object.assign({}, props, { navLinks })} />))
  .add('With contact links', () => (<NavBar isOpen {...Object.assign({}, props, { bio })} />))
  .add('With everything', () => (<NavBar isOpen {...Object.assign({}, props, { navLinks, sidebarImg, bio })} />));
