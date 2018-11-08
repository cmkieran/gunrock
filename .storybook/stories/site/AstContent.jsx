/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { code, headings, katex, simple, table } from '../../resources/sampleAst';
import AstContent from '../../../src/components/site/AstContent';

storiesOf('site/AstContent', module)
  .add('Code', () => (<AstContent content={ code } />))
  .add('Headings', () => (<AstContent content={ headings } />))
  .add('Katex', () => (<AstContent content={ katex } />))
  .add('Simple', () => (<AstContent content={ simple } />))
  .add('Table', () => (<AstContent content={ table } />));
