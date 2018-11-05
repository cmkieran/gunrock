/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import '@babel/polyfill';
import '@storybook/addon-console';

import 'prismjs/themes/prism-okaidia.css';
import 'katex/dist/katex.min.css';
import 'sanitize.css';

import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import { checkA11y } from '@storybook/addon-a11y';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import JssProvider from 'react-jss/lib/JssProvider';
import { withViewport } from '@storybook/addon-viewport';

withOptions({
  name: 'Gunrock Storybook',
  theme: themes.dark,
});

// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link
// would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
};

const generateClassName = (rule, styleSheet) =>
  `${styleSheet.options.classNamePrefix}-${rule.key}`;

addDecorator((story) => (
  <JssProvider generateClassName={generateClassName}>
    {story()}
  </JssProvider>
));

addDecorator((story) => (
  <MuiThemeProvider theme={createMuiTheme({ typography: { useNextVariants: true } })}>
    {story()}
  </MuiThemeProvider>
));

addDecorator(checkA11y);
addDecorator(withViewport());

configure(() => {
  const req = require.context('./stories', true, /\.jsx?$/);

  req.keys().forEach((filename) => req(filename))
}, module);
