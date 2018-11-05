/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

import Page, { pagePropType } from './Page';
import PageSummary from './PageSummary';
import ArticleSummary from '../articles/ArticleSummary';
import { articlePropType } from '../articles/Article';

const styles = (theme) => ({
  title: {
    paddingTop: theme.spacing.unit * 4,
    textAlign: 'center',
    width: '100%',
  }
});

const Section = React.memo(({ classes, content, pages }) => (
  <Grid container spacing={16} justify="center">
    <Grid xs={12} item>
      <Page content={content} />
    </Grid>
    {pages.map(({ page }) => {
      let result = null;
      switch (page.meta.templateKey) {
        case 'Article':
          result = (<ArticleSummary article={page} />);
          break;
        default:
          result = (<PageSummary page={page} />);
      }

      return (<Grid key={page.id} xs={12} item>{result}</Grid>);
    })}
  </Grid>
));

Section.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  content: PropTypes.shape({}).isRequired,
  pages: PropTypes.arrayOf(PropTypes.shape({
    page: PropTypes.oneOfType([
      articlePropType,
      pagePropType
    ])
  })).isRequired
};

export default withStyles(styles)(Section);
