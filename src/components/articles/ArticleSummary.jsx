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

import Authors from './Authors';
import TagChips from './TagChips';
import { articlePropType } from './Article';

const styles = (theme) => ({
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacer: {
    margin: `0 ${theme.spacing.unit}px`
  }
});

const ArticleSummary = React.memo(({
  article: {
    timeToRead,
    excerpt,
    fields: {
      slug,
    },
    meta: {
      title,
      date,
      authors,
      tags,
    }
  },
  classes
}) => (
  <Card className={classes.card}>
    <CardHeader
      title={title}
      subheader={(
        <div>
          <Authors authors={authors} className={classes.spacer} />
          { authors ? (<span className={classes.spacer}>|</span>) : null }
          { date ? `${date}` : null }
          <span className={classes.spacer}>|</span>
          {`${timeToRead} minute read`}
        </div>
      )}
    />
    <CardContent className={classes.cardContent}>
      <Typography>
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
        Read article
      </Button>
      <TagChips tags={tags} limit />
    </CardActions>
  </Card>
));

ArticleSummary.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  article: articlePropType.isRequired,
};

export default withStyles(styles)(ArticleSummary);
