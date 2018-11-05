/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

import NavListItem from '../../../src/components/navigation/NavListItem';

storiesOf('navigation', module)
  .add('NavListItem', (withPropsCombinations(NavListItem, {
    to: ['/'],
    icon: [undefined, 'envelope', ['fab', 'github']],
    label: ['Label', 'Longer Label', 'Super Long Label', undefined],
  })));
