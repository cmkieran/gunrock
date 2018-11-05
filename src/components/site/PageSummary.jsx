/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardActions, CardContent, CardHeader, Typography, withStyles
} from '@material-ui/core';
import { Link } from 'gatsby';

import { pagePropType } from './Page';
import TagChips from '../articles/TagChips';

const styles = () => ({
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

const PageSummary = React.memo(({
  classes,
  page: {
    excerpt,
    fields: {
      slug
    },
    meta: {
      tags,
      title,
    }
  }
}) => (
  <Card className={classes.card}>
    <CardHeader
      title={title}
    />
    <CardContent className={classes.cardContent}>
      <Typography className={classes.container}>
        {excerpt}
      </Typography>
    </CardContent>
    <CardActions className={classes.container}>
      <Button
        variant="contained"
        component={Link}
        to={slug}
        size="small"
        color="primary"
      >
        View page
      </Button>
      <TagChips tags={tags || []} limit />
    </CardActions>
  </Card>
));

PageSummary.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  page: pagePropType.isRequired,
};

export default withStyles(styles)(PageSummary);
