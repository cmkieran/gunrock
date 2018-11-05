/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import ArticleSummary from '../../../src/components/articles/ArticleSummary';

storiesOf('articles/ArticleSummary', module)
  .add('Full', () => (
    <ArticleSummary
      article={ {
        timeToRead: 8,
        fields: {
          slug: '/',
        },
        meta: {
          date: 'October 1, 2018',
          authors: ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'],
          tags: ['foo', 'bar', 'baz'],
          title: 'I\'m an article!'
        }
      } }
    />
  ))
  .add('No date', () => (
    <ArticleSummary
      article={ {
        timeToRead: 8,
        fields: {
          slug: '/',
        },
        meta: {
          authors: ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'],
          tags: ['foo', 'bar', 'baz'],
          title: 'I\'m an article!'
        }
      } }
    />
  ))
  .add('No authors', () => (
    <ArticleSummary
      article={ {
        timeToRead: 8,
        fields: {
          slug: '/',
        },
        meta: {
          date: 'October 1, 2018',
          tags: ['foo', 'bar', 'baz'],
          title: 'I\'m an article!'
        }
      } }
    />
  ))
  .add('No tags', () => (
    <ArticleSummary
      article={ {
        timeToRead: 8,
        fields: {
          slug: '/',
        },
        meta: {
          date: 'October 1, 2018',
          authors: ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'],
          title: 'I\'m an article!'
        }
      } }
    />
  ));
