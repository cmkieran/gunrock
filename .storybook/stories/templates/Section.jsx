/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { article, simple } from '../../sampleAst';
import Section from '../../../src/templates/Section';

storiesOf('StaticQuery', module)
  .add('Section', () => (
    <Section data={{
      thisPage: {
        id: 'abc123',
        content: simple,
        excerpt: 'Lorem ipsum and all that jazz',
        fields: {
          slug: '/foo',
        },
        meta: {
          title: 'I\'m an article!',
          templateKey: 'Page'
        }
      },
      allMarkdownPages: {
        pages: [
          {
            page: {
              id: 'abc123',
              content: simple,
              excerpt: 'Lorem ipsum and all that jazz',
              fields: {
                slug: '/foo',
              },
              meta: {
                title: 'I\'m an article!',
                templateKey: 'Page'
              }
            },
          },
          {
            page: {
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
          }
        ]
      }
    }}
    />
  ));
