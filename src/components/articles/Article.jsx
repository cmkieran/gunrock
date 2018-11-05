/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import { graphql } from 'gatsby';

import AstContent from '../site/AstContent';
import Authors from './Authors';
import TagChips from './TagChips';

const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing.unit * 2,
  },
});

const Article = React.memo(({
  content,
  date,
  tags,
  title,
  timeToRead,
  authors,
  classes,
}) => (
  <section className={classes.container}>
    <Typography variant="h3">
      {title}
    </Typography>
    <Typography variant="h5">
      <Authors authors={authors} />
    </Typography>
    {date ? (
      <Typography>
        {`Published ${date}`}
      </Typography>
    ) : null}
    <Typography>
      {`${timeToRead} minute read`}
    </Typography>
    <TagChips tags={tags} />
    <Typography className={classes.container} component="div">
      <AstContent content={content} />
    </Typography>
  </section>
));

Article.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.string.isRequired,
};

export default withStyles(styles)(Article);

export const articlePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  content: PropTypes.shape({}).isRequired,
  excerpt: PropTypes.string,
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  meta: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    templateKey: PropTypes.string.isRequired,
  }).isRequired,
});

export const query = graphql`
  fragment ArticleFragment on MarkdownRemark {
    id
    timeToRead
    excerpt
    content: htmlAst
    fields {
      slug
    }
    meta: frontmatter {
      templateKey
      date(formatString: "MMMM DD, YYYY")
      title
      authors
      tags
    }
  }
`;
