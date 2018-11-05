/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import PropTypes from 'prop-types';
import RehypeReact from 'rehype-react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableFooter,
  Typography,
} from '@material-ui/core';

import LinkButton from '../markdown/LinkButton';
import Anchor from '../markdown/Anchor';

const astContent = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: (props) => (<Typography gutterBottom variant="h1" {...props} />),
    h2: (props) => (<Typography gutterBottom variant="h2" {...props} />),
    h3: (props) => (<Typography gutterBottom variant="h3" {...props} />),
    h4: (props) => (<Typography gutterBottom variant="h4" {...props} />),
    h5: (props) => (<Typography gutterBottom variant="h5" {...props} />),
    h6: (props) => (<Typography gutterBottom variant="h6" {...props} />),
    p: (props) => (<Typography paragraph {...props} />),
    button: LinkButton,
    table: Table,
    thead: TableHead,
    tbody: TableBody,
    tr: TableRow,
    td: TableCell,
    tfoot: TableFooter,
    a: Anchor,
  },
}).Compiler;

const AstContent = ({ content }) => (
  astContent(content)
);

AstContent.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape).isRequired,
    data: PropTypes.shape({}).isRequired,
  }).isRequired,
};

export default AstContent;
