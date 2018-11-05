/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import NavigationInner from '../../../src/components/navigation/NavigationInner';
import avatar from '../../../static/img/robot.jpg';
import sidebarImg from '../../../static/img/grass-field-during-sunset.jpeg';

const niNoContactsNoNavLinks = (
  <NavigationInner
    bio={{
      avatar,
      name: 'John Doe',
      location: 'Somewhere, Else',
      contact: []
    }}
    copyright="Copyright all the things!"
    sidebarImg={sidebarImg}
    navLinks={[]}
  />
);

const niContactsNavLinks = (
  <NavigationInner
    bio={{
      avatar,
      name: 'John Doe',
      location: 'Somewhere, Else',
      contact: [
        { "label": "Github", "url": "https://github.com/ucdavis", "icon": ["fab", "github"] },
        { "label": "LinkedIn", "url": "https://www.linkedin.com/in/advancedgraduate", "icon": ["fab", "linkedin"] },
        { "label": "Phone", "url": "tel:5305552233", "icon": ["fas", "phone"] },
        { "label": "e-mail", "url": "mailto:adgraduate@ucdavis.edu", "icon": ["fas", "envelope"] }
      ]
    }}
    copyright="Copyright all the things!"
    sidebarImg={sidebarImg}
    navLinks={[
      { label: 'Home', icon: 'home', url: '/'},
      { label: 'Curriculum Vitae', icon: 'file-alt', url: '/cv'},
      { label: 'My Research', icon: 'newspaper', url: '/research'}
    ]}
  />
);

storiesOf('navigation/NavigationInner', module)
  .add('No links (Desktop)', () => (niNoContactsNoNavLinks), { viewport: 'responsive' })
  .add('No links (Mobile)', () => (niNoContactsNoNavLinks), { viewport: 'iphone5' })
  .add('With links (Desktop)', () => (niContactsNavLinks), { viewport: 'responsive' })
  .add('With links (Mobile)', () => (niContactsNavLinks), { viewport: 'iphone5' })
;
