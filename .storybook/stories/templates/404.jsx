/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import FourOhFour from '../../../src/pages/404';

storiesOf('StaticQuery', module)
  .add('404', () => <FourOhFour />);
