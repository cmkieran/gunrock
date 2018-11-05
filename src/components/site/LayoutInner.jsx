/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  createMuiTheme, Grid, MuiThemeProvider, Slide, Typography, withStyles
} from '@material-ui/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import NavigationInner from '../navigation/Navigation';

import 'prismjs/themes/prism-okaidia.css';
import 'katex/dist/katex.min.css';
import 'sanitize.css';

library.add(fab, far, fas);

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.primary[100]
  },
  column: {
    height: '100vh',
    overflowY: 'scroll',
    overflowX: 'hidden',
    paddingTop: theme.spacing.unit * 3,
  },
  contentContainer: {
    flex: 1,
  },
});

const prepFonts = (fonts) => {
  const body = fonts.body.replace(', ', '|').replace(' ', '+');
  const heading = fonts.heading.replace(', ', '|').replace(/ /g, '+');
  return `${body}|${heading}`;
};

const LayoutInner = ({
  children,
  classes,
  title,
  site,
  theme: { type, palette, fonts }
}) => (
  <MuiThemeProvider
    theme={createMuiTheme({
      type,
      palette,
      typography: {
        useNextVariants: true,
        fontFamily: fonts.body,
        h1: { fontFamily: fonts.heading },
        h2: { fontFamily: fonts.heading },
        h3: { fontFamily: fonts.heading },
        h4: { fontFamily: fonts.heading },
        h5: { fontFamily: fonts.heading },
        h6: { fontFamily: fonts.heading },
      }
    })}
  >
    <Grid container className={classes.root} spacing={0}>
      <Helmet title={`${site.title} | ${title || site.description}`}>
        <link rel="icon" type="image/png" href={site.favicon} sizes="16x16" />
        <link href={`https://fonts.googleapis.com/css?family=${prepFonts(fonts)}`} rel="stylesheet" />
        <meta name="robots" content="INDEX, FOLLOW" />
        <meta name="googlebot" content="INDEX, FOLLOW" />
      </Helmet>
      <Grid item xs={12} md={4}>
        <NavigationInner />
      </Grid>
      <Grid item container justify="center" xs={12} md={8} className={classes.column}>
        <Grid item xs={10}>
          <Slide direction="left" in>
            <Typography component="div">
              {children}
            </Typography>
          </Slide>
        </Grid>
      </Grid>
    </Grid>
  </MuiThemeProvider>
);

LayoutInner.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({}).isRequired,
  site: PropTypes.shape({
    title: PropTypes.string.isRequired,
    favicon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  theme: PropTypes.shape({
    type: PropTypes.string.isRequired,
    palette: PropTypes.shape({
      primary: PropTypes.shape({
        main: PropTypes.string.isRequired,
      }).isRequired,
      secondary: PropTypes.shape({
        main: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    fonts: PropTypes.shape({
      body: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  title: PropTypes.string,
};

LayoutInner.defaultProps = {
  title: null,
};

export default withStyles(styles)(LayoutInner);
