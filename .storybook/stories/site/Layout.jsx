/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '../../../src/components/site/Layout';

storiesOf('StaticQuery', module)
  .add('Layout', () => <Layout title="Index">Hello world</Layout>);
