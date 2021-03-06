/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { article } from '../../resources/sampleAst';
import Article from '../../../src/templates/Article';

storiesOf('StaticQuery', module)
  .add('Article', () => (
    <Article data={{
      article: {
        id: 'abc123',
        content: article,
        excerpt: 'Lorem ipsum and all that jazz',
        timeToRead: 8,
        fields: {
          slug: '/',
        },
        meta: {
          date: 'October 1, 2018',
          authors: ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'],
          tags: ['foo', 'bar', 'baz'],
          title: 'I\'m an article!',
          templateKey: 'Article'
        }
      }
    }}
    />
  ));
