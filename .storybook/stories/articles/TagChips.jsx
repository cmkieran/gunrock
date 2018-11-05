/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import withPropsCombinations from 'react-storybook-addon-props-combinations';

import TagChips from '../../../src/components/articles/TagChips';

storiesOf('articles', module)
  .add('TagChips', (withPropsCombinations(TagChips, {
    tags: [
      ['James Smith'],
      ['James Smith', 'Mary Johnson'],
      ['James Smith', 'Mary Johnson', 'John J. Williams'],
      ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'],
    ],
    limit: [true, false],
    width: ['xs', 'sm', 'md', 'lg']
  })));
