/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import SidebarNavButton from '../../../src/components/navigation/SidebarNavButton';

library.add(fab, far, fas);

storiesOf('navigation', module)

  .add('SidebarNavButton', (withPropsCombinations(SidebarNavButton, {
    label: ['Home', 'Research', 'Supercalifragilisticexpialidocious'],
    url: [''],
    icon: ['envelope', ['far', 'envelope'], ['fas', 'envelope'], ['fab', 'github']],
    extended: [true, false]
  })));
