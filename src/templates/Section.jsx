import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/site/Layout';
import { pagePropType } from '../components/site/Page';
import { articlePropType } from '../components/articles/Article';
import Section from '../components/site/Section';

const SectionTemplate = React.memo(({ data: { thisPage, allMarkdownPages } }) => (
  <Layout title={thisPage.meta.title}>
    <Section
      content={thisPage.content}
      pages={allMarkdownPages.pages.filter(({ page }) => page.fields.slug.startsWith(thisPage.fields.slug)
        && page.fields.slug !== thisPage.fields.slug)}
    />
  </Layout>
));

SectionTemplate.propTypes = {
  data: PropTypes.shape({
    thisPage: pagePropType.isRequired,
    allMarkdownPages: PropTypes.shape({
      pages: PropTypes.arrayOf(PropTypes.shape({
        page: PropTypes.oneOfType([
          articlePropType,
          pagePropType
        ])
      })).isRequired
    }),
  }).isRequired,
};

export default SectionTemplate;

export const query = graphql`
  query SectionQuery($id: String!) {
    thisPage: markdownRemark(id: { eq: $id }) {
      ...PageFragment
    }
    allMarkdownPages: allMarkdownRemark(
      filter: {
        frontmatter: {
          draft: { ne: true }
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
