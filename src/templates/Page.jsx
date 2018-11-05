/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/site/Layout';
import Page, { pagePropType } from '../components/site/Page';

const PageTemplate = React.memo(({ data: { page } }) => (
  <Layout title={page.meta.title}>
    <Page content={page.content} />
  </Layout>
));

PageTemplate.propTypes = {
  data: PropTypes.shape({
    page: pagePropType.isRequired,
  }).isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageQuery($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...PageFragment
    }
  }
`;
