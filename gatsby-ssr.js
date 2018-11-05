/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */
/* eslint-disable react/jsx-filename-extension */

const React = require('react');
const { renderToString } = require('react-dom/server');
const { JssProvider, SheetsRegistry } = require('react-jss');
const { create } = require('jss');
const preset = require('jss-preset-default').default;
const { createGenerateClassName, createMuiTheme, MuiThemeProvider } = require('@material-ui/core/styles');

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheets = new SheetsRegistry();
  const jss = create(preset());
  const toRender = (
    <JssProvider registry={sheets} jss={jss}>
      <MuiThemeProvider
        theme={createMuiTheme({ typography: { useNextVariants: true } })}
        sheetsManager={new Map()}
      >
        {bodyComponent}
      </MuiThemeProvider>
    </JssProvider>
  );
  jss.options.createGenerateClassName = createGenerateClassName;

  const bodyHTML = renderToString(toRender);

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ]);
};
