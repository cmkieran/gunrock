/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { article } from '../../sampleAst';
import Article from '../../../src/components/articles/Article';

storiesOf('articles/Article', module)
  .add('Full', () => (
    <Article
      content={ article }
      timeToRead={ 8 }
      date="October 1, 2018"
      authors={ ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'] }
      tags={ ['foo', 'bar', 'baz'] }
      title="I'm an article!"
    />
  ))
  .add('No date', () => (
    <Article
      content={ article }
      timeToRead={ 8 }
      authors={ ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'] }
      tags={ ['foo', 'bar', 'baz'] }
      title="I'm an article!"
    />
  ))
  .add('No authors', () => (
    <Article
      content={ article }
      timeToRead={ 8 }
      date="October 1, 2018"
      tags={ ['foo', 'bar', 'baz'] }
      title="I'm an article!"
    />
  ))
  .add('No tags', () => (
    <Article
      content={ article }
      timeToRead={ 8 }
      date="October 1, 2018"
      authors={ ['James Smith', 'Mary Johnson', 'John J. Williams', 'Patricia P. Brown'] }
      title="I'm an article!"
    />
  ));
