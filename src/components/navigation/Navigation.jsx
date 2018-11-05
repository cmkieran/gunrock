/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import NavigationInner from './NavigationInner';

export const mapNavLinks = (navLinks = []) => navLinks
  .map(({ navLink: { meta, fields } }) => ({
    label: meta.siteNav.label,
    icon: meta.siteNav.icon,
    url: fields.slug
  }))
  .sort();

const Navigation = React.memo(() => (
  <StaticQuery
    query={graphql`
      {
        siteJson {
          copyright
          sidebarImg: sidebar
        }
        bio: bioJson {
          avatar
          location
          name
          contact {
            label
            url
            icon
          }
        }
        allMarkdownRemark(
          limit: 5,
          sort: {
            order: ASC,
            fields: [frontmatter___siteNav___order, frontmatter___siteNav___label]
          },
          filter: { frontmatter: { siteNav: { label: { ne: null } }, draft: { ne: true } } }
        ) {
          navLinks: edges {
            navLink: node {
              fields{
                slug
              }
              meta: frontmatter {
                siteNav {
                  label
                  icon
                }
              }
            }
          }
        }
      }
    `}
    render={({ siteJson: { copyright, sidebarImg }, bio, allMarkdownRemark: { navLinks } }) => (
      <NavigationInner
        bio={bio}
        copyright={copyright}
        navLinks={mapNavLinks(navLinks)}
        sidebarImg={sidebarImg}
      />
    )}
  />
));

export default Navigation;
