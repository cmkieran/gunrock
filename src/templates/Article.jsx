import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/site/Layout';
import Article, { articlePropType } from '../components/articles/Article';

const ArticleTemplate = React.memo(({ data: { article } }) => (
  <Layout title={article.meta.title}>
    <Article
      content={article.content}
      timeToRead={article.timeToRead}
      date={article.meta.date}
      authors={article.meta.authors}
      tags={article.meta.tags}
      title={article.meta.title}
    />
  </Layout>
));

ArticleTemplate.propTypes = {
  data: PropTypes.shape({
    article: articlePropType.isRequired,
  }),
};

export default ArticleTemplate;

export const query = graphql`
  query ArticleQuery($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      ...ArticleFragment
    }
  }
`;
