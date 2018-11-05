/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

import LinkButton from '../../../src/components/markdown/LinkButton';

storiesOf('markdown', module)
  .add('LinkButton', (withPropsCombinations(LinkButton, {
    to: ['/'],
    color: ['primary', 'secondary', undefined],
    variant: ['text', 'outlined', 'contained', 'fab', 'extendedFab', undefined],
    children: ['Hello']
  })));
