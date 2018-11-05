/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

import MockComponent from './MockComponent';

registerRequireContextHook();

jest.doMock('@material-ui/core/Modal', () => MockComponent);
jest.doMock('@material-ui/core/Collapse', () => MockComponent);
jest.doMock('@material-ui/core/Fade', () => MockComponent);
jest.doMock('@material-ui/core/Grow', () => MockComponent);
jest.doMock('@material-ui/core/Slide', () => MockComponent);
jest.doMock('@material-ui/core/Zoom', () => MockComponent);
jest.mock('gatsby');

configure({ adapter: new Adapter() });
ReactDOM.createPortal = (node) => React.createElement('portal-dummy', null, node);

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line no-console
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
