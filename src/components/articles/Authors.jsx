/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';

const Authors = React.memo(({ authors = [] }) => {
  let formattedAuthors;

  if (authors.length > 0) {
    const firstAuthorParts = authors[0].split(' ');
    formattedAuthors = [`${firstAuthorParts.pop()}, ${firstAuthorParts.join(' ')}`];

    if (authors.length > 3) {
      formattedAuthors.push('et al.');
    } else {
      formattedAuthors.push(...authors.slice(1));
    }
  } else {
    formattedAuthors = authors;
  }

  return (formattedAuthors.join(', '));
});

Authors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
};

export default Authors;
