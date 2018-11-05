/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { simple } from '../../sampleAst';
import Page from '../../../src/templates/Page';

storiesOf('StaticQuery', module)
  .add('Page', () => (
    <Page data={{
      page: {
        id: 'abc123',
        content: simple,
        excerpt: 'Lorem ipsum and all that jazz',
        fields: {
          slug: '/',
        },
        meta: {
          title: 'I\'m an article!',
          templateKey: 'Page'
        }
      }
    }}
    />
  ));
