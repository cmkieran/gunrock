import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/site/Layout';
import Section from '../components/site/Section';
import { pagePropType } from '../components/site/Page';
import { articlePropType } from '../components/articles/Article';

const TagsTemplate = React.memo(({ data: { allMarkdownPages, allSiteNavLinks }, pageContext }) => (
  <Layout title={pageContext.tag}>
    <Section
      content={{
        children: [{
          children: [{ type: 'text', value: pageContext.tag }],
          properties: {},
          tagName: 'h1',
          type: 'element'
        }],
        data: {
          quirksMode: false,
        },
        type: 'root'
      }}
      pages={allMarkdownPages.pages}
    />
  </Layout>
));

TagsTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownPages: PropTypes.shape({
      pages: PropTypes.arrayOf(PropTypes.shape({
        page: PropTypes.oneOfType([
          articlePropType,
          pagePropType
        ])
      })).isRequired
    }),
  }).isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default TagsTemplate;

export const query = graphql`
  query TagsQuery($tag: String) {
    allMarkdownPages: allMarkdownRemark(
      filter: {
        frontmatter: {
          draft: { ne: true }
          tags: { in: [$tag] } 
        }
      }
    ) {
      pages: edges {
        page: node {
          ...ArticleFragment
        }
      }
    }
  }
`;
