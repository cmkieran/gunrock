/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from '../../../src/components/site/Section';
import { short, simple } from '../../resources/sampleAst';

storiesOf('site', module)
  .add('Section', () => (
    <Section
      content={ short }
      pages={[
        {
          page: {
            id: 'abc',
            excerpt: 'Cras nibh arcu, ullamcorper vitae diam ac, sodales rutrum lacus. Sed sodales vel mauris sed iaculis.',
            fields: {
              slug: '/',
            },
            meta: {
              templateKey: 'Page',
              title: 'I\'m a page!'
            }
          }
        },
        {
          page: {
            id: 'def',
            timeToRead: 8,
            fields: {
              slug: '/',
            },
            excerpt: 'Cras nibh arcu, ullamcorper vitae diam ac, sodales rutrum lacus. Sed sodales vel mauris sed iaculis.',
            meta: {
              templateKey: 'Article',
              date: 'October 1, 2018',
              authors: ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'],
              tags: ['foo', 'bar', 'baz'],
              title: 'I\'m an article!'
            }
          }
        }
      ]}
    />
  ));
