/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import lodash from 'lodash';
import Button from '@material-ui/core/Button';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  tagContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagButton: {
    paddingLeft: 0
  },
  tag: {
    marginRight: theme.spacing.unit / 2,
  }
});

const TagChips = React.memo(({
  classes, limit, tags = [], width
}) => {
  let filteredTags = tags.sort();

  switch (width) {
    case 'xs':
      filteredTags = [];
      break;
    case 'sm':
      filteredTags = filteredTags.slice(0, 1);
      break;
    case 'md':
      filteredTags = filteredTags.slice(0, 2);
      break;
    default:
      filteredTags = filteredTags.slice(0, 3);
  }

  if (!limit) {
    filteredTags = tags;
  }

  const len = tags.length - filteredTags.length;

  return (
    <div className={classes.tagContainer}>
      {filteredTags.map((tag) => (
        <Button
          key={tag}
          component={Link}
          variant="text"
          to={`/tag/${lodash.kebabCase(tag)}/`}
          size="small"
          aria-label={tag}
          className={classes.tagButton}
          color="secondary"
        >
          <FontAwesomeIcon icon="tag" className={classes.tag} />
          {tag}
        </Button>
      ))}
      { len > 0 ? (
        <Typography color="secondary">
          <FontAwesomeIcon icon="tag" />
          +
          {len}
        </Typography>
      ) : null }
    </div>
  );
});

TagChips.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string.isRequired,
  limit: PropTypes.bool,
};

TagChips.defaultProps = {
  limit: false,
};

export default withStyles(styles)(withWidth()(TagChips));
