/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

import Bio from '../../../src/components/user/Bio';
import avatar from '../../../static/img/robot.jpg';

storiesOf('user', module)
  .add('Bio', (withPropsCombinations(Bio, {
    avatar: [avatar],
    name: ['James Smith'],
    location: ['123 Fake St', 'Everywhere', null]
  })));
