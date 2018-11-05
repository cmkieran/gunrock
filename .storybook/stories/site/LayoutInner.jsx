/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import LayoutInner from '../../../src/components/site/LayoutInner';

storiesOf('site', module)
  .add('LayoutInner', () => (
    <LayoutInner
      title="Index"
      site={{
        title: 'Gunrock',
        sidebar: '/img/grass-field-during-sunset.jpeg',
        favicon: '/img/are-favicon.png',
        description: 'Professional website for UC Davis ARE PhD candidates.',
        copyright: 'Copyright © 2018 Eric Smyth'
      }}
      theme={{
        type: 'light',
        fonts: {
          body: 'Montserrat, sans-serif',
          heading: 'Gentium Book Basic, serif'
        },
        palette: {
          primary: {
            main: '#002855'
          },
          secondary: {
            main: '#DAAA00'
          }
        }
      }}
    >
      Hello world
    </LayoutInner>
  ))
  .add('LayoutInner (no title)', () => (
    <LayoutInner
      site={{
        title: 'Gunrock',
        sidebar: '/img/grass-field-during-sunset.jpeg',
        favicon: '/img/are-favicon.png',
        description: 'Professional website for UC Davis ARE PhD candidates.',
        copyright: 'Copyright © 2018 Eric Smyth'
      }}
      theme={{
        type: 'light',
        fonts: {
          body: 'Montserrat, sans-serif',
          heading: 'Gentium Book Basic, serif'
        },
        palette: {
          primary: {
            main: '#002855'
          },
          secondary: {
            main: '#DAAA00'
          }
        }
      }}
    >
      Hello world
    </LayoutInner>
  ));
