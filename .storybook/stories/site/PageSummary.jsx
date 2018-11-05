/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import PageSummary from '../../../src/components/site/PageSummary';
import { simple } from '../../sampleAst';

storiesOf('site', module)
  .add('PageSummary', () => (
    <PageSummary
      page={ {
        content: { simple },
        excerpt: 'Cras nibh arcu, ullamcorper vitae diam ac, sodales rutrum lacus. Sed sodales vel mauris sed iaculis.',
        fields: {
          slug: '/',
        },
        meta: {
          title: 'I\'m an article!'
        }
      } }
    />
  ));
