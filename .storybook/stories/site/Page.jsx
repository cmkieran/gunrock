/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { simple } from '../../sampleAst';
import Page from '../../../src/components/site/Page';

storiesOf('site', module)
  .add('Page', () => (<Page content={ simple } />));
