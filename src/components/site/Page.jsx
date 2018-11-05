/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import AstContent from './AstContent';

const Page = React.memo(({ content }) => (
  <AstContent content={content} />
));

Page.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

export default Page;

export const pagePropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  content: PropTypes.shape({}).isRequired,
  excerpt: PropTypes.string,
  fields: PropTypes.shape({
    slug: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
});

export const query = graphql`
  fragment PageFragment on MarkdownRemark {
    id
    content: htmlAst
    excerpt
    fields {
      slug
    }
    meta: frontmatter {
      templateKey
      title
    }
  }
`;
