/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import LayoutInner from './LayoutInner';

const Layout = React.memo((props) => (
  <StaticQuery
    query={graphql`
      {
        site: siteJson {
          title
          favicon
          description
        }

        theme: themeJson {
          type
          palette {
            primary {
              main
            }
            secondary {
              main
            }
          }
          fonts {
            body
            heading
          }
        }
      }
    `}
    render={({ site, theme }) => (
      <LayoutInner
        site={site}
        theme={theme}
        {...props}
      />
    )}
  />
));

export default Layout;
